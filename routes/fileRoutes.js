import express from "express";
import multer from 'multer';
import { uploadFile } from "../controllers/fileController.js";

const router = express.Router();

const storage = multer.diskStorage({
    //this is where the file will go 
    destination:function(req, file, cb){
        cb(null,'./uploads');
    },

    //name of the file
    filename:function(req, file,cb){
        const ext = file.mimetype.split('/')[1];
        const originalNameNoExtenstion = file.originalname.split('.')[0];

        cb(null, `${originalNameNoExtenstion}-${Date.now()}.${ext}`);
    }
});

const upload = multer({storage:storage});


router.post('/create', upload.single('image'), uploadFile)


export default router;