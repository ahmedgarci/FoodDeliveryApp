import { Spinner } from "flowbite-react";

function LoadingComponent(){

          return (
            <div className="flex flex-wrap gap-2 justify-center items-center">
             
              <Spinner color="pink" aria-label="Pink spinner example"  size="xl"/>
            </div>
          );
        }
    

export default LoadingComponent