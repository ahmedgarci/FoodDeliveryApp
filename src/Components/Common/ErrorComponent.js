
function ErrorComponent({error}){
    return(

        <div className="flex items-center bg-red-100 border justify-center mt-6
         border-red-400 text-red-600 px-4 py-3 rounded-lg " role="alert">
            <span className="font-semibold text-lg ">{error}</span>
        </div>    
      )
}

export default ErrorComponent;