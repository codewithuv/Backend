import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema =new Schema({
    videoFile:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    duration:{
        type:Number,
        default:0
    },
    views:{
        type:Number,
        default:0
    },
    owner:{
        type : Schema.Types.ObjectId,
        ref:"User"
    }
})

videoSchema.plugin(mongooseAggregatePaginate);
export const video =mongoose.model('Video',videoSchema)