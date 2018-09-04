module.exports = {
  G000: '#ffffff',
  G000_ALPHA_30: '#b3b3b3',
  G100: '#f6f6f6',
  G200: '#eeeeee',
  G250: '#dfdfdf',
  G300: '#c0c0c0',
  G350: '#a0a0a0',
  G400: '#888888',
  G500: '#656565',
  G600: '#444444',
  G700: '#383838',
  G800: '#2d2d2d',
  G900: '#222222',

  B50: '#daeefe',
  B100: '#b8e0ff',
  B150: '#96d5f1',
  B400: '#1a8dc2',
  B500: '#007db6',
  B600: '#006999',
  B700: '#004e73',

  R50: '#ffe3e3',
  R150: '#faafaf',
  R300: '#f68384',
  R500: '#ed796a',
  R800: '#e8595a',

  Y50: '#fffbdb',

  get baseColor() {
    return this.B50;
  },

  // get colorTextMain() {
  //   return this.G600;
  // },

  get colorTextSecondary() {
    return this.G400;
  },

  get colorTextLight() {
    return this.G350;
  },

  get colorTextLink() {
    return this.B500;
  },

  get colorTextHeader() {
    return this.G000;
  },

  get colorLinkHeader() {
    return this.G000;
  },

  // get colorAccent() {
  //   return this.B500;
  // },

  // get colorBorderMain() {
  //   return this.G300;
  // },

  get colorBorderGrid() {
    return this.G250;
  },

  get colorBackgroundHeader() {
    return this.B500;
  },

  get colorBackgroundNeutralLight() {
    return this.G100;
  },

  // get colorBackgroundDisabled() {
  //   return this.G200;
  // },

  get colorHighlightLight() {
    return this.B50;
  },

  get colorHighlightDark() {
    return this.B100;
  },

  get colorNavBackground() {
    return this.G600;
  },

  get colorNavCurrent() {
    return this.G000;
  },

  get colorNavHover() {
    return this.G500;
  },

  get colorTextNavRest() {
    return this.G100;
  },

  get colorTextNavSecondary() {
    return this.G400;
  },

  get colorControlBorder() {
    return this.G400;
  },

  get colorControlBorderDisabled() {
    return this.G250;
  },

  get colorControlElement() {
    return this.G600;
  },

  get colorControlElementDisabled() {
    return this.G300;
  },

  get baseRestColor() {
    return this.B500;
  },

  get baseHoverColor() {
    return this.B600;
  },

  get baseActiveColor() {
    return this.B700;
  },

  get baseDisabledColor() {
    return this.G200;
  },

  get darkRestColor() {
    return this.G500;
  },

  get darkHoverColor() {
    return this.G600;
  },

  get darkActiveColor() {
    return this.G800;
  },

  // Newest (https://confluence.veeam.com/display/CT/Themes)

  get colorAccent() {
    return this.B500;
  },

  get colorButtonHover() {
    return this.B600;
  },

  get colorButtonActive() {
    return this.B700;
  },

  get colorButtonDisabled() {
    return this.G200;
  },

  get colorTextButtonDisabled() {
    return this.G350;
  },

  get colorTextRestButton() {
    return this.G000;
  },

  get colorTextRestSecondaryButton() {
    return this.G000;
  },

  get colorSecondaryButton() {
    return this.G500;
  },

  get colorSecondaryButtonHover() {
    return this.G600;
  },

  get colorSecondaryButtonActive() {
    return this.G800;
  },

  get colorTextRestGhostButton() {
    return this.G600;
  },

  get colorBackgroundDisabled() {
    return this.G200;
  },

  get colorTextMain() {
    return this.G600;
  },

  get colorBorderMain() {
    return this.G300;
  },

  get colorBackgroundError() {
    return this.R50;
  },

  get colorBorderError() {
    return this.R800;
  },

  get colorLink() {
    return this.B500;
  },

  get colorBorderNeutral() {
    return this.G000_ALPHA_30;
  },

  get colorHighlightNotification() {
    return this.Y50;
  },
};
