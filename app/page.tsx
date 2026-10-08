const phone = "8502938535";
const whatsappMessage = encodeURIComponent(
  "Hello Yaduvanshi Transport, I need a transport quotation.\n\nPickup: \nDelivery: \nMaterial: \nLoad Type: \nApprox. Load: "
);

const routes = [
  "Neemrana", "Bahrod", "Kotputli", "Rewari", "Dharuhera",
  "Manesar", "Gurugram", "Delhi", "Noida", "Ghaziabad"
];

const services = [
  ["01", "Full Truck Load", "Dedicated truck movement for large consignments and business shipments.", "🚛"],
  ["02", "Part Load Service", "Flexible movement for consignments that do not require a full truck.", "📦"],
  ["03", "Safe & Secure", "A safety-first approach to cargo handling and transportation.", "🛡"],
  ["04", "On-Time Delivery", "Reliable movement with a strong focus on timely delivery.", "⏱"],
  ["05", "Delhi-NCR Service", "Strong route positioning from Neemrana through the Delhi-NCR corridor.", "📍"],
  ["06", "Pan India Service", "Transportation solutions for business cargo beyond the core corridor.", "🇮🇳"],
];

const industries = [
  ["Agri & Food Grains", "धान, अनाज, कृषि उत्पाद", "🌾"],
  ["FMCG & Consumer Goods", "कंज्यूमर सामान", "📦"],
  ["Industrial Material", "मशीनरी, प्लांट, इंडस्ट्रियल सामग्री", "⚙️"],
  ["Construction Material", "सीमेंट, सरिया, बिल्डिंग सामग्री", "🏗️"],
  ["General Cargo", "सामान्य माल", "🧰"],
  ["Project & ODC Movement", "हेवी एवं प्रोजेक्ट कार्गो", "🏭"],
  ["Factory Raw Material", "फैक्ट्री का माल", "📋"],
  ["Customized Logistics", "कस्टम लॉजिस्टिक्स समाधान", "🧭"],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#home" aria-label="Yaduvanshi Transport home">
          <span className="brandMark">YT</span>
          <span>
            <strong>YADUVANSHI</strong>
            <small>TRANSPORT</small>
          </span>
        </a>

        <nav>
          <a href="#services">Services</a>
          <a href="#route">Routes</a>
          <a href="#industries">Industries</a>
          <a href="#media">Media</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="navCta" href={`https://wa.me/91${phone}?text=${whatsappMessage}`}>
          Get Quote
        </a>
      </header>

      <section id="home" className="hero">
        <div className="heroGlow" />
        <div className="roadLines" />
        <div className="heroContent">
          <div className="eyebrow"><span /> LOGISTICS • MOVEMENT • TRUST</div>
          <h1>
            Moving Goods.
            <br />
            <em>Moving Business.</em>
          </h1>
          <p>
            Reliable transportation solutions from <b>Neemrana to Delhi-NCR</b> and beyond.
            Safe handling, dependable movement and customer-focused logistics.
          </p>

          <div className="heroActions">
            <a className="primaryBtn" href={`https://wa.me/91${phone}?text=${whatsappMessage}`}>
              WhatsApp for Instant Quote <span>↗</span>
            </a>
            <a className="secondaryBtn" href={`tel:+91${phone}`}>
              Call {phone}
            </a>
          </div>

          <div className="trustStrip">
            <div><b>SAFE</b><span>Secure Cargo</span></div>
            <div><b>FAST</b><span>Timely Movement</span></div>
            <div><b>RELIABLE</b><span>Business Focused</span></div>
          </div>
        </div>

        <div className="heroVideoWrap" aria-hidden="true">
          <video
            className="heroVideo"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/images/yaduvanshi-poster-1.png"
          >
            <source src="/videos/yaduvanshi-transport.mp4" type="video/mp4" />
          </video>
          <div className="heroVideoOverlay" />
          <div className="heroVideoGlow" />
        </div>

        <div className="scrollHint">SCROLL TO EXPLORE <span>↓</span></div>
      </section>

      <section className="marquee">
        <div>GOODS MOVE BUSINESSES GROW</div>
        <div>•</div>
        <div>INDIA MOVES WITH TRUST</div>
        <div>•</div>
        <div>TRANSPORTING PROGRESS TOGETHER</div>
      </section>

      <section id="route" className="routeSection section">
        <div className="sectionHead">
          <div>
            <span className="kicker">CORE CORRIDOR</span>
            <h2>Neemrana <span>→</span> Delhi-NCR</h2>
          </div>
          <p>
            A clear, connected route story built around the corridor highlighted in
            the company creatives.
          </p>
        </div>

        <div className="routeTrack">
          <div className="routeLine" />
          <div className="routeTruck">🚚</div>
          {routes.map((route, i) => (
            <div className="routeStop" key={route} style={{ ["--i" as string]: i }}>
              <span className="pin">●</span>
              <b>{route}</b>
              <small>{String(i + 1).padStart(2, "0")}</small>
            </div>
          ))}
        </div>

        <div className="routeNote">
          <span>✦</span> Neemrana • Bahrod • Kotputli • Rewari • Dharuhera • Manesar •
          Gurugram • Delhi • Noida • Ghaziabad
        </div>
      </section>

      <section id="services" className="section darkSection">
        <div className="sectionHead">
          <div>
            <span className="kicker">WHAT WE DO</span>
            <h2>Transport solutions built for <span>business.</span></h2>
          </div>
          <p>From full loads to flexible consignments, choose the service that fits your movement.</p>
        </div>

        <div className="serviceGrid">
          {services.map(([num, title, text, icon]) => (
            <article className="serviceCard" key={title}>
              <span className="cardNumber">{num}</span>
              <span className="serviceIcon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="cardArrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="industries" className="section industries">
        <div className="sectionHead">
          <div>
            <span className="kicker">CARGO CATEGORIES</span>
            <h2>We transport <span>all types of goods.</span></h2>
          </div>
          <p>Designed for commercial, industrial, construction and general cargo requirements.</p>
        </div>

        <div className="industryGrid">
          {industries.map(([title, sub, icon]) => (
            <article className="industryCard" key={title}>
              <div className="industryIcon">{icon}</div>
              <div>
                <h3>{title}</h3>
                <p>{sub}</p>
              </div>
              <span>↗</span>
            </article>
          ))}
        </div>
      </section>

      <section id="why-us" className="trustSection section">
        <div className="trustVisual">
          <div className="posterFrame">
            <img
              src="/images/yaduvanshi-poster-2.png"
              alt="Yaduvanshi Transport promotional creative"
            />
          </div>
        </div>

        <div className="trustContent">
          <span className="kicker">WHY YADUVANSHI</span>
          <h2>Your trusted <span>transport partner.</span></h2>
          <p>
            A professional logistics experience built around the promises communicated
            by the brand: safe deliveries, on-time service, customer focus, cost efficiency
            and always-connected support.
          </p>

          <div className="promiseList">
            {[
              ["01", "Safe Deliveries", "Cargo handled with care."],
              ["02", "On-Time Service", "Reliable movement matters."],
              ["03", "Customer Focused", "Solutions around your requirement."],
              ["04", "Cost Efficient", "Practical transportation options."],
              ["05", "Always Connected", "Easy access when you need us."],
            ].map(([n, t, d]) => (
              <div className="promise" key={t}>
                <b>{n}</b>
                <div>
                  <strong>{t}</strong>
                  <span>{d}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="media" className="section darkSection videoSection">
        <div className="sectionHead">
          <div>
            <span className="kicker">OUR MOVEMENT</span>
            <h2>See Yaduvanshi <span>in motion.</span></h2>
          </div>
          <p>
            Transport stories, promotional visuals and road movement — presented directly
            on the website.
          </p>
        </div>

        <div className="videoGrid">
          <article className="siteVideo">
            <video controls muted loop playsInline preload="metadata" poster="/images/yaduvanshi-poster-1.png">
              <source src="/videos/yaduvanshi-transport.mp4" type="video/mp4" />
            </video>
            <span>Main Transport Video</span>
          </article>

          <article className="siteVideo">
            <video controls muted loop playsInline preload="metadata" poster="/images/yaduvanshi-poster-2.png">
              <source src="/videos/yaduvanshi-promo-1.mp4" type="video/mp4" />
            </video>
            <span>Yaduvanshi Promo 01</span>
          </article>

          <article className="siteVideo">
            <video controls muted loop playsInline preload="metadata" poster="/images/yaduvanshi-poster-1.png">
              <source src="/videos/yaduvanshi-promo-2.mp4" type="video/mp4" />
            </video>
            <span>Yaduvanshi Promo 02</span>
          </article>
        </div>
      </section>

      <section id="contact" className="quoteSection section">
        <div className="quotePanel">
          <div>
            <span className="kicker">READY TO MOVE?</span>
            <h2>Get your transport <span>quote on WhatsApp.</span></h2>
            <p>
              Share your pickup, delivery and material details. Start the conversation
              directly with Yaduvanshi Transport.
            </p>
          </div>

          <div className="quoteActions">
            <a
              className="whatsappBtn"
              href={`https://wa.me/91${phone}?text=${whatsappMessage}`}
            >
              <span>WhatsApp</span> Instant Quote ↗
            </a>
            <a className="callBtn" href={`tel:+91${phone}`}>
              Call Now <span>+91 {phone}</span>
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="footerBrand">
          <div className="brand">
            <span className="brandMark">YT</span>
            <span>
              <strong>YADUVANSHI</strong>
              <small>TRANSPORT</small>
            </span>
          </div>
          <p>SAFE • FAST • RELIABLE</p>
        </div>

        <div className="footerLinks">
          <a href="#services">Services</a>
          <a href="#route">Routes</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Get Quote</a>
        </div>

        <div className="footerContact">
          <small>CALL / WHATSAPP</small>
          <a href={`tel:+91${phone}`}>+91 {phone}</a>
        </div>

        <div className="copyright">
          © 2026 Yaduvanshi Transport. All rights reserved.
        </div>
      </footer>

      <div className="mobileBar">
        <a href={`tel:+91${phone}`}>☎ Call</a>
        <a href={`https://wa.me/91${phone}?text=${whatsappMessage}`}>
          ◉ WhatsApp Quote
        </a>
      </div>
    </main>
  );
          }
