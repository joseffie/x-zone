import { initBurgerMenu } from './burger/burger.js';
import {
  getHeaderHeight,
  setHeaderHeight,
  getHeaderBtnHeight,
  setHeaderBtnHeight,
} from './header/header.js';
import { getCtaBtnWidth, setCtaBtnWidth } from './cta/cta.js';

const components = {
  burger: {
    initBurgerMenu,
  },
  header: {
    getHeaderHeight,
    setHeaderHeight,
    button: {
      getHeaderBtnHeight,
      setHeaderBtnHeight,
    },
  },
  cta: {
    getCtaBtnWidth,
    setCtaBtnWidth,
  },
};

export default components;
