import "./Contact.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }

  };

  return (
    <section className="contact" id="contact">

      <div
        className="contact-content"
        data-aos="fade-up"
      >

        <h2>Contact Me</h2>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            rows="6"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">

            {loading
              ? "Sending..."
              : "Send Message"}

          </button>

        </form>

      </div>

    </section>
  );
};

export default Contact;