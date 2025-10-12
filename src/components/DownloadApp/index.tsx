import { ADD_OGIFT_APP_DOWNLOAD_MUTATION } from '@/utils/gql/GQL_MUTATIONS';
import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { FormInput } from '@/utils/constants/types'; // Adjust the import path based on your project structure
import Image from 'next/image';
import emailjs from 'emailjs-com';

var download = false;

const Contact = () => {
  const LoadingSpinner = () => {
    return (
      <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
   
  });



  const handleChange = (e) => {
       
       setFormData({ ...formData, [e.target.name]: e.target.value });
       
     };

  function isValidPhoneNumber(phoneNumber) {
  // This regex matches a string containing exactly 10 digits.
  const regex = /^\d{10}$/; 
  return regex.test(phoneNumber);
}

  const SendthankyouMessage = () => {
    var templateParams = {
      from_name: 'Onati Global Institue of Fashion Technology (OGIFT)',
      to_name: formData.name,
      to_email: formData.email,
    }

    emailjs.send('service_08elaj3', 'template_32ou9qk', templateParams,'user_QBs08JbvqdXivIagZeWFH')
      .then(function(response) {
         console.log('SUCCESS!', response.status, response.text);
         alert("email sent")
      }, function(error) {
         console.log('FAILED...', error);
         alert("error sending email")
      });


      return
  }
  
  
  const [submitForm, { loading, error }] = useMutation(ADD_OGIFT_APP_DOWNLOAD_MUTATION);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isValidPhoneNumber(formData.phone))
    {
      alert("Not a valid phone number")
      return
    }
 
    try {
      const { data } = await submitForm({ variables: formData });
      
      console.log('Admission Form submitted successfully:', data.submitForm);
   
      SendthankyouMessage()
      download = true;
      
      //SendWelcomeMessage();
      alert('Thanks for Downloading The App. Your details have been submitted.');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
      
     
      });
    } catch (error) {
      console.error('Form submission failed:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

 const handleDownload = () =>
 {
  
  const link = document.createElement('a');
  link.href = 'https://www.newogwebsite.com/OGIFTVideos/ogiftanuradha.apk'; // Replace with your file path or URL
  link.download = 'ogiftanuradha.apk'; // Desired file name
 
  document.body.appendChild(link);
  link.click();

  var btn = document.getElementById("downloadbutton");
  //btn.setAttribute("disabled","disabled")
  btn.style.display = "none"

  document.body.removeChild(link);
  
 }

  return (
    <section id="contact" className="overflow-hidden py-2 md:py-2 lg:py-2">
      <div className="container">
      {loading && <LoadingSpinner />}
        <div className="-mx-4 flex flex-wrap mt-10">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Download The Android App Now
              </h2>
            
            
                <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="name" required />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">Email</label>
                      <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="email" required  />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="phone" className="mb-3 block text-sm font-medium text-dark dark:text-white">Phone Number</label>
                      <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none" autoComplete="phone" required />
                    </div>
                  </div>
                  

                   

                  <div className="w-full px-4">
                    <button type="submit"  className="rounded-sm bg-dark px-9  py-4 text-base font-medium text-white  hover:bg-[#701a75] dark:shadow-submit-dark">Submit Form</button>
                  </div>
                </div>
              </form>
              
            </div>
          </div>
        
          
        </div>
        {
          download ?
        <div>
        <label>Link to download the Android App is below</label>
        <p></p>
       
         <button id="downloadbutton" style={{backgroundColor:'blue',color:'white'}} onClick={handleDownload}>Download File</button>
        </div>
        :''}
        
          
      </div>
        
    </section>
   
  );
};

export default Contact;
