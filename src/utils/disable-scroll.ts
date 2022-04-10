export const disableScroll = () => {
  const top = window.scrollY;
  document.body.style.position = "fixed";
  document.body.style.top = `-${top}px`;
  document.body.style.paddingRight = "17px";
};

export const enableScroll = () => {
  const scrollY = document.body.style.top;
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.paddingRight = "0";
  window.scrollTo(0, parseInt(scrollY || "0") * -1);
};
