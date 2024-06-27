import React from 'react';
import { FaMobile, FaLocationArrow, FaRegEnvelope } from "react-icons/fa";

export default function contact() {
    return (
        <div id="contact" className="contact-area">
            <div className="contact-inner area-padding">
                <div className="contact-overly"></div>
                <div className="container mx-auto p-4">
                    <div className="flex justify-center">
                        <div className="text-center">
                            <h2 className="text-3xl font-semibold">Contact us</h2>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center mt-8">
                        {/* Start contact icon column */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <FaMobile className="text-4xl mx-auto" />
                                    <p className="mt-2">
                                        Call: +1 5589 55488 55<br />
                                        <span className="text-gray-500">Monday-Friday (9am-5pm)</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Start contact icon column */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <FaRegEnvelope className="text-4xl mx-auto" />
                                    <p className="mt-2">
                                        Email: info@example.com<br />
                                        <span className="text-gray-500">Web: www.example.com</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Start contact icon column */}
                        <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
                            <div className="contact-icon text-center">
                                <div className="single-icon">
                                    <FaLocationArrow className="text-4xl mx-auto" />
                                    <p className="mt-2">
                                        Location: A108 Adam Street<br />
                                        <span className="text-gray-500">NY 535022, USA</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-8">
                        {/* Start Google Map */}
                        <div className="w-full md:w-1/2 p-4">
                            {/* Start Map */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.377336809205!2d90.40777097585445!3d23.7695738786574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c778d94ba6d1%3A0x89051c19123ad2d4!2zQWtpaiBIb3VzZSwgQmlyIFV0dGFtIE1pciBTaGF3a2F0IFNhcmFrLCDgpqzgp4DgprAg4KaJ4Kak4KeN4Kak4KauIOCmruCngOCmsCDgprbgppPgppXgpqQg4Ka44Kec4KaVLCDgpqLgpr7gppXgpr4gMTIwOA!5e0!3m2!1sbn!2sbd!4v1719452450994!5m2!1sbn!2sbd"
                                width="700"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Embedded Google Map"
                            ></iframe>
                            {/* End Map */}
                        </div>
                        {/* End Google Map */}
                        {/* Start contact */}
                        <div className="w-full lg:w-1/2 p-4">
                            <div className="form contact-form">
                                <div id="sendmessage" className="hidden">
                                    Your message has been sent. Thank you!
                                </div>
                                <div id="errormessage" className="hidden"></div>
                                <form action="" method="post" role="form" className="contactForm">
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control w-full p-2 border border-gray-300 rounded"
                                            id="name"
                                            placeholder="Your Name"
                                            data-rule="minlen:4"
                                            data-msg="Please enter at least 4 chars"
                                        />
                                        <div className="validation text-red-500 text-sm mt-1"></div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="email"
                                            className="form-control w-full p-2 border border-gray-300 rounded"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            data-rule="email"
                                            data-msg="Please enter a valid email"
                                        />
                                        <div className="validation text-red-500 text-sm mt-1"></div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <input
                                            type="text"
                                            className="form-control w-full p-2 border border-gray-300 rounded"
                                            name="subject"
                                            id="subject"
                                            placeholder="Subject"
                                            data-rule="minlen:8"
                                            data-msg="Please enter at least 8 chars of subject"
                                        />
                                        <div className="validation text-red-500 text-sm mt-1"></div>
                                    </div>
                                    <div className="form-group mb-4">
                                        <textarea
                                            className="form-control w-full p-2 border border-gray-300 rounded"
                                            name="message"
                                            rows="5"
                                            data-rule="required"
                                            data-msg="Please write something for us"
                                            placeholder="Message"
                                        ></textarea>
                                        <div className="validation text-red-500 text-sm mt-1"></div>
                                    </div>
                                    <div className="text-center">
                                        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* End Left contact */}
                    </div>
                </div>
            </div>
        </div>

    )
}
