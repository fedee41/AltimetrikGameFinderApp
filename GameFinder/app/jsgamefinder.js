
name = []:
backfroundimg = [];


fetch('https://api.rawg.io/api/games?key=d26560450ced42a9be32fcb6d8b1103d')
.then(response => response.json())
.then(json => {
  console.log(json)
  let i=0;
  while (i<json.length) {
    name = json.results[i].name;
    backfroundimg = json.results[i].background_image;
    console.log( name)
  }

    
    }
)

function laoddata(){

}