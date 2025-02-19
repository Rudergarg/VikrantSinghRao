import React from "react";

export default function Crousal2() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
          <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"></path>
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path>
          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
          <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
        </symbol>
      </svg>

      <header data-bs-theme="dark" className="w-10rem">
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none z-negative"
            ></a>
            <div></div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mb-2 mb-md-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/home.html"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/Research.html"
                  >
                    Research
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/publications.html"
                  >
                    Publications
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/Awards.html"
                  >
                    Awards
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/Gallery.html"
                  >
                    Gallery
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="/userinfo.html"
                  >
                    User Info
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <br></br>
        {/* <br></br> */}
        <hr className="featurette-divider" />
        <div className="container my-5">
  <div className="row featurette align-items-stretch">
    {/* Text Section - Left Side */}
    <div className="col-md-7 d-flex">
      <div className="p-4 bg-white rounded-4 shadow-lg border border-light w-100 d-flex flex-column justify-content-center">
        {/* Header Section with Logo */}
        <div className="d-flex align-items-center gap-3 mb-3">
          <img
            src="LOGO SITE.png"
            alt="Research Logo"
            className="img-fluid"
            style={{ maxWidth: "140px" }}
          />
          <h2 className="featurette-heading fw-bold text-dark text-center m-0 ms-4">
            <i>Dr. Vikrant Singh</i>
            
          </h2>
        </div>
        <p className="lead text-dark mb-3 text-content-justify text-center">
          Currently working as a Guest Assistant Professor at Swami Shraddhanand College, University of Delhi, teaching Environmental Studies in line with the new education policy.I completed my doctoral studies at the Centre of Excellence for Energy and Environmental Studies, Deenbandhu Chhotu Ram University of Science and Technology (DCRUST), Murthal, under the guidance of Dr. S. P. Nehra (Max Planck Alumni Ambassador for India (North), Indian National Young Academy of Sciences). My research focuses on Graphitic Carbon Nitride-based Binary/Ternary Nanocomposites for Energy and Environmental Applications.With a strong foundation in nanotechnology, I specialize in synthesizing and characterizing nanocomposites for tackling critical environmental issues. Over the past four years, I have worked extensively on water purification and energy storage solutions, particularly supercapacitors. This dual focus allows me to contribute significantly to the fields of environmental remediation and renewable energy storage.I earned my M.Sc. degree from Central University of Haryana, where I conducted a project at CSIR-National Physical Laboratory on the role of different indoor plants in controlling VOCs and particulate matter under the guidance of Principal Scientist Dr. Sumit Kumar Mishra. I obtained my B.Sc. in Life Science from Sri Venkateswara College, University of Delhi, India.
        </p>
      </div>
    </div>

    {/* Image & CV Section - Right Side */}
    <div className="col-md-5 d-flex">
      <div className="d-flex flex-column justify-content-between w-100 bg-white rounded-4 shadow-lg border border-light p-3">
        <img
          src="download6.jpg"
          className="img-fluid rounded-4 shadow-lg w-100"
          alt="Featurette Image"
          style={{ maxHeight: "100%", objectFit: "cover", flexGrow: 1 }}
        />

        {/* Full CV Download Button */}
        <a href="vs.pdf" download className="btn btn-primary shadow-lg w-100 py-2 mt-3">
          Download Full CV
        </a>
      </div>
    </div>
  </div>
</div>

        <hr className="featurette-divider" />

        <div className="container marketing mt-5 mb-4">
          <div className="row text-center">
            <div className="col-lg-4 text-center">
              <div className="image-container">
                <img
                  src="/download1.jpeg"
                  className="profile-img"
                  alt="Education Image"
                />
              </div>
              <h2 className="fw-normal">Education</h2>
              <p>
                A comprehensive overview of academic achievements, degrees
                earned, and institutions attended. Highlighting a journey of
                learning and expertise in the field.
              </p>
              <p>
                <a className="btn btn-secondary" href="/Education.html">
                  View details »
                </a>
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <div className="image-container">
                <img
                  src="/download2.jpeg"
                  className="profile-img"
                  alt="Education Image"
                />
              </div>
              <h2 className="fw-normal">Paper Presented</h2>
              <p>
                A collection of research contributions, peer-reviewed journal
                articles, and conference proceedings, reflecting scholarly
                impact and thought leadership.
              </p>
              <p>
                <a className="btn btn-secondary" href="/papers.html">
                  View details »
                </a>
              </p>
            </div>

            <div className="col-lg-4 text-center">
              <div className="image-container">
                <img
                  src="/download.jpeg"
                  className="profile-img"
                  alt="Education Image"
                />
              </div>
              <h2 className="fw-normal">Reference</h2>
              <p>
                A curated list of key references,influential works and
                endorsements that support the credibility of my work. These
                sources have shaped and influenced my research.
              </p>
              <p>
                <a className="btn btn-secondary" href="/refernce.html">
                  View details »
                </a>
              </p>
            </div>
          </div>
          <hr className="featurette-divider" />
          <div
            className="container-fluid py-5 text-white"
            style={{ backgroundColor: "#009688" }}
          >
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  {/* Logo and Heading Side by Side */}
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src="LOGO SITE.png"
                      alt="Research Logo"
                      className="img-fluid"
                      style={{ maxWidth: "140px" }}
                    />
                    <h2 className="fw-bold text-uppercase border-bottom border-3 pb-2 text-light display-5">
                      Scientific Frontiers
                    </h2>
                  </div>

                  <p className="mt-3 lead text-justify text-light fw-light fst-italic text-center">
                    At the forefront of sustainable technology, our research
                    explores the potential of energy storage materials and
                    devices, aiming to enhance energy efficiency and storage
                    capabilities. By harnessing the power of advanced
                    nanomaterials, we contribute to transformative solutions for
                    environmental challenges. Specifically, our work in water
                    splitting, wastewater treatment, and photocatalytic activity
                    strives to revolutionize the way we address global water and
                    energy needs.
                  </p>
                </div>

                <div className="col-md-6">
                  <div className="row g-4">
                    {[
                      { number: "15+", label: "Total Publications" },
                      { number: "202+", label: "Total Citations" },
                      { number: "04", label: "PG Student Guidance" },
                      { number: "10+", label: "Journals" },
                      { number: "10+", label: "Paper Publications" },
                      { number: "04+", label: "Book Chapter" },
                    ].map((item, index) => (
                      <div className="col-6" key={index}>
                        <div
                          className="card text-center shadow-lg border-0"
                          style={{ backgroundColor: "#F8F9FA" }}
                        >
                          <div className="card-body py-4">
                            <h3 className="fw-bold text-primary">
                              {item.number}
                            </h3>
                            <p className="text-muted mb-0">{item.label}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
        <footer className="container py-4 bg-dark text-white">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <p className="mb-3 text-center">
              <b>Copyright © 2025 VikrantSinghRao</b>
            </p>
            <div className="mb-3">
              <b>
                Powered by <i className="text-warning">COLLABRIX</i>
              </b>
            </div>
          </div>
          <p className="mt-3 text-center">
            <a href="#" className="text-warning text-decoration-none fs-5">
              Back To Top
            </a>
          </p>
        </footer>
      </main>
      <script
        src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}
