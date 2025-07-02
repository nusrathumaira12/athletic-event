import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_wmazs6h',
        'template_wmwk189',
        form.current,
        'rOWtj3fE3oYFGUrdR'
      )
      .then(() => {
        setIsSent(true);
        setLoading(false);
        form.current.reset();
        setTimeout(() => setIsSent(false), 4000); // auto-hide after 4s
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-[#f9f8f7]  dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-600">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have a question, feedback, or collaboration idea? Reach out to the Athlofy team!
          </p>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>📍 <strong>Address:</strong> 123 Sports Avenue, Dhaka</p>

            <a href="tel:+8801934576443" className="flex items-center gap-2 text-blue-900 hover:underline">
              <FaPhoneAlt /> +8801934576443
            </a>

            <a href="mailto:nusrathum31@gmail.com" className="flex items-center gap-2 text-blue-900 hover:underline">
              <FaEnvelope /> nusrathum31@gmail.com
            </a>

            <a href="https://wa.me/8801798078234" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:underline">
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full mt-1 px-4 py-2 border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full mt-1 px-4 py-2 border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              rows="4"
              name="message"
              required
              className="w-full mt-1 px-4 py-2 border rounded-xl bg-white dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-900 transition"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      </div>

      {/* Success Message */}
      {isSent && (
        <div className="text-center mt-6 text-amber-600 font-medium">
          ✅ Your message has been sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;
