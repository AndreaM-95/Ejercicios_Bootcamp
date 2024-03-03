import React from 'react';

function Contact() {
  return (
    <section className='w-full flex justify-center flex-wrap align-center'>
        <h2 className='w-full text-center text-white font-bold underline'>Contact Me</h2>
        <form className="font-bold w-[600px] p-4">
            <div className='mb-2'>
                <input
                    type="text"
                    placeholder='Your name'
                    name='name'
                    className='w-full placeholder-blue-400 rounded-lg p-2' 
                />
            </div>
            <div className='mb-2'>
                <input type= "text" 
                    placeholder='Your email'
                    name='email'
                    className='w-full placeholder-blue-300 rounded-lg p-2'
                />
            </div>
            <div className='mb-2'>
                <input type= "text" 
                    placeholder='Your message'
                    name='message'
                    className='w-full placeholder-blue-300 rounded-lg p-2'
                />
            </div>
            <button className='font-bold bg-sky-700 rounded-lg text-white p-2'>
                Send message
            </button>
        </form>
    </section>
  );
}

export default Contact;
