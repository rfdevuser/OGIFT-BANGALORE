"use client"
import { ADD_STUDENT_PAYMENT_MUTATION} from '@/utils/gql/GQL_MUTATIONS';
import {GET_STUDENT} from '@/utils/gql/GQL_QUERIES';
import { useMutation, useQuery } from '@apollo/client';
import { useState } from 'react';
import { FormInput } from '@/utils/constants/types'; // Adjust the import path based on your project structure
import Image from 'next/image';


const Payment = () => {
  const LoadingSpinner = () => {
    return (
      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  };
  const [formData, setFormData] = useState({
    student_id:'',
    payment_amount:'',
    payment_date:'',
    email_id: ''
    
  });

 

  const handleChange = (e) => {
   
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitForm, { loading, error }] = useMutation(ADD_STUDENT_PAYMENT_MUTATION);
 
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const { data } = await submitForm({ variables: formData });
      
      console.log('Form submitted successfully:', data.submitForm);
      
      alert('Form submitted successfully!');
      setFormData({
       student_id:'', 
       payment_amount:'',
       payment_date:'',
       email_id: ''
     
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

 

  return (
    <div>
   
      
    <section id="contact" className="overflow-hidden py-2 md:py-2 lg:py-2">
      <div className="container">
      {loading && <LoadingSpinner />}
        <div className="-mx-4 flex flex-wrap mt-10">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Make Your Payment
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
            
                <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="student_id" className="mb-3 block text-sm font-medium text-dark dark:text-white">Enter Student ID</label>
                      <input type="text" id="student_id" name="student_id" value={formData.student_id} onChange={handleChange} placeholder="Enter your ID" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="studentID" required />
                      <label>Enter the student ID shared in the admissions email</label>
                    </div>
                  </div>
                 
                 
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email_id" className="mb-3 block text-sm font-medium text-dark dark:text-white">Email</label>
                      <input type="string" id="email_id" name="email_id" value={formData.email_id} onChange={handleChange} placeholder="Enter your email" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="email_id" required  />
                    </div>
                  </div>
                 
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="payment_amount" className="mb-3 block text-sm font-medium text-dark dark:text-white">Enter Amount</label>
                      <input type="number" id="payment_amount" name="payment_amount" step="0.1" value={parseFloat(formData.payment_amount)} onChange={handleChange} placeholder="Enter Amount"  className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="payment_amount" required  />
                    </div>
                  </div>
                 
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="payment_date" className="mb-3 block text-sm font-medium text-dark dark:text-white">Enter Date</label>
                      <input type="date" id="payment_date" name="payment_date" value={formData.payment_date} onChange={handleChange} placeholder="Enter Date" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="payment_date" required  />
                    </div>
                  </div>
                 
            
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-sm bg-dark px-9  py-4 text-base font-medium text-white  hover:bg-[#701a75] dark:shadow-submit-dark">Make Payment</button>
                  </div>
                </div>
              </form>
              
            </div>
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2  xl:w-1/3 lg:mt-0 justify-center items-center">
            <div className="rounded-sm bg-[#f5d0fe] p-6 shadow-three dark:bg-gray-dark">
              <h3 className="mb-4 text-xl font-bold text-black dark:text-white"></h3>
             
              <div className='mt-6'>
                <Image src="/images/placement/placement_poster.png" alt="Admission Poster" width={400} height={500} />
              </div>
              <div className='mt-6'>
                <Image src="/images/placement/internship.png" alt="Internship Poster" width={400} height={500} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    
    </div>
  );
};

export default Payment;
