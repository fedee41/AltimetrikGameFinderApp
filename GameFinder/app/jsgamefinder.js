const url = "https://api.rawg.io/api/games?key=d26560450ced42a9be32fcb6d8b1103d";

var requestOptions = {
  method: "GET",
  headers: new Headers({ "Content-Type": "application/json" }),
  redirect: "follow",
};

fetch(url, requestOptions)
  .then(response => response.json())
  .then((result) => getGames(result))
  .catch((error) => console.log("error", error));

  function getGames(result) {
    console.log(result)
  };