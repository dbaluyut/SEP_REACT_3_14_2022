// api search function
let res = []
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
  let searchResults = await search(stringSearch)

  let searchResultsHTML = searchResults.results
    .map((item) => {
      return makeSearchCard(item)
    })
    .join('')
  console.log(searchResults)

  render(
    domSel.resultsStatus,
    makeResultStatus(searchResults.resultCount, stringSearch)
  )

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
    const val = document.querySelector('.search-bar_input').value

    render(domSel.searchResultsContainer, makeSearchResults(val))
  })
