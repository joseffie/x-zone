import { isWebp } from './helpers/is.js';
import resizeWidthOnly from './helpers/resizeWidthOnly.js';

isWebp((support) => {
  if (support === true) {
    document.body.classList.add('webp');
  } else {
    document.body.classList.add('no-webp');
  }
});

import components from '../../components/components.js';

components.burger.initBurgerMenu();
components.header.setHeaderHeight();
components.header.button.setHeaderBtnHeight();
components.cta.setCtaBtnWidth();

resizeWidthOnly(() => {
  components.header.setHeaderHeight();
  components.header.button.setHeaderBtnHeight();
  components.cta.setCtaBtnWidth();
});
