
export function getURLForPage(pageNumber) {
  return `https://api.themoviedb.org/3/trending/movie/week?page=${pageNumber}&api_key=faca1f4a590a985c4ad0f1ece4f4ea1f`;
}

export function getImageURL(posterPath) {
  return 'https://image.tmdb.org/t/p/w400' + posterPath;
}
