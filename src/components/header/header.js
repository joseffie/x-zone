export const getHeaderHeight = () => {
  const header = document.querySelector('.page__header');
  const headerHeight = header.offsetHeight;

  return `${headerHeight}px`;
};

export const setHeaderHeight = () =>
  document.documentElement.style.setProperty('--header-height', getHeaderHeight());

export const getHeaderBtnHeight = () => {
  const headerBtn = document.querySelector('.header__btn');
  const headerBtnHeight = headerBtn.offsetHeight;

  return `${headerBtnHeight}px`;
};

export const setHeaderBtnHeight = () =>
  document.documentElement.style.setProperty('--header-btn-height', getHeaderBtnHeight());
