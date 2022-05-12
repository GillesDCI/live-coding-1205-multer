import File from './../models/File.js';

/**
 * Controller to method to upload a file
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const uploadFile = async (req, res) => {
    console.log("the file is ", req.file);

    try {
        const newfile = await File.create({
            fileName:req.file.filename,
            fileURL:`http://localhost:3001/uploads/${req.file.filename}`
        })
        return res.status(200).json({message:'File uploaded', file:newfile});
        
    } catch (error) {
        console.error(error);
        return res.status(400).json({message:'Something went wrong'});
    }


}