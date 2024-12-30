import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { PostData } from "../../../Functions/Common/PostDataToBackend";

 function CategoryModal() {
    const [openModal, setOpenModal] = useState(false);
    const [catName,setCatName]= useState(null)
    
    function HandleCategoryCreation(){
        const {error,data,loading} = PostData({url:"http://localhost:3500/category",data:{"catName":catName}})
        if(error){
            console.log(error);
        }
    }

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>new Category</Button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Create new Food Category</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <input type="text" onChange={(e)=>setCatName(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => HandleCategoryCreation()}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export {CategoryModal}