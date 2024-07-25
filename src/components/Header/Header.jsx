import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import "./header.less";

export default function Header() {
  const [collapsed, setCollapsed] = useState(false);
  const [pinned, setPinned] = useState(true);
  useScrollPosition(
    ({ currPos, prevPos }) => {
      if (currPos.y === prevPos.y) {
        return;
      }

      const windowHeight = window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      currPos.y > 0 ? setCollapsed(true) : setCollapsed(false);
      currPos.y > prevPos.y && currPos.y > 0
        ? setPinned(false)
        : currPos.y + windowHeight < pageHeight && setPinned(true);
    },

    [collapsed],
    undefined,
    true,
    0,
  );

  const menu = document.getElementById("hamburger");
  pinned ? menu.classList.add("pinned") : menu.classList.remove("pinned");

  return (
    <header
      className={cn("header", collapsed && "collapsed", pinned && "pinned")}
    >
      <Container>
        <a href="/pl" className="header-logo">
          <Logo />
        </a>
      </Container>
    </header>
  );
}
