const services = [
  {
    title: "Web Development",
    icon: "/axiolance/68d278779785b179d264103a_users-alt.svg",
    desc: "Custom, high-performance websites and web apps built with Next.js, React, and the MERN stack — fast, secure, and SEO-ready.",
  },
  {
    title: "Mobile Apps",
    icon: "/axiolance/68d27dd5c35246398a105bd1_signal-alt-2 1.svg",
    desc: "Native-feeling iOS and Android apps with clean architecture, offline support, and push notifications your users will love.",
  },
  {
    title: "E-commerce Solutions",
    icon: "/axiolance/68d27dd5e2c959af427992b9_grocery-basket 1.svg",
    desc: "Online stores built to sell — product catalogs, secure payments, inventory, and checkout flows that convert visitors into buyers.",
  },
  {
    title: "UI/UX Design",
    icon: "/axiolance/68d27bf4cf1c732c2caf4415_user-suitcase 1.svg",
    desc: "Research-driven interfaces, wireframes, and design systems that make your product easy, beautiful, and delightful to use.",
  },
  {
    title: "AI & Automation",
    icon: "/axiolance/68d27dd5cf1c732c2cafe90e_calculator-math-tax 1.svg",
    desc: "Custom AI assistants, chatbots, and workflow automation that save your team hours every single week.",
  },
  {
    title: "SaaS & Product Engineering",
    icon: "/axiolance/68d27bc1fb5a0b3f61eb62c5_person-dolly 1.svg",
    desc: "From MVP to scale — multi-tenant dashboards, billing, and secure back ends that grow with your users.",
  },
];

export function ModulesSection() {
  return (
    <section id="Services" className="section-modules">
      <div className="padding-global">
        <div className="w-layout-blockcontainer container w-container">
          <div className="features-main-wrapper">
            <div className="section-header is-max">
              <div className="section-tag-wrapper">
                <img
                  src="/axiolance/690f74385894ecf58abef4d1_68bfb430481fa3c0e8610f39_Vector (3) 1.svg"
                  loading="lazy"
                  alt=""
                  className="star-tag"
                />
                <div className="tag-text">Core Services</div>
              </div>
              <h2 className="sub-heading">
                Core Services to Simplify and Grow Your Business
              </h2>
            </div>
            <div className="module-card-wrapper">
              {services.map((s, i) => (
                <div className={`module-card _0${i + 1}`} key={s.title}>
                  <div className="module-logo-wrap">
                    <div className="logo-box">
                      <img src={s.icon} loading="lazy" alt="" className="module-logo" />
                      <img src={s.icon} loading="lazy" alt="" className="module-logo _2nd" />
                    </div>
                  </div>
                  <div className="logo-title">{s.title}</div>
                  <div className="text-regular">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}