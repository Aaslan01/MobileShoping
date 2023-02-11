/** @format */

const white = '#fff';
const black = '#000';
const dark = '#1E1E1E';
const green = '#89B601';
const gray = '#9A9A9A';
const yellow = '#FFD747';

const StyleGuide = {
  colors: {
    darkText: black,
    text: dark,
    background: white,
    primary: green,
    onPrimary: white,
    border: gray,
    borderWithOpacity: 'rgba(154,154,154,0.45)',
    secondary: yellow,
    gray: gray,
  },
  rowCenter:{
    flexDirection: 'row', justifyContent: 'space-between'
  },
  row:{
    flexDirection: 'row',
  },
  iconsImage: {
    width:32,
    height:32,
  },
  boldText: {
    color: dark,
    fontFamily: 'Poppins-Bold',
  },
  semiText: {
    color: dark,
    fontFamily: 'Poppins-SemiBold',
  },
  regularText: {
    color: dark,
    fontFamily: 'Poppins-Regular',
  },
};

export default StyleGuide;
