import { useState } from "react";
import { LoginForm } from "../Components/Auth/LoginForm";
import { RegisterForm } from "../Components/Auth/Register";

function Authenticate() {
  const [errors, setErrors] = useState([]);
  const [activeForm, setActiveForm] = useState("login"); 


  function toggleForm(formName) {
    setActiveForm(formName);
    setErrors([]);
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen my-3">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex mb-8">
          <button
            id="loginTab"
            onClick={() => toggleForm("login")}
            className={`w-1/2 text-center p-3 font-semibold ${
              activeForm === "login" ? "bg-gray-200" : "text-gray-700"
            } rounded-l-lg`}
          >
            Login
          </button>
          <button
            id="registerTab"
            onClick={() => toggleForm("register")}
            className={`w-1/2 text-center p-3 font-semibold ${
              activeForm === "register" ? "bg-gray-200" : "text-gray-700"
            }`}
          >
            Register
          </button>
        </div>

        {activeForm === "login" && <LoginForm/>}

        {activeForm === "register" && <RegisterForm/> }

      </div>
    </div>
  )
}

export { Authenticate };
