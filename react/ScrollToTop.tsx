import React, { useRef, useEffect, useState } from 'react';
import { canUseDOM } from 'vtex.render-runtime';

// Styles
import styles from "./styles.css";

interface ScrollToTopProps {

}

const ScrollToTop: StorefrontFunctionComponent<ScrollToTopProps> = ({ }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const previousScrollPosition = useRef(0);
  const scrollGate = useRef(false);

  useEffect(() => {
    if (!canUseDOM) return;

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  // Scroll throttle
  const handleScroll = () => {
    if (!canUseDOM) return;
    previousScrollPosition.current = window.scrollY;

    if (!scrollGate.current) {
      setTimeout(() => {
        checkScrollPosition();
        scrollGate.current = false;
      }, 1000);

      scrollGate.current = true;
    } 
  }

  const checkScrollPosition = () => {
    if (!canUseDOM) return;
    setShowScrollButton(previousScrollPosition.current > 1000 ? true : false);
  }

  const handleClick = () => {
    if (!canUseDOM) return;
    setShowScrollButton(false);
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }

  return <button onClick={handleClick} className={styles.button} style={{transform: `translateY(${showScrollButton ? `0%` : `-200%`})`}}>↑</button>
}

ScrollToTop.schema = { 
  title: "Scroll To Top",
  description: "",
  type: "object",
  properties: {
  }
}

export default ScrollToTop;
