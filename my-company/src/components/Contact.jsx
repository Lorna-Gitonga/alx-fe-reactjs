import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center', backgroundColor: '#f9f9f9', borderRadius: '8px', width: '400px', margin: '20px auto' }}>
      <h1 style={{ marginBottom: '15px' }}>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px', borderRadius: '4px' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px', borderRadius: '4px' }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0', width: '100%', padding: '8px', borderRadius: '4px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', cursor: 'pointer', borderRadius: '4px', backgroundColor: '#333', color: '#fff', fontWeight: 'bold' }}>
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
