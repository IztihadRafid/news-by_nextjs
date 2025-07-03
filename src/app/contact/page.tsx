import Link from 'next/link';
import React from 'react';

const ContactPage = () => {
    return (
        <div>
           <h1 className='text-4xl p-10 text-center font-bold'>Contact Us</h1>
           <p className='text-2xl p-8'>We`d love to hear from you! At DailyNews, we value your feedback, questions, and story ideas. Reach out to us through the following channels:</p>
           <ul className='text-2xl p-8'>
            <li>Email: <span><Link className='hover:text-blue-600' href={'/contact'}>news@yourwebsite.com</Link></span></li>
            <li>Phone:  <span><Link className='hover:text-blue-600' href={'/contact'}>+880 123456-7890</Link></span> </li>
            <li>Address: <span><Link className='hover:text-blue-600' href={'/contact'}>123 News Street, Information City, IN 12345</Link></span></li>
            <li>Social Media: <span><Link className='hover:text-blue-600' href={'/contact'}>Follow us on X, Instagram, and Facebook @YourNewsWebsite</Link></span></li>
           </ul>
           <p className='text-2xl p-8'>For press inquiries, advertising opportunities, or to submit a news tip, please email us at press@yourwebsite.com. Our team is committed to responding promptly and engaging with our community.</p>
           <h1 className='text-4xl p-10 text-center font-bold'>Thank you for connecting with us!</h1>
        </div>
    );
};

export default ContactPage;