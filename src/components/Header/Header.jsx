import "./header.css";
import { Icon } from "@iconify/react";
import Logo from "../../assets/Logo/Tomelogo.webp";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
      <div className="first-nav">
        <div className="social">
          <div>
            <Icon icon="logos:facebook" width="1.5em" height="1.5em" />
          </div>
          <div>
            <Icon icon="skill-icons:instagram" width="1.5em" height="1.5em" />
          </div>
        </div>
        <div className="search-bar">
          <div>
            <input type="text" placeholder="Search" />

            <Icon
              className="search-icon"
              icon="ic:baseline-search"
              width="1.5em"
              height="1.5em"
              style={{ color: "black" }}
            />
          </div>
        </div>
        <div className="shop">
          <button>
            <span>
              <Icon
                icon="iconamoon:profile-fill"
                width="1.5em"
                height="1.5em"
                style={{ color: "white" }}
              />
            </span>
            <span>Login</span>
          </button>
          <button>
            <span>
              <Icon
                icon="ri:shopping-basket-fill"
                width="1.5em"
                height="1.5em"
                style={{ color: "white" }}
              />
            </span>
            <span>Basket</span>
          </button>
        </div>
      </div>
      <nav className="second-nav">
        <div className="logo">
          <a>
            <img src={Logo} alt="" />
          </a>
        </div>
        <div className="menu">
          <ul>
            <Link to={"/"}>
              <Icon
                icon="ic:outline-home"
                width="1.5em"
                height="1.5em"
                style={{ color: "white" }}
              />
              <li>Home</li>
            </Link>
            <a>
              <Icon
                icon="dashicons:products"
                width="1.5em"
                height="1.5em"
                style={{ color: "white" }}
              />
              <li>Products</li>
            </a>
            <Link to={"/blog"}>
              <Icon
                icon="dashicons:welcome-write-blog"
                width="1.5em"
                height="1.5em"
                style={{ color: "white" }}
              />
              <li>Blog</li>
            </Link>
            <Link to={"/contact"}>
              <Icon
                icon="mdi:contact"
                width="1.5em"
                height="1.5em"
                style={{ color: "white" }}
              />
              <li>Contact</li>
            </Link>
            <Link to={"/about"}>
              <Icon
                icon="mdi:about"
                width="1.5em"
                height="1.5em"
                style={{ color: "white" }}
              />
              <li>About</li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
