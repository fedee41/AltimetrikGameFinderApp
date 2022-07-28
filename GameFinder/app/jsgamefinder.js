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

  //Get the 20 array of games
  function getGames(result) {
    let i = 0;
    for (i; i < result.results.length; i++) {
      renderGames(result.results[i])
    }
  };

  var ContentofGames = "";
  function renderGames(onegame) {
    ContentofGames += `<button class="section-box"> 
    <img src="${onegame.background_image}" alt="This is the cover image of the game called ${onegame.name}">
    <div class="box-text">
      <div class="box-title">
        <p>${onegame.name}</p>
        <p class="fav">#${onegame.rating_top}</p>
      </div>
      <div class="box-date">
          <div class="box-aux">
            <div class="box-aux">
            <p class="date">Realease date:</p>
            <p>${Change_date_format(onegame.released)}</p>
            </div>
            <div class="box-plataforms">
              <svg id="svg_pc" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20 9.16667H9.16667V1.53647L20 0V9.16667ZM8.33333 1.66667V9.16667H0V2.77865L8.33333 1.66667ZM8.33333 10H0V17.0992L8.33333 18.3333V10ZM9.16667 18.3262V10H20V20L9.16667 18.3262Z" fill="white"/>
            </svg>
          </div>
          </div>
          <div class="box-genres">
            <p class="date">Genres:</p>
            <p>${getGenres(onegame.genres)}</p>
          </div>
      </div>
    </div>`
    var includegame = document.getElementById("includegame");
    includegame.innerHTML = ContentofGames;
    Get_game_platform(onegame.platforms);
  };

  //Auxilar function to get genres and format well.
  function getGenres(genres) {
    var genresNames = "";
    let index = 0;
    for (index; index < genres.length; index++) {
      //console.log(index);
      //console.log(genres[index].name);
     // console.log(genres.length);    
      if ((index + 1) < genres.length) {
        genresNames += `${genres[index].name}, `;
      }
      else{
        genresNames += `${genres[index].name}`;
      }
    }
    return genresNames;
  };

  function Change_date_format(date){
    var datadate = Object.values(date);
    let month = "Not a month ";
    //console.log(datadate);
    if (datadate[5] == 1){ //if it is 1 (options 10=October 11=November 12=December)
      switch (datadate[6]) {
        case "0":
          month = "October ";
          break;
        case "1":
          month = "November ";
          break;
        case "2":
          month = "December ";
      }
    }
    else{ //if it is 0 (options 1=January 2=February 3=March 4=April 5=May 6=June 7=July 8=August 9=September)
      switch (datadate[6]){
        case "1":
          month = "January ";
          break;
        case "2":
          month = "February ";
          break;
        case "3":
          month = "March ";
          break;
        case "4":
          month = "April ";
          break;
        case "5":
          month = "May ";
          break;
        case "6":
          month = "June ";
          break;
        case "7":
          month = "July ";
          break;
        case "8":
          month = "August ";
          break;
        case "9":
          month = "September ";
      }
    }
    //console.log(month);
    date_format = month + datadate[8] + datadate[9] + "," + datadate[0] + datadate[1] + datadate[2] + datadate[3];
    return date_format;
  };

 
  //Get the type of platform and insert the icon
  function Get_game_platform(platforms){
    console.log(svgpc);
    //console.log(platforms);
    let index = 0;
    for (index; index < platforms.length; index++) { 
      console.log(platforms[index].platform);
      switch (platforms[index].platform.slug) {
        case "pc":
            console.log("entre a pc");
            
          break;
      }
    }
  };