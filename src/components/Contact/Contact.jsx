import "./contact.css";
import { Icon } from "@iconify/react";

export function Contact() {
  return (
    <div className="contact-main-container">
      <section>
        <div class="section">
          <div class="text_content">
            <h1>Kontaktirajte nas</h1>
            <h4>
              Dobrodošli u Bike shop Tome, vašu destinaciju za sve što se tiče
              biciklizma! Posvećeni smo pružanju vrhunskih proizvoda i izvrsne
              usluge korisnicima. Ako imate bilo kakvih pitanja, primjedbi ili
              samo želite razgovarati o biciklima, slobodno nas kontaktirajte.
            </h4>
          </div>

          <div class="contact_container">
            <div class="contact_container col1">
              <div class="adress box">
                <div class="icon">
                  <Icon
                    icon="fluent:location-12-filled"
                    width="1.5em"
                    height="1.5em"
                    style={{ color: "#e47a01" }}
                  />
                </div>
                <div class="text">
                  <h3>Adress</h3>
                  <p>
                    Ulica kralja Tomislava 5 <br />
                    22000 Šibenik
                  </p>
                </div>
              </div>
              <div class="phone box">
                <div class="icon">
                  <Icon
                    icon="tabler:phone-filled"
                    width="1.5em"
                    height="1.5em"
                    style={{ color: "#e47a01" }}
                  />
                </div>
                <div class="text">
                  <h3>Phone</h3>
                  <p>022/336-336</p>
                </div>
              </div>
              <div class="email box">
                <div class="icon">
                  <Icon
                    icon="material-symbols:mail"
                    width="1.5em"
                    height="1.5em"
                    style={{ color: "#e47a01" }}
                  />
                </div>
                <div class="text">
                  <h3>E-mail</h3>
                  <p>bikeshoptome@info.hr</p>
                </div>
              </div>
            </div>
            <div class="contact_container col2">
              <form action="">
                <h2>Pošalji poruku</h2>

                <div class="input_box">
                  <input type="text" name="" id="" required="required" />
                  <span>Ime i prezime</span>
                </div>
                <div class="input_box">
                  <input type="text" name="" id="" required="required" />
                  <span>E-mail</span>
                </div>
                <div class="input_box">
                  <textarea
                    placeholder=""
                    name=""
                    id=""
                    cols="30"
                    rows="5"
                  ></textarea>
                  <span>Unesi tekst</span>
                </div>
                <div class="input_box">
                  <button type="submit">Pošalji</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
