const path = require('path');
module.exports = ({ file }) => {
  const designWidth = file.dirname.includes('vant')?375:750;
  // const designWidth = 750
  return {
      plugins: {
          // ...
          'postcss-px-to-viewport': {
              unitToConvert: 'px',
              viewportWidth: designWidth,
              unitPrecision: 5,
              propList: ['*'],
              viewportUnit: 'vw',
              fontViewportUnit: 'vw',
              selectorBlackList: [],
              minPixelValue: 1,
              mediaQuery: false,
              replace: true,
              exclude: undefined,
              include: undefined,
              landscape: false,
              landscapeUnit: 'vw',
              landscapeWidth: 568
          }
      }
  }
}