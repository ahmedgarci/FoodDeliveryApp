import React, { useState } from 'react';
import ReactCodeInput from 'react-code-input';
import { ActivateUserAccount } from '../Services/Auth/ActivateAccount';

function ActivateAccount() {
    const [error,setError]= useState(null)
    const [successMsg,setSuccessMsg]=useState(null)

    function CheckIfCodeFilled(value){
        if(value.length == 5){
            handleActivationAccount(value) 
        }
    }

    async function handleActivationAccount(value){
        const { response,error} = await ActivateUserAccount(value) 
        console.log(error);       
        if(response){
            setError(null)
            setSuccessMsg("account activated u are be redirected to login page") 
            
        }
        if(error){
            setError(error)
            setSuccessMsg(null)
        }
        
    }


    const inputStyle = {
        border: '2px solid #e5e7eb', 
        borderRadius: '0.375rem',
        padding: '0.5rem',
        width: '3rem',
        height: '3rem',
        margin: '0 0.5rem', 
        textAlign: 'center',
        fontSize: '1.25rem', 
        outline: 'none',
        transition: 'border-color 0.2s, box-shadow 0.2s',
    }

    const inputStyleFocus = {
        ...inputStyle,
        borderColor: '#3b82f6', 
        boxShadow: '0 0 0 2px rgba(59, 130, 246, 0.4)', 
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold text-gray-800 mb-1">
                Activate Your Account
            </h1>
            {error &&  <h2 className=' font-semibold text-red-600 py-5'>{error}</h2> }
            {successMsg &&    <h2 className=' text-green-500'>{successMsg}</h2>
            }
            <ReactCodeInput 
                type="text"
                fields={5}
                inputStyle={inputStyle} 
                inputStyleInvalid={inputStyleFocus} 
                onChange={CheckIfCodeFilled}
            />
        </div>
    );
}

export { ActivateAccount };
