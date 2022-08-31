export const getCtaBtnWidth = () => {
  const ctaBtn = document.querySelector('.cta__btn');
  const ctaBtnWidth = ctaBtn.offsetWidth;

  return `${ctaBtnWidth + 25}px`;
};

export const setCtaBtnWidth = () =>
  document.documentElement.style.setProperty('--cta-btn-width', getCtaBtnWidth());
