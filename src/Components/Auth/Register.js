import { useState } from "react"
import { Register } from "../../Functions/Auth/Register"
import ErrorComponent from "../Common/Loading + Error/ErrorComponent";

function RegisterForm(){

    const [user,setUser] = useState({email:null,phone:null,password:null,address:null,username:null})
    const [errors, setErrors] = useState([]);
  
    async function handleRegister(e) {
      e.preventDefault();
      const { response, error } = await Register(user);
      if (error) {
        setErrors([error]);
      }
    }
    return(
        <form id="registerForm" className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">Create a New Account</h2>
        {errors && errors.length > 0 && errors.map((e, index) => <ErrorComponent key={index} error={e} />)}

        <div>
          <label className="block text-gray-600" htmlFor="registerUsername">
            Username
          </label>
          <input
            type="text"
            onChange={e=>setUser({...user,username:e.target.value})}
            id="registerUsername"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
            placeholder="Enter your username"
          />
        </div>
        <div>
          <label className="block text-gray-600" htmlFor="registerEmail">
            Email
          </label>
          <input
            type="email"
            id="registerEmail"
            onChange={e=>setUser({...user,email:e.target.value})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="block text-gray-600" htmlFor="Phone">
            Phone Number
          </label>
          <input
            type="text"
            onChange={e=>setUser({...user,phone:e.target.value})}
            id="Phone"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div>
          <label className="block text-gray-600" htmlFor="adress">
            Address
          </label>
          <input
            type="text"
            id="adress"
            onChange={e=>setUser({...user,address:e.target.value})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label className="block text-gray-600" htmlFor="registerPassword">
            Password
          </label>
          <input
            type="password"
            id="registerPassword"
            onChange={e=>setUser({...user,password:e.target.value})}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
            placeholder="Enter your password"
          />
        </div>
        
        
        <button 
        onClick={(e)=>handleRegister(e)}
        className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600">
          Register
        </button>
       
      </form>
    )
}

export {RegisterForm}