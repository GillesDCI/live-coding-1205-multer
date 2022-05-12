import axios from 'axios';
import {useState} from 'react';

export default function UploadForm(){

    const [imageUploaded, setImageUploaded] = useState(null);

    const onSubmitForm = async(e) => {
        e.preventDefault();
        console.log("Upload the file....");
        const formData = new FormData(e.target);

        try {
            const res = await axios.post('http://localhost:3001/api/files/create', formData);
            console.log("the response is", res);

            setImageUploaded(res.data.file.fileURL)
        } catch (error) {
            
        }
    }

    return (
        <>
    <h1>Upload a file</h1>

    {imageUploaded && <img src={imageUploaded} />}

    <form onSubmit={onSubmitForm}>
        {/* set the name of input to image  */}
        <input type="file" name="image" multiple={false}  />
        <button>Upload</button>
    </form>
    </>
    )
}