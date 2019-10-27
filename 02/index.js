/**
 * 实现一个JSON.stringify
 *
 * @param obj
 */
function stringify (obj) {
  let type = typeof obj
  if (type !== 'object' || obj === null) {
    if (/string|undefined|function/.test(type)) {
      obj = '"' + obj + '"'
    }
    return String(obj)
  } else {
    let json = []
    let arr = obj && obj.constructor === Array
    for (let k in obj) {
      if (obj.hasOwnProperty(k)) {
        let v = obj[k]
        let type = typeof v
        if (/string|undefined|function/.test(type)) {
          v = '"' + v + '"'
        } else if (typeof v === 'object') {
          v = stringify(v)
        }
        json.push((arr ? '' : '"' + k + '":') + String(v))
      }
    }
    return (arr ? '[' : '{') + String(json) + (arr ? ']' : '}')
  }
}

// 测试

console.log(stringify({x: 1, y: 5}), JSON.stringify({x: 1, y: 5}))
console.log(stringify([1, false, 'false']), JSON.stringify([1, false, 'false']))
console.log(stringify({x: 1, y: undefined}))



