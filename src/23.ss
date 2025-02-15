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

                <p className="mt-3 lead text-justify text-light fw-light fst-italic">
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
                    { number: "10+", label: "Total Publications" },
                    { number: "180+", label: "Total Citations" },
                    { number: "04", label: "PG Student Guidance" },
                    { number: "10+", label: "Journals" },
                    { number: "07+", label: "Paper Publications" },
                    { number: "01", label: "Book Chapter" },
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