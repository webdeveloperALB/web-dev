"use client";
import "./header.scss";
import React, { useContext } from "react";
import { NavigationContext } from "../navigation";
import Icon_menu from "@/components/icons/icon-menu";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { isMenuOpened, setIsMenuOpened } = useContext(NavigationContext);
  
  const handleClickMenu = () => setIsMenuOpened((prev) => !prev);

  return (
    <header className="header">
      <nav className="header__nav">
        <span className="header__logo">
          <Link href="/">
            <Image
              src="/logofinal.svg"
              alt="WebDev AL Logo"
              width={100}
              height={40}
              style={{ borderRadius: "10px", filter: "none" }}
              loading="lazy"
            />
          </Link>
        </span>

        <ul className="header__nav-list">
          <li className="header__nav-item">
            <button
              onClick={handleClickMenu}
              className="header__nav-button flex items-center gap-6 outline-none mr-40 max-[500px]:mr-0"
            >
              <span className="header__nav-text">Menu</span>
              <span className="header__nav-icon">
                <Icon_menu type={isMenuOpened ? "close" : "open"} />
              </span>
            </button>
          </li>
          <li className="divider"></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;