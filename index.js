import $$ from './DBQuery.js'

// api search function
let res = []
let currentResultsIndex = 4
let shownResults = []
let searchTerm = 'lany'

function search(name) {
  const searchUrl = `https://itunes.apple.com/search?term=${name}&media=music&entity=album&attribute=artistTerm&limit=200`

  return $$.dbFetch(searchUrl)
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

// document.querySelector(domSel.searchResultsContainer, makeLoading())

function makeSearchCard(artist) {
  return `
  <div class="result-card">
  <img src="${artist.artworkUrl100}" alt="" />
  <h3>${artist.collectionName}</h3>
</div>
  `
}

async function makeSearchResults(stringSearch) {
  $$('.loading-container').html(makeLoading())
  res = await search(stringSearch)

  shownResults = res.results.slice(0, currentResultsIndex)

  let searchResultsHTML = shownResults
    .map((item) => {
      return makeSearchCard(item)
    })
    .join('')

  $$(domSel.resultsStatus).html(makeResultStatus(res.resultCount, stringSearch))
  $$('.loader').remove()

  return searchResultsHTML
}

function makeResultStatus(count, str) {
  return `
  <h3 class="results-status">${count} results for "${str}"</h3>
  `
}

//addeventlistener

$$('.search-bar_input-container').on('submit', async (e) => {
  e.preventDefault()
  $$(domSel.searchResultsContainer).html('')
  searchTerm = $$('.search-bar_input').val()
  currentResultsIndex = 4
  // render(domSel.searchResultsContainer, makeSearchResults(searchTerm))
  const searchResults = await makeSearchResults(searchTerm)
  $$(domSel.searchResultsContainer).html(searchResults)
})

$$('.load-more').on('click', () => {
  currentResultsIndex += 4
  shownResults = res.results.slice(0, currentResultsIndex)
  console.log(shownResults)

  let newHTML = shownResults
    .map((item) => {
      return makeSearchCard(item)
    })
    .join('')

  $$(domSel.searchResultsContainer).html(newHTML)
})
