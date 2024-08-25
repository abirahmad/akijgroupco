"use client";
import { FaMobile, FaLocationArrow, FaRegEnvelope } from "react-icons/fa";
import React, { useState } from "react";
import axios from "axios";
export default function Contact({ setting }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (formData.name.length < 4) {
      errors.name = "Please enter at least 4 chars";
    }
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = "Please enter a valid email";
    }
    if (formData.subject.length < 8) {
      errors.subject = "Please enter at least 8 chars of subject";
    }
    if (formData.message.trim() === "") {
      errors.message = "Please write something for us";
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    console.log("formData", formData);
    e.preventDefault();
    setIsSubmitting(true);
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}/contacts`;
      console.log("apiUrl :>> ", apiUrl);
      await axios
        .post(apiUrl, formData)
        .then((response) => {
          setSubmissionResult("Message sent successfully!");
          setIsSubmitting("Message sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" });
          alert(response.message);
        })
        .catch((error) => {
          console.log("errors 1", errors);

          alert("Failed to send message. Please try again.");
          setSubmissionResult("Failed to send message. Please try again.");
          setIsSubmitting(false);
        });
    } else {
      //   alert(errors);
      console.log("errors 2", errors);
      setFormErrors(errors);
    }
    setIsSubmitting(false);
  };
  return (
    <div
      id="contact"
      className="contact-area bg-gradient-to-r from-blue-200 via-white to-blue-200" 
    >
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
                    Call:{" "}
                    <a
                      href="tel:+155895548855"
                      className="text-blue-500 hover:underline"
                    >
                      {setting.primary_phone}
                    </a>
                    <br />
                    <span className="text-gray-500">
                      Saturday-Thursday (9am-6pm)
                    </span>
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
                    Email:{" "}
                    <a
                      href={`mailto:${setting.primary_email}`}
                      className="text-blue-500 hover:underline"
                    >
                      {setting.primary_email}
                    </a>
                    <br />
                    <span className="text-gray-500">
                      Web:{" "}
                      <a
                        href="https://www.akijgroup.co"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        https://www.akijgroup.co
                      </a>
                    </span>
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
                    Location: Mir Sawkat Sarak, Tejgaon
                    <br />
                    <span className="text-gray-500">
                      Dhaka 1205, Bangladesh
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-8">
            {/* Start Google Map */}
            <div className="w-full lg:w-1/2 p-4">
              {/* Start Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.3425704517285!2d90.42033057221254!3d23.770812529865744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c778d94ba6d1%3A0x89051c19123ad2d4!2sAkij%20House%2C%20Bir%20Uttam%20Mir%20Shawkat%20Sarak%2C%20Dhaka%201208!5e0!3m2!1sen!2sbd!4v1720400281512!5m2!1sen!2sbd"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
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
                <form onSubmit={handleSubmit} className="contactForm">
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      name="name"
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      id="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {formErrors.name && (
                      <div className="validation text-red-500 text-sm mt-1">
                        {formErrors.name}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="email"
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <div className="validation text-red-500 text-sm mt-1">
                        {formErrors.email}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <input
                      type="text"
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {formErrors.subject && (
                      <div className="validation text-red-500 text-sm mt-1">
                        {formErrors.subject}
                      </div>
                    )}
                  </div>
                  <div className="form-group mb-4">
                    <textarea
                      className="form-control w-full p-2 border border-gray-300 rounded"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {formErrors.message && (
                      <div className="validation text-red-500 text-sm mt-1">
                        {formErrors.message}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-blue-500 text-white py-2 px-4 rounded"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                  {submissionResult && (
                    <div className="text-center text-sm mt-4">
                      {submissionResult}
                    </div>
                  )}
                </form>
              </div>
            </div>
            {/* End Left contact */}
          </div>
        </div>
      </div>
    </div>
  );
}
