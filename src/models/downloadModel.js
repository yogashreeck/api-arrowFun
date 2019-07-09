import mongoose from 'mongoose'
 
const Schema = mongoose.Schema
 
const DownloadSchema = new Schema({
    firstname: {
        type: String
    },
    lastname: {
        type: String
    },
    email:{
         type: String
    }
})
 
export default DownloadSchema;