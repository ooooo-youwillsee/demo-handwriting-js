/**
 * 手写一个JSON.parse()
 *
 * 可以用eval()方法
 * @param text
 */
function parse1 (text) {
  return eval('(' + text + ')')
}

function parse2(text) {
  return (new Function('return ' + text))()
}

// 测试

console.log(parse1('{\'x\': 1, \'y\': 5}'))
console.log(parse1('[1, false, \'false\']'))
console.log(parse1('{\'x\': 1, \'y\': \'undefined\'}'))

console.log('-----------------')

console.log(parse2('{\'x\': 1, \'y\': 5}'))
console.log(parse2('[1, false, \'false\']'))
console.log(parse2('{\'x\': 1, \'y\': \'undefined\'}'))
