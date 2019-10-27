/**
 * 防抖函数， 多次点击后，重新计算事件，只触发最后一次的事件
 */
function debounce (fn, wait = 50, immediate) {
  let timer
  return function () {
    if (immediate) {
      fn.apply(this, arguments)
    } else {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, arguments)
      }, wait)
    }
  }
}

/**
 * 节流函数
 * 可以限制函数调用的频率, 比如一秒中不能调用函数两次
 */
function throttle (fn, wait) {
  let prev = new Date()
  return function () {
    let now = new Date()
    if (now - prev > wait) {
      fn.apply(this, arguments)
      prev = new Date()
    }
  }
}
