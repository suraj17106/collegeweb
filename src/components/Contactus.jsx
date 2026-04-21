import './Contactus.css';
import { useState } from 'react';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        contact: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.contact) {
            alert('Thank you! We will get back to you soon.');
            setFormData({ name: '', contact: '' });
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div id="contact" className="contact-container">
            <h4>Contact Us</h4>

            <div className="contact-content">
                <div className="contact-section">
                    <h2>Get in Touch</h2>
                    <p>We'd love to hear from you. Reach out to us for any inquiries about our programs, admissions, or campus information.</p>
                </div>

                <div className="contact-info">
                    <div className="contact-item">
                        <h3>Phone</h3>
                        <p>Hariprasad: 8129143476</p>
                    </div>

                    <div className="contact-item">
                        <h3>Address</h3>
                        <p>College of Applied Science<br />
                        Malampuzha<br />
                        Kerala, India</p>
                    </div>

                    <div className="contact-item">
                        <h3>Email</h3>
                        <p>hariannanbatman@gmail.com</p>
                    </div>
                </div>

                <div className="contact-form-section">
                    <h2>Send us a Message</h2>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact Number</label>
                            <input
                                type="tel"
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleInputChange}
                                placeholder="Enter your contact number"
                                required
                            />
                        </div>
                        <button type="submit" className="submit-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default ContactUs;      