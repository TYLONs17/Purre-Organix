import React from 'react'
import Image from 'next/image'
import ContactForm from '../../components/forms/ContactForm'


const ContactPage = () => {
  const iframeUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.0000000000005!2d-122.0840006846785!3d37.42200097981947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e3f2f4e3d3d%3A0x7f3f7e3f2f4e3d3d!2sGoogleplex!5e0!3m2!1sen!2sca!4v1631530000000!5m2!1sen!2sca"

  return (
    <div className="px-4 py-8 md:px-8 lg:px-16 xl:px-32 text-center">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <div className="mb-8">
        <h2 className="text-2xl lg:text-4xl font-semibold italic mb-4 ">Have questions or feedback? We&apos;re here to help!</h2>
        <p className="hidden md:block mb-2 md:text-2xl">
          We value your connection and strive to provide the best possible service.

          Whether you have a question about our products, delivery options, or simply want to share your thoughts, please don&apos;t hesitate to reach out.
        </p>
        <p className="italic lg:mt-4">
          Our friendly and knowledgeable staff is always happy to assist you.
        </p>
      </div>

      <section className="flex flex-col md:flex-row justify-around align-center gap-8 mb-4">
        <div className="md:mt-8">
          <Image className="w-full  rounded-2xl" src="/images/smile-n-greet-7772173.jpg" width="1000" height="800" alt="contact us image" />
        </div>

        <ContactForm />
      </section>

      <hr className="mb-8 border-4 border-green-400 rounded-full"/>

      

      <div className="relative h-64 md:h-96 lg:h-128 ">

        <iframe className="absolute top-0 left 0 w-full h-full z-10" title="Background iframe" src={iframeUrl} width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>

          <div className="relative text-center z-20 p-4 text-green-600 bg-black bg-opacity-80 ">
            <h4 className="text-lg font-semibold mb-2">Contacts</h4>
            <ul className="list-disc list-inside">
              <li>TEL: 123-456-789</li>
              <li>EMAIL: info@email.com</li>
            </ul>
          </div>  
        
      </div>

      
    </div>
  )
}

export default ContactPage












      