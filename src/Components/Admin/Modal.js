import { Button, Modal, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";
import CreateNewFood from "../../Functions/Admin/CreateNewFood";
import ErrorComponent from "../Common/ErrorComponent";
import { UploadImageComponent } from "../Common/UploadImageComponent";

export function FoodModal() {
  const [openModal, setOpenModal] = useState(false);
  const [Food,setFood]= useState({name:null,description:null,price:0,category:null,imageId:null})
  const [errors,setErrors] = useState([] || null)

  const HandleOnUploadComplete = (id)=>{
    setFood({...Food,imageId:id})
  }

  const handleAddFood = async(e) => {
    e.preventDefault()
    const {response,error} = await CreateNewFood({data:Food});  
    if(error){
      setErrors([error])
    }
  };

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Add New Food</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Add New Food</Modal.Header>
        <Modal.Body>
          <div className="space-y-4">
            {errors && errors.length > 0  && <ErrorComponent error={errors} /> }
            <div>
              <Label htmlFor="foodName" value="Food Name" />
              <TextInput onChange={(e)=>setFood({...Food,name:e.target.value })} id="foodName" placeholder="Enter food name" required />
            </div>

            <UploadImageComponent onUploadComplete={HandleOnUploadComplete}/>

            <div>
              <Label htmlFor="category" value="Category" />
              <TextInput id="category" placeholder="Enter category" required />
            </div>
            <div>
              <Label htmlFor="price" value="Price ($)" />
              <TextInput onChange={(e)=>setFood({...Food,price:e.target.value })} id="price" type="number" placeholder="Enter price" required />
            </div>
            <div>
              <Label htmlFor="description" value="Description" />
              <Textarea id="description"
               onChange={(e)=>setFood({...Food,description:e.target.value })}
               placeholder="Enter food description" rows={3} />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="text-yellow-600 font-semibold" onClick={handleAddFood}>Submit</button>
          <Button color="gray" onClick={() => {
            setOpenModal(false)
            setErrors(null) 
          }}  >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
