const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// 编译转换css成rem
const postcssPxtorem = () => {
  return require('postcss-pxtorem')({
    rootValue: 37.5, // 换算的基数 默认100，作用 设计稿上元素宽375px,最终页面会换算成 10rem
    selectorBlackList: ['weui', 'mu', 'ant'], // 忽略转换正则匹配项（选择器）
    unitPrecision: 5,
    mediaQuery: false,
    minPixelValue: 0,
    // true忽略
    exclude: file => {
      const excludeArr = [
        resolveApp('src/components/Pc'),
        resolveApp('src/components/Common'),
        resolveApp('src/views/Pc'),
        'node_modules/antd/'
      ];

      return excludeArr.some(item => file.includes(item));
    },
    propList: [
      '*background*',
      '*padding*',
      '*margin*',
      'letter-spacing',
      '*width',
      '*height',
      'left',
      'font*',
      'right',
      'top',
      'bottom'
    ]
  });
};

module.exports = postcssPxtorem;