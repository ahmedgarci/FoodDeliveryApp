import { useContext, useState } from "react";
import { Login } from "../../Services/Auth/Login";
import ErrorComponent from "../Common/ErrorComponent";
import { userContext } from "../../Context/UserContext";

function LoginForm(){
    const [user, setUser] = useState({ email: null, password: null });
    const [errors, setErrors] = useState([]);
    const {setUserInfo} = useContext(userContext)

    async function handleLogin(e) {
      e.preventDefault();
      const { response, error } = await Login({ email: user.email, password: user.password });
      if (error) {
        setErrors([error]);
        return
      }
      setUserInfo(user.email)

    }

    return(
        <form id="loginForm" className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800 text-center">Login to Your Account</h2>
            {errors && errors.length > 0 && errors.map((e, index) => <ErrorComponent key={index} error={e} />)}

            <div>
              <label className="block text-gray-600" htmlFor="loginEmail">
                Email
              </label>
              <input
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                type="email"
                id="loginEmail"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-gray-600" htmlFor="loginPassword">
                Password
              </label>
              <input
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                type="password"
                id="loginPassword"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-yellow-500"
                placeholder="Enter your password"
              />
            </div>
            <button
              onClick={(e) => handleLogin(e)}
              className="w-full bg-yellow-500 text-white py-2 rounded-md font-semibold hover:bg-yellow-600"
            >
              Login
            </button>
         
          </form>
    )
}

export {LoginForm}