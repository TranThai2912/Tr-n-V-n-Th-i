import React from "react";
const IndexProPage = () => {
  return (
    <>
      <div
        data-unit-id="iphone-12-pro"
        data-analytics-section-engagement="name:hero-iphone-12-pro"
        className="pricing-header p-3  pb-mt-md-4 mx-auto text-center "
      >
        <div className="module-content">
          <div className="unit-wrapper theme-dark">
            <div className="unit-copy-wrapper">
              <h2 className="headline display-5 fw-bold text-white">iPhone 12 Pro</h2>
              <h3 className="subhead display-8 fw-normal text-white" role="presentation">
                It’s a leap year.
              </h3>
              <div className="pricing-info">
                <p className="price price-with-carrier price-with-carrier-alt fs-5 text-muted">
                  <span
                    aria-label="From forty one dollars and sixty two cents per month for twenty four months or nine hundred ninety nine dollars before trade in."
                    role="text"
                  >
                    From $41.62/mo. for 24 mo. or $999 before trade‑in
                  </span>
                  <sup className="footnote-orig fs-8 text-muted">
                    <a
                      href="#footnote-2"
                      className="footnote text-decoration-none fs-8 text-muted"
                    >
                      2
                    </a>
                  </sup>
                </p>
                <p className="carrier fs-10 text-muted text-while">
                  Buy directly from Apple&nbsp;with special carrier&nbsp;offers
                </p>
              </div>
              <div className="cta-links">
                <a
                  className="icon icon-after icon-chevronright control"
                  href="/iphone-12-pro/"
                  target="_self"
                  rel="follow"
                  data-analytics-region="learn more"
                  data-analytics-title="Learn more about iPhone 12 Pro"
                  aria-label="Learn more about iPhone 12 Pro"
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default IndexProPage;
