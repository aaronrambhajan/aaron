// @flow

export const colors = {
  STANDARD: 'rgba(0, 0, 0, 1.0)',
  SECONDARY: 'rgba(69, 69, 69, 1.0)', // #454545
  BLUE_PRIMARY: 'rgba(0, 173, 239, 1.0)', // #00adef
  BLUE_SECONDARY: 'rgba(26, 37, 72, 1.0)', // #1a2548
  PINK_PRIMARY: 'rgba(232, 62, 140, 1.0)', // #E83E8C
  PINK_SECONDARY: 'rgba(255, 240, 245, 1.0)', // #FFF0F5

  PROJECT_1: 'rgba(15, 196, 177, 1.0)', // #0FC4B1
  PROJECT_2: 'rgba(243, 109, 119, 1.0)', // #F36D77
  PROJECT_3: 'rgba(68, 189, 236, 1.0)', // #44BDEC
  PROJECT_4: 'rgba(255, 158, 72, 1.0)', // #FF9E48
};

export const changeOpacity = (color: String, newOpacity: String) => {
  return color.slice(0, -4) + newOpacity + ')';
};
