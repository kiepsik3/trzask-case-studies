import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import cn from "classnames";
import "./header.less";
import { Menu } from "../Menu/Menu";

export default function Header(props) {
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

  return (
    <header
      className={cn("header", collapsed && "collapsed", pinned && "pinned")}
    >
      <Container className="header-container">
        <a href="/pl" className="header-logo">
          <Logo />
        </a>
        <Menu menu={props.menu} />
      </Container>
    </header>
  );
}
