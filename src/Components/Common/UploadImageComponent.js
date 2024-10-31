
function UploadImageComponent(){

    function uploadFile(e){
        return e.target.files[0]
    }

    
    return (
            <div>
                <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload Food image</label>
                <input
                onChange={(e)=>uploadFile(e)} 
                class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" />
                <button onClick={}>submit</button>
            </div>
    )

}
export {UploadImageComponent}