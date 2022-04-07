class DBQuery {
  constructor(selector) {
    this.els = document.querySelectorAll(selector)
  }
  html(innerhtml) {
    this.els.forEach((el) => {
      el.innerHTML = innerhtml
    })
  }
  hide() {
    this.els.forEach((el) => {
      el.preDisplay = el.style.display
      el.style.setProperty('display', 'none')
    })
  }
  on(eventType, cb) {
    this.els.forEach((el) => {
      el.addEventListener(eventType, cb)
    })
  }
  show() {
    this.els.forEach((el) => {
      el.style.setProperty('display', el.preDisplay)
    })
  }
  remove() {
    this.els.forEach((el) => {
      el.remove()
    })
  }
  val() {
    const retVal = []
    this.els.forEach((el) => {
      retVal.push(el.value)
    })
    return retVal
  }
  addClass(classToAdd) {
    this.els.forEach((el) => el.classList.add(classToAdd))
  }
  removeClass(classToRemove) {
    this.els.forEach((el) => el.classList.remove(classToRemove))
  }
}

const $$ = (sel) => new DBQuery(sel)

$$.dbFetch = async (url) => {
  const res = await fetch(url).then((response) => response.json())

  return res
}

export default $$
