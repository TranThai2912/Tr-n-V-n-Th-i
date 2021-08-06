import React from "react";
const IndexPage = () => {
  return (
    <>
      <div
        data-unit-id="iphone-12"
        data-analytics-section-engagement="name:hero-iphone-12"
        className="pricing-header p-3 pb-md-4 mx-auto text-center"
      >
        <div className="module-content">
          <div className="unit-wrapper">
            <div className="unit-copy-wrapper">
              <h2 className="headline display-5 fw-bold">iPhone 12</h2>
              <h3 className="subhead display-8 fw-normal " role="presentation">
                Blast past fast.
              </h3>
              <div className="pricing-info">
                <p className="price price-with-carrier price-with-carrier-alt fs-5 text-muted">
                  <span
                    aria-label="From twenty nine dollars and twelve cents per month for twenty four months or six hundred ninety nine dollars before trade in"
                    role="text"
                  >
                    From $29.12/mo. for 24 mo. or $699 before trade‑in
                  </span>
                  <sup className="footnote-orig fs-8 text-muted">
                    <a
                      href="#footnote-1"
                      className="footnote text-decoration-none fs-8 text-muted"
                    >
                      1
                    </a>
                  </sup>
                </p>
                <p className="carrier fs-10 text-muted">
                  Buy directly from Apple with special carrier offers
                </p>
              </div>
              <div className="cta-links">
                <a
                  className="icon icon-after icon-chevronright control"
                  href="/iphone-12/"
                  target="_self"
                  rel="follow"
                  data-analytics-region="learn more"
                  data-analytics-title="Learn more about iPhone 12"
                  aria-label="Learn more about iPhone 12"
                >
                  Learn more
                </a>
              </div>
            </div>
            <div className="unit-image-wrapper">
              <figure className="unit-image unit-image-iphone-12-pro-iphone-12-pro-us"></figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IndexPage;
