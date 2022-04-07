// api search function
let res = []
let currentResultsIndex = 4
let shownResults = []
let searchTerm = 'lany'

async function search(name) {
  await fetchJsonp(
    `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=200`
  )
    .then((res) => res.json())
    .then((json) => (res = json))
  return res
}

// let searchResults = await search('lany')
// console.log(searchResults.results[0])

//dom selectors

const domSel = {
  searchResultsContainer: '.search-results_container',
  resultsStatus: '.results-status',
  searchResults: '.search-results',
}

// make html templates

function makeLoading() {
  return `
  <div class="loader"></div>
  `
}

document.querySelector(domSel.searchResultsContainer, makeLoading())

function makeSearchCard(artist) {
  return `
  <div class="result-card">
  <img src="${artist.artworkUrl100}" alt="" />
  <h3>${artist.collectionName}</h3>
</div>
  `
}

async function makeSearchResults(stringSearch) {
  render('.loading-container', makeLoading())

  res = await search(stringSearch)
  console.dir(res)

  shownResults = res.results.slice(0, currentResultsIndex)

  console.log(shownResults)

  let searchResultsHTML = shownResults
    .map((item) => {
      return makeSearchCard(item)
    })
    .join('')

  render(domSel.resultsStatus, makeResultStatus(res.resultCount, stringSearch))

  document.querySelector('.loader').remove()

  return searchResultsHTML
}

function makeResultStatus(count, str) {
  return `
  <h3 class="results-status">${count} results for "${str}"</h3>
  `
}

// render

async function render(el, tmp) {
  document.querySelector(el).innerHTML = await tmp
}

//addeventlistener

document
  .querySelector('.search-bar_input-container')
  .addEventListener('submit', (e) => {
    e.preventDefault()
    searchTerm = document.querySelector('.search-bar_input').value
    currentResultsIndex = 4
    render(domSel.searchResultsContainer, makeSearchResults(searchTerm))
  })

document.querySelector('.load-more').addEventListener('click', () => {
  currentResultsIndex += 4
  shownResults = res.results.slice(0, currentResultsIndex)
  console.log(shownResults)

  let newHTML = shownResults
    .map((item) => {
      return makeSearchCard(item)
    })
    .join('')

  render(domSel.searchResultsContainer, newHTML)
})

//MVC
