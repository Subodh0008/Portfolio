import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert({ type: "", message: "" });
    // No email field, so no email validation needed
    setLoading(true);
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
    // Debugging output
    console.log('serviceId:', serviceId);
    console.log('templateId:', templateId);
    console.log('publicKey:', publicKey);
    console.log('form:', form.current);
    if (form.current) {
      console.log('name:', form.current.name?.value);
      console.log('time:', form.current.time?.value);
      console.log('message:', form.current.message?.value);
    }
    // Use emailjs.send for a more robust and reliable solution
    const title = form.current.title.value;
    const name = form.current.name.value;
    const email = form.current.email.value;
    const time = form.current.time.value;
    const message = form.current.message.value;

    emailjs.send(
      serviceId,
      templateId,
      { title, name, time, message, email },
      publicKey
    )
      .then(
        () => {
          setAlert({ type: "success", message: "Message sent!" });
          form.current.reset();
        },
        () => {
          setAlert({ type: "error", message: "Failed to send message. Please try again later." });
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div id="contact" className="max-w-lg mx-auto p-8 bg-white/90 dark:bg-gray-900/80 shadow-lg rounded-2xl mt-10 border border-gray-100 dark:border-gray-800">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white text-center">Contact Me</h2>
      {alert.message && (
        <div
          className={`mb-4 px-4 py-3 rounded text-center font-semibold ${
            alert.type === "success"
              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
          }`}
        >
          {alert.message}
        </div>
      )}
      <form ref={form} onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Subject or Title"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="Your Name"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white"
            placeholder="you@example.com"
            autoComplete="email"
          />
        </div>
        {/* Hidden time field auto-filled with current date/time */}
        <input type="hidden" name="time" id="time" value={new Date().toLocaleString()} />
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white resize-none"
            placeholder="Type your message..."
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 disabled:opacity-60 disabled:cursor-not-allowed ${loading ? "cursor-wait" : ""}`}
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
              </svg>
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
};

export default Contact;
