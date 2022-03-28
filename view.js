import { getMovieData } from './main.js'

const domSelectors = {
  movieCardsContainer: '.movie-cards_container',
}

const movies = await getMovieData()

let startIndex = 0

let endIndex = 4

function makeMovieSlice(s, e) {
  return movies.slice(startIndex, endIndex)
}

function makeMovieCards(newMovies) {
  return newMovies
    .map((movie) => {
      return `<div class="movie-card" id="movieId-${movie.id}">
      <img src="${movie.imgUrl}" alt="" />
      <h3>${movie.name}</h3>
      <p>${movie.outlineInfo}</p>
    </div>`
    })
    .join('')
}

function render(el, tmp) {
  document.querySelector(el).innerHTML = tmp
}

render(
  domSelectors.movieCardsContainer,
  makeMovieCards(makeMovieSlice(startIndex, endIndex))
)

function renderButtons() {
  if (startIndex === 0) {
    document.querySelector('.movie-carousel_move-left').classList.add('hide')
  } else {
    document.querySelector('.movie-carousel_move-left').classList.remove('hide')
  }
  if (endIndex === movies.length) {
    document.querySelector('.movie-carousel_move-right').classList.add('hide')
  } else {
    document
      .querySelector('.movie-carousel_move-right')
      .classList.remove('hide')
  }
}

//addeventlisteners

function incrementIndex() {
  if (endIndex < movies.length) {
    endIndex++
    startIndex++
    render(
      domSelectors.movieCardsContainer,
      makeMovieCards(makeMovieSlice(startIndex, endIndex))
    )
    renderButtons()
  }
}

function decrementIndex() {
  if (startIndex > 0) {
    endIndex--
    startIndex--
    render(
      domSelectors.movieCardsContainer,
      makeMovieCards(makeMovieSlice(startIndex, endIndex))
    )
    renderButtons()
  }
}

renderButtons()

document
  .querySelector('.movie-carousel_move-left')
  .addEventListener('click', decrementIndex)

document
  .querySelector('.movie-carousel_move-right')
  .addEventListener('click', incrementIndex)
