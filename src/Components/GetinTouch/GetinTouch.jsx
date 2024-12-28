import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

function GetinTouch() {
    return (
        <section className="bg-blue-50 dark:bg-slate-800" id="contact">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">Contact</p>
                        <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">Get in Touch</h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">We’re here to assist with any questions or support you need.</p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
                                Whether you have a question or need support, we’re always here to assist you. Reach out through any of the methods below
                            </p>
                            <ul className="mb-6 md:mb-0 space-y-10">
                                <li className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
                                        <FaMapMarkerAlt size={24} />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">Our Address</h3>
                                        <p className="text-gray-600">S.C.O shop Near Tej Kaur Hospital, HDFC Bank</p>
                                        <p className="text-gray-600">Gidderbaha Circular Road, Muktsar 152101, Punjab</p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
                                        <FaPhoneAlt size={24} />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold">Contact Us</h3>
                                        <p className="text-gray-600">Mobile: +91 8700024042</p>
                                        <p className="text-gray-600">Email: contactsolocorp@gmail.com</p>
                                    </div>
                                </li>
                                <li className="flex items-center space-x-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-md">
                                        <FaEnvelope size={24} />
                                    </div>
                                    <div>
                                        <h3 className="mb-2 text-xl font-semibold ">Working Hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 08:00 AM - 05:00 PM</p>
                                        <p className="text-gray-600">Saturday & Sunday: 08:00 AM - 12:00 PM</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                            <h2 className="mb-4 text-2xl font-bold dark:text-white text-center">Ready to Get Started?</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default GetinTouch;