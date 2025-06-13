'use client'
import React,{use, useState} from 'react'

import Script from 'next/script';



declare global {
  interface window{
    Razorpay:any;
    
  }
 
}

const PaymentPage = (formdata:any) => {
  // console.log(formdata.formdata.amount)
  const AMOUNT = formdata.formdata.amount
  const [isProcessing, setIsProcessing] = useState(false)

  
  
  const handleCancel = () => {
    window.history.back()
  }

  const handlePayment = async () => {
    setIsProcessing(true)

    try {
      const data = await fetch("/api/create-order",{method: "POST"})
      // const data = await response.json();

      const options = {
        key : process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: AMOUNT * 100,
        currency: "INR",
        name:"Rakhis Fashions",
        description:formdata.formdata.reference,
        
        handler : function (response:any){
          console.log("payment successfull",response)
          
        },
        prefill:{
          name:"john Doe",
          email:formdata.formdata.email_id,
          contact:"999999999",
        },
        theme:{
          color:"#3399cc",
        }
      };
      const rzp1 = new (window as any).Razorpay(options)
      rzp1.open()
    }catch(error){
      console.error("payment failed",error)
    } finally {
      setIsProcessing(false)
      window.history.back()
    }
  }

  return (
    <div className = "flex flex-col items-center justify-center mmin-h-screen bg-gray-100">
      <Script src="https://checkout.razorpay.com/v1/checkout.js"/>
      <div className="p-6 bg-white rounder-lg shadow-md">
        <h1 className="text 2xl font-bold mb-4">Payments Page</h1>
        <p className="mb-4">Amount to pay :{AMOUNT} INR</p>
        <button 
        onClick={handlePayment}
        disabled={isProcessing}
        className="px-4 py-2 bg-blue-500 text-white rounded bover:bg-blue-600 disabled:bg-gray-400">
        {isProcessing ? "processing..." : "Pay Now"}
        </button>
         <button 
        onClick={handleCancel}
       
        className="px-4 py-2 bg-blue-500 text-white rounded bover:bg-blue-600 disabled:bg-gray-400">
        CANCEL
        </button>
      </div> 
       
      
    </div>

  )
}

export default PaymentPage
