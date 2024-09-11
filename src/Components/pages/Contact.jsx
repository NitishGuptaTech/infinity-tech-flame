import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you would integrate with an email service like EmailJS or your own server
    // This is a placeholder example
    try {
      // Replace with your email service integration code
      await fetch("YOUR_BACKEND_ENDPOINT", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4 mt-20 w-[700px]">
      <h1 className="text-2xl font-bold mb-4 mt-5 text-center text-red-500">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block font-bold">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-bold">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-bold">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-red-500 ml-[270px] text-white p-2 rounded hover:bg-red-600"
        >
          Send Message
        </button>
        {status && <p className="mt-4">{status}</p>}
      </form>
    </div>
  );
};

export default Contact;
