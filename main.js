const API_URL = 'http://localhost:3000/movies/'

export async function getMovieData() {
  const data = await axios.get(API_URL).then((res) => {
    return res.data
  })
  return data
}
