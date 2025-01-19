'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'
import MenuFour from '@/components/Header/MenuFour';
import ContactForm from '@/components/Form/ContactForm';

const ContactUs = () => {
    return (
        <>
            <TopNavOne props="style-one bg-white" slogan="New customers save 10% with the code GET10" />
            <div id="header" className='relative w-full text-purple'>
                <MenuFour props="bg-transparent" />
                <Breadcrumb heading='Contact us' subHeading='Contact us' />
            </div>
            <div className='contact-us md:py-20 py-10  bg-[#f6efff]'>
                <div className="container">
                    <div className="flex justify-between max-lg:flex-col gap-y-10">
                        <div className="left lg:w-2/3 lg:pr-4">
                            <div className="heading3 text-secondary">Drop Us A Line</div>
                            <div className="body1 text-secondary2 mt-3">Use the form below to get in touch with the sales team</div>
                            {/* <form className="md:mt-6 mt-4">
                                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5'>
                                    <div className="name ">
                                        <input className="border-line  hover:border-purple px-4 py-3 w-full rounded-lg" id="username" type="text" placeholder="Your Name *" required />
                                    </div>
                                    <div className="email">
                                        <input className="border-line  hover:border-purple px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Your Email *" required />
                                    </div>
                                    <div className="message sm:col-span-2">
                                        <textarea className="border-line  hover:border-purple px-4 pt-3 pb-3 w-full rounded-lg" id="message" rows={3} placeholder="Your Message *" required />
                                    </div>
                                </div>
                                <div className="block-button md:mt-6 mt-4">
                                    <button className="button-main">Send message</button>
                                </div>
                            </form> */}
                            <ContactForm />
                        </div>
                        <div className="right lg:w-1/4 lg:pl-4">
                            <div className="item">
                                <div className="heading4 text-secondary">Our Store</div>
                                <p className="mt-3">Shop No:- 105 1<sup>st</sup> floor Aggarwal Tower Pocket O & P Dilshad Garden Near in front of Punjab National Bank Delhi 110095</p>
                                <p className="mt-3">Phone: <span className='whitespace-nowrap'>+91 9821472627</span></p>
                                <p className="mt-1">Email: <span className='whitespace-nowrap'>salestheribbonpack@gmail.com</span></p>
                            </div>
                            <div className="item mt-10">
                                <div className="heading4 text-secondary">Open Hours</div>
                                <p className="mt-3">Mon - Fri: <span className='whitespace-nowrap'>7:30am - 8:00pm PST</span></p>
                                <p className="mt-3">Saturday: <span className='whitespace-nowrap'>8:00am - 6:00pm PST</span></p>
                                <p className="mt-3">Sunday: <span className='whitespace-nowrap'>9:00am - 5:00pm PST</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs