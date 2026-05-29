export async function movieApi(searchMovie) {
  const response = await fetch(
    ` https://www.omdbapi.com/?apikey=9f981a86&s=${searchMovie}`,
    {
      method: "GET",
    },
  );
  return response.json();
}
