import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaUser, FaAt, FaComment } from "react-icons/fa";
import "./Contact.css"

const ContactPage = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <div className="contact-page">
            {/* Header Section with Cover Image */}
            <header className="contact-header">
                <div className="hero">
                    <img data-aos="fade-down"
                        src="https://wallpapers.com/images/hd/blue-mountain-landscape-during-nighttime-lejp0wvsxdzhm78t.jpg" /* Replace with your image URL */
                        alt="Cover"
                        className="hero-image"
                    />
                    <div className="overlay">
                        <h1 data-aos="fade-down">Contact Us</h1>
                        <p data-aos="fade-up">We’re Here to Help You Explore the World!</p>
                    </div>
                </div>
            </header>

            {/* Contact Information Row */}
            <section className="contact-info-section">
                <div className="info-card" data-aos="fade-up">
                    <FaMapMarkerAlt className="info-icon" />
                    <h3>Our Address</h3>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                        123 Main Street, City, Country
                    </a>
                </div>
                <div className="info-card" data-aos="fade-up" data-aos-delay="200">
                    <FaPhoneAlt className="info-icon" />
                    <h3>Phone Number</h3>
                    <a href="tel:+1234567890">+123-456-7890</a>
                </div>
                <div className="info-card" data-aos="fade-up" data-aos-delay="400">
                    <FaEnvelope className="info-icon" />
                    <h3>Email Address</h3>
                    <a href="mailto:info@ebraholidays.com">info@ebraholidays.com</a>
                </div>
            </section>

            {/* Map and Form Row */}
            <section className="map-and-form">
                {/* Map Section */}
                <div className="map-container" data-aos="fade-right">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093744!2d144.955923315318!3d-37.81720997975153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a92f63c9cd0!2z5p2l6ZmQ6ZC16Zm96YeM6YCa6YCa6bq754mb!5e0!3m2!1sen!2sin!4v1633659332693!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>

                {/* Form Section */}
                <div className="form-container" data-aos="fade-left">
                    <h3>Get In Touch</h3>
                    <form className="contact-form">
                        <div className="form-group">
                            <FaUser className="form-icon" />
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <FaAt className="form-icon" />
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <FaComment className="form-icon" />
                            <textarea placeholder="Enter your message"></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>


        </div>
    );
};

export default ContactPage;