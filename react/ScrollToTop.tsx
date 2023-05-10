import React, { ReactChildren, useRef, useEffect, useState } from 'react';
import { canUseDOM } from 'vtex.render-runtime';

// Styles
import styles from "./styles.css";

interface ScrollToTopProps {

}


const ScrollToTop: StorefrontFunctionComponent<ScrollToTopProps> = ({ }) => {
  
  return (<>
    Scroll
  </>)
}

ScrollToTop.schema = {
  title: "Mobile Sub Menu",
  description: "",
  type: "object",
  properties: {
  }
}

export default ScrollToTop;
