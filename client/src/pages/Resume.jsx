import "./Resume.css";

import { useEffect, useState }
  from "react";

import axios from "axios";

import { Link }
  from "react-router-dom";
import {
  Document,
  Page,
  pdfjs,
} from "react-pdf";

import "react-pdf/dist/Page/TextLayer.css";

import "react-pdf/dist/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

const Resume = () => {

  const [resume,
    setResume] =
    useState(null);

  useEffect(() => {

    fetchResume();

  }, []);
  const [numPages,
    setNumPages] =
    useState(null);

  const fetchResume =
    async () => {

      try {

        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/resume`
        );


        setResume(
          response.data
        );

      } catch (error) {

        console.log(error);

      }

    };

  return (

    <section
      className="resume-page"
    >

      <Link
        to="/"
        className="back-btn"
      >
        ← Back
      </Link>

      <h1>
        MY RESUME
      </h1>
      <p className="resume-text">
        View or download my latest resume.
      </p>

      {resume && (

        <>

          <div className="resume-actions">

            <a
              href={resume.resumeFile}
              target="_blank"
              rel="noreferrer"
              className="download-btn"
            >
              Download Resume
            </a>

          </div>

          <div className="resume-container">

            <Document
              file={resume.resumeFile}
              onLoadSuccess={({ numPages }) =>
                setNumPages(numPages)
              }
              onLoadError={(error) => {

                console.log(error);

              }}
            >

              {Array.from(
                new Array(numPages || 0),
                (el, index) => (

                  <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={900}
                  />

                )
              )}

            </Document>

          </div>



        </>

      )}

    </section>

  );

};

export default Resume;