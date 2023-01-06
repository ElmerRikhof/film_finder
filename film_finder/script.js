// function to add a list of movies in ul

const addMoviesToDom = function (movies) {
  const allMovies = document.getElementById("list");

  const listItems = movies.map((movie) => {
    let listItem = document.createElement("li");
    console.log(listItem);
    let image = document.createElement("img");
    image.src = movie.Poster;
    console.log(image);
    let link = document.createElement("a");
    link.href = "https://www.imdb.com/title/" + movie.imdbID;
    link.target = "_blank";
    console.log(link);
    listItem.appendChild(link);
    link.appendChild(image);
    return listItem;
  });

  listItems.forEach((listItem) => {
    allMovies.appendChild(listItem);
  });
};

addMoviesToDom();
console.log(listItem);
