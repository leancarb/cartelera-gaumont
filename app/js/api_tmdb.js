// API Key
// 2aba48e8fff659f59ea7334edf514f41

// API Read Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWJhNDhlOGZmZjY1OWY1OWVhNzMzNGVkZjUxNGY0MSIsInN1YiI6IjY0ZWJlZDlhYzYxM2NlMDBjOWYyY2RmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tDED7SESU6IjT9Q2xAWfdR15ypHxSfGpPtxQTK9p1j0

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWJhNDhlOGZmZjY1OWY1OWVhNzMzNGVkZjUxNGY0MSIsInN1YiI6IjY0ZWJlZDlhYzYxM2NlMDBjOWYyY2RmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tDED7SESU6IjT9Q2xAWfdR15ypHxSfGpPtxQTK9p1j0",
  },
};

fetch("https://api.themoviedb.org/3/authentication", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

// https://developer.themoviedb.org/reference/movie-images
