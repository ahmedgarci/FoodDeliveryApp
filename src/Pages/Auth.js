import { useState } from "react"
import { Login } from "../Functions/Auth/Login"
import ErrorComponent from "../Components/Common/ErrorComponent";

function Authenticate(){
  const [user,setUser]=useState({email:null,password:null})
  const [errors,setErrors] = useState([] )

  async function handleLogin(e){
    e.preventDefault();
    const {response,error} =  await Login({email:user.email,password:user.password})
    if(error){setErrors([error])}
  } 
    return(
        <div className="bg-gray-100 flex items-center justify-center h-screen">
             <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
    <div class="flex mb-8">
      <button id="loginTab" onclick="toggleForm('login')" class="w-1/2 text-center p-3 font-semibold text-gray-700 bg-gray-200 rounded-l-lg">Login</button>
      <button id="registerTab" onclick="toggleForm('register')" class="w-1/2 text-center p-3 font-semibold text-gray-700">Register</button>
    </div>

    <form id="loginForm" class="space-y-6">
      <h2 class="text-2xl font-semibold text-gray-800 text-center">Login to Your Account</h2>
      {errors && errors.length > 0 && errors.map(e=>{
        return(
            <ErrorComponent error={e}/>
          )
      })
      }
      
      <div>
        <label class="block text-gray-600" for="loginEmail" >Email</label>
        <input onChange={e=>setUser({...user,email:e.target.value})} type="email" id="loginEmail" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500" placeholder="Enter your email"/>
      </div>
      <div>
        <label class="block text-gray-600" for="loginPassword">Password</label>
        <input  onChange={e=>setUser({...user,password:e.target.value})} type="password" id="loginPassword" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500" placeholder="Enter your password"/>
      </div>
      <button
      onClick={(e)=>handleLogin(e)}
      class="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600">Login</button>
      <p class="text-center text-gray-600 mt-4">Don't have an account? <span class="text-yellow-500 cursor-pointer" onclick="toggleForm('register')">Register here</span>.</p>
    </form>

    <form id="registerForm" class="space-y-6 hidden">
      <h2 class="text-2xl font-semibold text-gray-800 text-center">Create a New Account</h2>
      <div>
        <label class="block text-gray-600" for="registerUsername">Username</label>
        <input type="text" id="registerUsername" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500" placeholder="Enter your username"/>
      </div>
      <div>
        <label class="block text-gray-600" for="registerEmail">Email</label>
        <input type="email" id="registerEmail" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500" placeholder="Enter your email" />
      </div>
      <div>
        <label class="block text-gray-600" for="registerPassword">Password</label>
        <input type="password" id="registerPassword" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500" placeholder="Enter your password" />
      </div>
      <div>
        <label class="block text-gray-600" for="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500" placeholder="Confirm your password" />
      </div>
      <button  class="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600">Register</button>
      <p class="text-center text-gray-600 mt-4">Already have an account? <span class="text-yellow-500 cursor-pointer" onclick="toggleForm('login')">Login here</span>.</p>
    </form>
  </div>
        </div>
    )

}
export {Authenticate}