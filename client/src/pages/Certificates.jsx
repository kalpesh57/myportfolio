import "./Certificates.css";

import {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";

import "swiper/css/effect-coverflow";

import "swiper/css/pagination";

const Certificates = () => {

  const [certificates,
    setCertificates] =
    useState([]);

  useEffect(() => {

    fetchCertificates();

  }, []);

  const fetchCertificates =
    async () => {

    try {

      const response =
        await axios.get(
          "http://localhost:5000/api/certificates"
        );

      setCertificates(
        response.data
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <section
      className="certificates"
      id="certificates"
    >

      <h1>
        Certificates
      </h1>

      <Swiper

        effect={"coverflow"}

        grabCursor={true}

        centeredSlides={true}

        slidesPerView={"auto"}

        loop={true}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}

        pagination={{
          clickable: true,
        }}

        modules={[
          EffectCoverflow,
          Pagination,
          Autoplay,
        ]}

        className="certificate-slider"
      >

        {certificates.map(
          (certificate) => (

          <SwiperSlide
            key={certificate._id}
            className=
            "certificate-slide"
          >

            <div
              className=
              "certificate-card"
            >

              <img
                src={certificate.image}
                alt={certificate.title}
                className=
                "certificate-image"
              />

              <h3>
                {certificate.title}
              </h3>

              <p>
                {
                  certificate.organization
                }
              </p>

              <span>
                {
                  certificate.issueDate
                }
              </span>

            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>

  );

};

export default Certificates;