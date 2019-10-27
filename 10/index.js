function deepCopy1 (obj) {
  return JSON.parse(JSON.stringify(obj))
}

function deepCopy2 (obj) {
  if (typeof obj === 'object') {
    let res = obj.constructor === Array ? [] : {}
    for (let k in obj) {
      let v = obj[k]
      res[k] = typeof v === 'object' ? deepCopy2(v) : v
    }
    return res
  } else {
    return obj
  }
}
