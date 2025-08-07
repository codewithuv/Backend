import {asyncHandler} from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.models.js"
import { uploadOnCloundary } from "../utils/cloudnary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async(req,res)=>{
    // get user details from frontend
    // validation -not empty
    // check if user already exist :username , email
    // check for images , check for avatar
    // upload them to cloudinary
    // create user object -create entry in  db
    // remove password and refresh token field from response
    // check for user creation 
    // return  response else error



    const {fullname ,email, username, password}=req.body
    console.log("email" ,email);

    if([fullname, email, username,password].some((field)=>     field?.trim()==="") ) 
        {
            throw new ApiError("Please fill all fields",400);
        }


    
    //user exist or not
        const existedUser= User.findOne({
            $or: [{ username } , { email }]
        })
        console.log(existedUser);
        if(existedUser){
            throw new ApiError("User with email or username already exist",409)
        }

        const avatarlocalpath=req.files?.avatar[0]?.path; // in our server not in  cloud
        const coverImagelocalpath=req.files?.coverImage[0]?.path; // in our server not in  cloud


        if(!avatarlocalpath)
        {
            throw new ApiError("Avatar files is required",400)
        }


        //upload them to cloundnary
        
        const avatar=await uploadOnCloundary(avatarlocalpath);
        const coverImage=await uploadOnCloundary(coverImagelocalpath);

        if(!avatar)
        {
            throw new ApiError("Avatar files is required",400)
        }

        
         //create user object -create entry in  db
         const user=await User.create({
            fullname,
            avatar:avatar.url,
            coverImage:coverImage.url?.url ||" ",
            email,
            password,
            username:username.toLowerCase()
         })


        const createduser= await User.findById(user._id).select(
            "-password -refreshtoken"
        );

        if(!createduser){
            throw new ApiError("Somwthing is went wrong while regrestering a user",500)
        }

        return res.status(201).json(
            new ApiResponse(200,createduser, "User registered Successfully")
        )

})

export {
    registerUser
}