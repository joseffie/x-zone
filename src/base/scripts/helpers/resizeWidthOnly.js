const resizeWidthOnly = (cb, b) => {
  const windowWidthArr = [window.innerWidth];

  // eslint-disable-next-line no-return-assign
  return (
    // eslint-disable-next-line no-restricted-globals, func-names
    (onresize = function () {
      const windowWidth = window.innerWidth;
      const winWidthArrLength = windowWidthArr.length;

      windowWidthArr.push(windowWidth);

      if (windowWidthArr[winWidthArrLength] !== windowWidthArr[winWidthArrLength - 1]) {
        clearTimeout(b);
        b = this.setTimeout(cb, 50);
      }
    }),
    cb
  );
};

export default resizeWidthOnly;
