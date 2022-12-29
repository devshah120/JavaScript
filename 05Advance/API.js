fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("Joke: ", data.value);
  });
//.catch();
