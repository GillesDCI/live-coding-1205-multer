import mongoose from 'mongoose';

const {Schema, model} = mongoose;

const fileSchema = new Schema({
    dateCreated:{type:Date, required:true, default:Date.now},
    fileName:{type:String},
    fileURL:{type:String}
})


const File = model('File', fileSchema);

export default File;