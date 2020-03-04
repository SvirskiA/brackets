module.exports = function check(str, bracketsConfig) {
  let config = bracketsConfig => [].concat(...bracketsConfig);
//  let str = str;
  let len = str.length / 2;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str.includes(bracketsConfig[j][0] + bracketsConfig[j][1])) {
        str = str.replace((bracketsConfig[j][0] + bracketsConfig[j][1]), '');
      } 
    }
  }

  return str === '' ? true : false;
}