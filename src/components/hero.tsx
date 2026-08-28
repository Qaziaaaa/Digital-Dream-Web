function BorderDots() {
  return (
    <>
      <div className="border-line-animation">
        <div className="border-dot _01">
          <div className="dot-border" />
        </div>
        <div className="border-dot _01">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation none">
        <div className="border-dot _02">
          <div className="dot-border" />
        </div>
        <div className="border-dot _02">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation">
        <div className="border-dot _03">
          <div className="dot-border" />
        </div>
        <div className="border-dot _03">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation">
        <div className="border-dot _04">
          <div className="dot-border" />
        </div>
        <div className="border-dot _04">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation none">
        <div className="border-dot _05">
          <div className="dot-border" />
        </div>
        <div className="border-dot _05">
          <div className="dot-border" />
        </div>
      </div>
      <div className="border-line-animation">
        <div className="border-dot _06">
          <div className="dot-border" />
        </div>
        <div className="border-dot _06">
          <div className="dot-border" />
        </div>
      </div>
    </>
  );
}

export function Hero() {
  return (
    <section className="hero-wrapper">
      <div className="hero-top-border-wrap">
        <div className="navbar-border-area">
          <div className="navbar-border-line-animation">
            <div className="border-dot-block">
              <div className="nav-dot-border" />
            </div>
          </div>
        </div>
        <div className="border-line">
          <BorderDots />
        </div>
      </div>

      <div className="container banner">
        <div className="hero-all-content-area">
          <div className="hero-content-block">
            <div className="banner-badge-wrapper">
              <div className="author-wraper">
                <img
                  src="/axiolance/68d21a39b20d9e053aabf81a_Rectangle 190.avif"
                  loading="lazy"
                  alt="Happy client"
                  className="badge-image"
                />
                <img
                  src="/axiolance/68d21a3835139974b9276b06_Rectangle 189.avif"
                  loading="lazy"
                  alt="Happy client"
                  className="badge-image"
                />
                <img
                  src="/axiolance/68d21a38bf14e7cc65f87b19_Rectangle 188.avif"
                  loading="lazy"
                  alt="Happy client"
                  className="badge-image"
                />
              </div>
              <div className="text-small">Trusted by 100+ clients</div>
            </div>

            <div className="inner-container banner">
              <h1 className="main-heading">We Build Websites, Apps</h1>
              <div className="inner-container is-flex">
                <div className="inner-container">
                  <div className="main-heading">&amp; Software That</div>
                </div>
                <div className="inner-container text-frame">
                  <div className="main-heading">
                    <span className="text-blue">Convert</span>
                  </div>
                  <img
                    src="/axiolance/690f57590170aec328525866_Group 1261153753.svg"
                    loading="lazy"
                    alt=""
                    className="text-cover"
                  />
                </div>
              </div>
            </div>

            <p className="text-large">
              A full-service software agency helping startups and growing businesses launch fast,
              secure websites, apps, and AI-powered products that drive revenue.
            </p>

            <div className="banner-button-wrapper">
              <a href="#Contact" className="button-primary w-button">
                Start Your Project
              </a>
              <a
                href="#Services"
                className="button-primary w-variant-4f002c81-1fc6-364c-3605-7f3374a06f02 w-button"
              >
                See Our Work
              </a>
            </div>
          </div>

          <div className="border-line">
            <BorderDots />
          </div>
        </div>

        <img
          src="/axiolance/68d249cfe01ab88e0c969d88_Mask group.avif"
          loading="lazy"
          alt="Digital Dream Web hero background"
          className="banner-bg-image"
        />
      </div>
    </section>
  );
}

export function DashbordOverlay() {
  return (
    <div className="dashbord-image-wrapper">
      <img
        src="/axiolance/691b7a80823adc69c855f297_dashboard-overview.avif"
        loading="lazy"
        alt="Project dashboard overview"
        className="overview-image"
      />
      <div className="dashbord-image-cover">
        <img
          src="/axiolance/691b7994e77f494e1d51c18c_dashbord.avif"
          loading="lazy"
          alt="Dashboard"
          className="dashbord-image"
        />
      </div>
      <img
        src="/axiolance/691b7a3758195f7a848f71ba_dashboard-progress.avif"
        loading="lazy"
        alt="Project progress"
        className="progress-image"
      />
      <div className="dashbord-image-overly" />
    </div>
  );
}