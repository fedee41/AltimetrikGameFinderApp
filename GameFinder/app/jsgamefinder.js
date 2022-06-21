
name = [];
backgroundimg = [];


fetch('https://api.rawg.io/api/games?key=d26560450ced42a9be32fcb6d8b1103d')
.then(response => response.json())
.then(data => {
  console.log(data.results.length)
  let i=0;
  while (i<data.results.length) {
    name[i] = data.results[i].name;
    backgroundimg[i] = data.results[i].background_image;
  }

    
    }
)

function loaddata(){

}