"use client"
import { ADD_STUDENT_CONTACT_MUTATION } from '@/utils/gql/GQL_MUTATIONS';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

const NewsLatterBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [addStudentContact, { loading, error }] = useMutation(ADD_STUDENT_CONTACT_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addStudentContact({
        variables: {
          name: formData.name,
          email: formData.email,
          contact: formData.contact
        }
      });
  
      console.log(loading);
      console.log(error);
      console.log('Form submitted successfully:', data.submitForm);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        contact: '',
        
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Error submitting form. Please try again later.');
    }
  };
  
  return (
    <div className="relative z-10 rounded-sm bg-transparent p-8 shadow-three dark:bg-transparent sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white text-center">
        Contact us to learn more
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25"></p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            autoComplete="name"
            required 
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            autoComplete="email"
            required 
          />
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact"
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            autoComplete="tel"
            required 
          />
          <button
            type="submit"
            className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-dark px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-[#701a75] dark:shadow-submit-dark"
          >
            Request a Call-back
          </button>
          <p className="text-center text-base leading-relaxed text-black dark:text-body-color-dark">
            No spam guaranteed, so please don’t send any spam mail.
          </p>
          
        </div>
      </form>
    </div>
  );
};

export default NewsLatterBox;
