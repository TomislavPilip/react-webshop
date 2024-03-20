import "./cart.css";
import { Icon } from "@iconify/react";
import Canyon from "../../assets/Basket-images/Canyon1.webp";
import Helmet from "../../assets/Basket-images/kaciga-bontrager.webp";

export function Cart() {
  return (
    <div className="cart-container">
      <div className="kosara">
        <div className="left-column">
          <div className="proizvod">
            <div className="proizvod-slika">
              <img src={Canyon} alt="" />
            </div>
            <div className="proizvod-info">
              <h3>Canyon Ultimate CF SLX 8</h3>
              <div className="cijena">
                <span>6.999,00 €</span>
                <br />
                <span>Veličina kotača: 700c</span>
                <br />
                <span>Veličina okvira: 58</span>
              </div>
              <div className="koli-botun">
                <div>
                  <span>Količina:</span>
                  <input type="number" placeholder="0" />
                </div>
                <div>
                  <button type="button">
                    <span>
                      <Icon
                        icon="mdi:trash"
                        width="1.5em"
                        height="1.5em"
                        style={{ color: "black" }}
                      />
                    </span>
                    <span>Izbriši</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="proizvod">
            <div className="proizvod-slika">
              <img src={Helmet} alt="" />
            </div>
            <div className="proizvod-info">
              <h3>Kask Mojito Cubed WG Black</h3>
              <div className="cijena">
                <span>148,99 €</span>
                <br />
                <span>Veličina kacige: 58-62</span>
                <br />
              </div>
              <div className="koli-botun">
                <div>
                  <span>Količina:</span>
                  <input type="number" placeholder="0" />
                </div>
                <div>
                  <button type="button">
                    <span>
                      <i className="fas fa-trash"></i>
                    </span>
                    <span>Izbriši</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right-column">
          <div className="checkout">
            <div className="price">
              <span>Dostava:</span>
              <span>BESPLATNA</span>
            </div>
            <div className="osnovica">
              <span>Bez PDV-a</span>
              <span>7.067,20 €</span>
            </div>
            <div className="porez">
              <span>PDV:</span>
              <span>1.769,80 €</span>
            </div>
            <div className="ukupno">
              <span>Ukupno:</span>
              <span>8.836,00 €</span>
            </div>
            <a href="checkout.html" target="_blank">
              <button type="button">Dovrši kupovinu</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
