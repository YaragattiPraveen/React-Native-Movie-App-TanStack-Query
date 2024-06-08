const getDataTopRatedMovies = async () => {
    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MmQ4NDJmYWJjNWE4YzVmNmVlYWU0ZmUzNTYyOTRmYSIsInN1YiI6IjY2NjNmOWViNTJmNWE3NjkxYjkxNzUyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PPJjWhBTM00Y-CiZJtJsp0VVSg6yb9AHZXcmtkSWDAY'
        }
    };

    const res = await fetch(url, options)

    if(!res?.ok) {
        throw new Error("Failed to fetch the movies data")
    }
    const data = await res.json()
    return data?.results

}

export default getDataTopRatedMovies