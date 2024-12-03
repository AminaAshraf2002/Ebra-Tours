import React, { useEffect } from "react";
import "./BlogPage.css";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS styles
import offer1 from "../assets/image1.jpg";
import offer2 from "../assets/image2.jpg";
import offer3 from "../assets/img1.jpeg";

const BlogPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration
  }, []);

  const blogs = [
    {
      image: offer1,
      date: "24 Mar",
      title: "Make time for boating",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: offer2,
      date: "24 Mar",
      title: "Go boating and experience",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: offer3,
      date: "24 Mar",
      title: "New boats this summer",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: offer2,
      date: "24 Mar",
      title: "Best holiday of your life",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: offer1,
      date: "24 Mar",
      title: "The best boats",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: offer3,
      date: "24 Mar",
      title: "Life is better on the water",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: offer2,
      date: "24 Mar",
      title: "Chartering a boat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: offer1,
      date: "24 Mar",
      title: "Make time for boating",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      image: offer3,
      date: "20 Mar",
      title: "Chartering a boat",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <header className="blog-page-header" data-aos="fade-down">
        <img
          src="https://cdn.pixabay.com/photo/2021/08/14/04/15/mountains-6544522_1280.jpg" // Replace with your image URL
          alt="Hero"
          className="blog-page-hero-image"
        />
        <div className="blog-page-header-content">
          <h1 data-aos="fade-down">Blogs</h1>
          <p data-aos="fade-up">
          Explore our travel blog for expert tips, destination guides, and inspiring stories to help you plan your next unforgettable journey.
          </p>
        </div>
      </header>

      {/* Blog Section */}
      <section className="blog-page-section">
        <div className="blog-page-grid">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="blog-page-card"
              data-aos="fade-up"
              data-aos-delay={index * 100} // Add staggered animation
            >
              <img src={blog.image} alt={blog.title} />
              <div className="blog-page-content">
                <span className="blog-page-date">{blog.date}</span>
                <h3>{blog.title}</h3>
                <p>{blog.description}</p>
                <a href="#">Learn More</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;