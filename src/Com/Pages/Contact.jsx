import React from 'react'

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>
        Have any questions or want to make a booking?
        Feel free to contact us.
      </p>

      <h2>Get In Touch</h2>

      <p>Phone: +91 9876543210</p>
      <p>Email: info@example.com</p>
      <p>Address: Jaipur, Rajasthan, India</p>

      <form>
        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Your Email"
        />

        <textarea
          placeholder="Your Message"
        ></textarea>

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};




export default Contact
