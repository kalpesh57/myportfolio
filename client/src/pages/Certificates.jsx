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

  const [selectedCertificate,
    setSelectedCertificate] =
    useState(null);

  useEffect(() => {

    fetchCertificates();

  }, []);

  const fetchCertificates =
    async () => {
      console.log(
        "VITE_API_URL =",
        import.meta.env.VITE_API_URL
      );
      try {

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/certificates`
        );
        console.log("Certificates Data:", response.data);
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

      <div className="certificate-header">

        <span className="certificate-tag">
          VERIFIED ACHIEVEMENTS
        </span>

        <h1>
          Professional Certificates
        </h1>

        <p>
          Industry-recognized certifications
          showcasing my technical skills,
          continuous learning, and
          professional development.
        </p>

      </div>
      
      <Swiper

        effect={"slide"}

        grabCursor={true}

        centeredSlides={true}

        slidesPerView={1}

        breakpoints={{

          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 3,
          },

        }}

        loop={certificates.length > 3}

        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
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
                  className="certificate-image"
                  onClick={() =>
                    setSelectedCertificate(
                      certificate.image
                    )
                  }
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
      {selectedCertificate && (

        <div
          className="certificate-modal"
          onClick={() =>
            setSelectedCertificate(
              null
            )
          }
        >
          <button
            className="close-modal"
            onClick={() =>
              setSelectedCertificate(
                null
              )
            }
          >
            ✕
          </button>

          <img
            src={selectedCertificate}
            alt="Certificate"
            className="modal-image"
            onClick={(e) =>
              e.stopPropagation()
            }
          />
        </div>

      )}
    </section>

  );

};

export default Certificates;