import "./home.css";

export function Home() {
  return (
    <main>
      <section>
        <div class="banner">
          <div class="banner_text">
            <h2>Istraži svijet bicikliranja</h2>
            <div class="line"></div>
            <h1>BUDI NAŠ ČLAN</h1>
            <a href="">
              <button class="button-read-more">Pridruži se</button>
            </a>
          </div>
        </div>
      </section>
      <section>
        <div class="first_heading">
          <h1>BICIKLI I OPREMA</h1>
          <span>#IZDVOJENE KATEGORIJE </span>
        </div>
        <div class="first_gallery">
          <a class="scott" href="#">
            <h2>
              Najljepsi cestovni bicikl <br />
              <span>SCOTT FOIL RC 30</span>
            </h2>
            <img
              src="Images/Logo/SCOTT_LOGO_BLACK-sm.png"
              alt="logo scott bicikla"
              width="160px"
              height="100px"
            />
          </a>

          <a class="fulcrum" href="#">
            <h2>
              U ponudi novi
              <span>Fulcrumovi</span> kotaci
            </h2>
            <img
              src="Images/Logo/fulcrum-logo.png"
              alt="logo fulcrum kotaci"
              width="160px"
              height="100px"
            />
          </a>
          <a class="specialized" href="#">
            <h2>
              20% <br />
              Na svu <span>Specialized</span> <br />
              zimsku odjecu
            </h2>
            <img
              src="Images/Logo/specializedlogo.png"
              alt="zimska odjeca za bicikliranje"
              width="130px"
              height="90px"
            />
          </a>
          <a class="shimano" href="#">
            <img
              src="Images/Logo/Shimano_logo2.png"
              alt="shimano logo"
              width="130px"
              height="30px"
            />
          </a>
        </div>
        <a href="#">
          <div class="novi_modeli"></div>
        </a>
      </section>
      <section>
        <object data="" type="">
          <iframe
            class="auto-height-iframe"
            src="blog_card_new.html"
            width="100%"
            frameborder="0"
          ></iframe>
        </object>
        <script src="JS/iframe.js"></script>
      </section>
    </main>
  );
}
