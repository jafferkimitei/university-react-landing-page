import React from "react";
import Masonry from "react-masonry-css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./StudentLifeSection.scss";

const activities = [
  { id: 1, img: "/campus-rugby.jpg", title: "Sports Teams" },
  { id: 2, img: "/campus-frama.jpg", title: "Drama & Music Clubs" },
  { id: 3, img: "/campus-student.jpg", title: "Student Government" },
  { id: 4, img: "/campus-community.jpg", title: "Community Service" },
  { id: 5, img: "/campus-tech.jpg", title: "Tech & Innovation Clubs" },
  { id: 6, img: "/campus-cultural.jpg", title: "Cultural Festivals" },
];

const testimonials = [
  { text: "Being in the drama club has been an amazing experience!", author: "Anna, Class of 2024" },
  { text: "Student government helped me develop leadership skills!", author: "John, Class of 2023" },
  { text: "The tech club is where I found my passion for programming.", author: "Sarah, Class of 2022" },
];

const galleryImages = [
  "/campus-1.jpg",
  "/campus-2.jpg",
  "/campus-3.jpg",
  "/campus-4.jpg",
  "/campus-5.jpg",
];

const StudentLifeSection = () => {
  return (
    <section className="student-life">
      <div className="student-life-content">
        <h2 className="section-title">Student Life</h2>

        {/* 🎭 Campus Activities - Masonry Layout */}
        <div className="activities">
          <h3 className="section-subtitle">Campus Activities</h3>
          <Masonry
            breakpointCols={{ default: 3, 1024: 2, 768: 1 }}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {activities.map((activity) => (
              <div key={activity.id} className="activity-card">
                <img src={activity.img} alt={activity.title} className="activity-image" />
                <div className="overlay">
                  <h4>{activity.title}</h4>
                </div>
              </div>
            ))}
          </Masonry>
        </div>

        {/* 💬 Testimonials - Swiper Carousel */}
        <div className="testimonials">
          <h3 className="section-subtitle">What Students Say</h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            loop={true}
            className="testimonial-slider"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index} className="testimonial-card">
                <p>"{item.text}"</p>
                <span>- {item.author}</span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 📸 Image Gallery */}
        <div className="gallery">
          <h3 className="section-subtitle">Campus Gallery</h3>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={5}
            navigation
            loop={true}
            pagination={{ clickable: true }}
            className="gallery-slider"
          >
            {galleryImages.map((img, index) => (
              <SwiperSlide key={index} className="gallery-card">
                <img src={img} alt="Campus Scene" className="gallery-image" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default StudentLifeSection;
