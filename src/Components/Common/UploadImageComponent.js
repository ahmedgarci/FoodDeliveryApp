import { useState } from "react";
import { PostData } from "../../Functions/Common/PostDataToBackend";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

function UploadImageComponent({onUploadComplete}) {
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [uploadedImg,setUploadedImg]=useState(null)
    async function uploadFile(e) {    
        setLoading(true)
        setError(null)
        const formData = new FormData();
        formData.append("image", e.target.files[0]);
        
        const { response, error } = await PostData({ url: "http://localhost:3500/food/image/upload", data: formData });

        if(error){setError(error)}else{setUploadedImg(response.data); onUploadComplete(response.data.id) }

        setLoading(false);
    }
    
    if(error){return<ErrorComponent error={error} />}
    if(isLoading){return<LoadingComponent />}

    return (
        <>
         <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">
            Food Image
            </label>
        {uploadedImg? <img src={uploadedImg.imageUrl}/> :
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="multiple_files">
                Upload Food image
            </label>
            <input
                onChange={uploadFile}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="multiple_files"
            type="file"
        />
    </div>
        }
        </>
      
    );
}

export { UploadImageComponent };
