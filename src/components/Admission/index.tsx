"use client"
import { ADD_ADMISSION_MUTATION } from '@/utils/gql/GQL_MUTATIONS';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { FormInput } from '@/utils/constants/types'; // Adjust the import path based on your project structure
import Image from 'next/image';

const Contact = () => {
  const LoadingSpinner = () => {
    return (
      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    courseInterest: '',
    startDate: '',
    state: '',
    currentStatus: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitForm, { loading, error }] = useMutation(ADD_ADMISSION_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await submitForm({ variables: formData });
      console.log('Form submitted successfully:', data.submitForm);
      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        courseInterest: '',
        startDate: '',
        state: '',
        currentStatus: ''
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  const courses = ['Diploma in Fashion Designing', 'Advance Diploma in Fashion Designing', 'Vocational Course in Garment making & Tailoring', 'Vocational Embroidery & Craft Course', 'Advance Vocational Course in Garment making & Tailoring'];
  const indianStates = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];
  const currentStatusOptions = ['Student', 'Homemaker', 'Professional', 'Other'];

  return (
    <section id="contact" className="overflow-hidden py-2 md:py-2 lg:py-2">
      <div className="container">
      {loading && <LoadingSpinner />}
        <div className="-mx-4 flex flex-wrap mt-10">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Apply Now for Admission at OGIFT!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
            
                <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="firstName" className="mb-3 block text-sm font-medium text-dark dark:text-white">First Name</label>
                      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="given-name" required />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="lastName" className="mb-3 block text-sm font-medium text-dark dark:text-white">Last Name</label>
                      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="family-name" required  />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="phoneNumber" className="mb-3 block text-sm font-medium text-dark dark:text-white">Phone Number</label>
                      <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} placeholder="Enter your phone number" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="tel" required />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="email" required  />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="courseInterest" className="mb-3 block text-sm font-medium text-dark dark:text-white">Course Interest</label>
                      <select id="courseInterest" name="courseInterest" value={formData.courseInterest} onChange={handleChange} className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="course" required >
                        <option value="">Select Course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="startDate" className="mb-3 block text-sm font-medium text-dark dark:text-white">Start Date</label>
                      <input type="date" id="startDate" name="startDate" value={formData.startDate} onChange={handleChange} className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="start-date" required />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="state" className="mb-3 block text-sm font-medium text-dark dark:text-white">State</label>
                      <select id="state" name="state" value={formData.state} onChange={handleChange} className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="state" required >
                        <option value="">Select State</option>
                        {indianStates.map((state, index) => (
                          <option key={index} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="currentStatus" className="mb-3 block text-sm font-medium text-dark dark:text-white">Current Status</label>
                      <select id="currentStatus" name="currentStatus" value={formData.currentStatus} onChange={handleChange} className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="status" required >
                        <option value="">Select Status</option>
                        {currentStatusOptions.map((status, index) => (
                          <option key={index} value={status}>{status}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button type="submit" className="rounded-sm bg-dark px-9  py-4 text-base font-medium text-white  hover:bg-[#701a75] dark:shadow-submit-dark">Start Your Journey</button>
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
  );
};

export default Contact;
