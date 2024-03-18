import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

import "./header.css";
import { useState } from "react";
export function Header() {
  const [active, setActive] = useState("menu");

  function handleHamburgerMenu() {
    active === "menu" ? setActive("menu nav-active") : setActive("menu");
  }
  return (
    <header>
      <nav className="navigation">
        <ul className="logo">
          <li>LOGO</li>
        </ul>
        <ul className={active}>
          <Link to={"/home"}>
            <li>
              <span>
                <Icon
                  icon="ic:outline-home"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: "white" }}
                />
              </span>{" "}
              <span>Home</span>
            </li>
          </Link>
          <Link to={"/products"}>
            <li>
              <span>
                <Icon
                  icon="dashicons:products"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: "white" }}
                />
              </span>
              <span>Products</span>
            </li>
          </Link>
          <Link to={"/blog"}>
            <li>
              <span>
                <Icon
                  icon="dashicons:welcome-write-blog"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: "white" }}
                />
              </span>
              <span>Blog</span>
            </li>
          </Link>
          <Link>
            <li>
              <span>
                <Icon
                  icon="mdi:contact"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: "white" }}
                />
              </span>
              <span>Contact</span>
            </li>
          </Link>
          <Link>
            <li>
              <span>
                <Icon
                  icon="mdi:about"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: "white" }}
                />
              </span>
              <span>About</span>
            </li>
          </Link>
          <Link>
            <li>
              <span>
                <Icon
                  icon="ri:shopping-basket-fill"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: "white" }}
                />
              </span>
              <span>Basket</span>
            </li>
          </Link>
        </ul>
        <div className="navigation-toggler">
          <button onClick={handleHamburgerMenu}>
            <span>
              <Icon
                icon="icon-park-outline:hamburger-button"
                width="2.5em"
                height="2.5em"
                style={{ color: "white" }}
              />
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
