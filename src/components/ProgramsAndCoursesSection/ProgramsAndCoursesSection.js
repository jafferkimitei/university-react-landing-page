import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ProgramsAndCoursesSection.scss';

const ProgramsAndCoursesSection = () => {
  return (
    <section className="programs-courses">
      <div className="programs-courses-content">
        <h2 className="section-title">Programs & Courses</h2>

        <div className="featured-programs">
          <h3 className="section-subtitle">Featured Programs</h3>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={5}
            slidesPerView={3}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              480: { slidesPerView: 1 },
            }}
            className="programs-list"
          >
            <SwiperSlide>
              <div className="program-card">
                <h4>Computer Science</h4>
                <p>Explore programming, AI, and data science fundamentals.</p>
                <a href="/programs/computer-science" className="btn btn-secondary">Learn More</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="program-card">
                <h4>Business Administration</h4>
                <p>Master leadership, finance, and marketing skills.</p>
                <a href="/programs/business-administration" className="btn btn-secondary">Learn More</a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="program-card">
                <h4>Mechanical Engineering</h4>
                <p>Hands-on experience with design and mechanical systems.</p>
                <a href="/programs/mechanical-engineering" className="btn btn-secondary">Learn More</a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProgramsAndCoursesSection;
