const BASE_URL = 'https://api.themoviedb.org/3';
const POPULAR_URL = '/discover/movie?sort_by=popularity.desc'
const API_KEY = 'api_key=3319b246899a2434d24982e19cda364e'
const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'
const FINAL_URL = BASE_URL + POPULAR_URL + '&' + API_KEY
var onlyNeededData;
fetch(FINAL_URL).then(response => response.json())
.then(data => {
    onlyNeededData = data.results;
    // console.log("Raviteja");
    listOfMovies(onlyNeededData);
    // const res = data.results;
    // console.log(original_title,overview,poster_path,vote_average)

}
);
//searching movies from input
document.getElementById('home-button').addEventListener('click',() => {
    document.getElementById('movie-card').innerHTML = ``;
    listOfMovies(onlyNeededData);
    // alert("ravi")
    console.log(onlyNeededData);
})
document.getElementById('button-addon2').addEventListener('click',() =>{
    const theMovieToBeSearched = (document.getElementById('search-bar').value);
    fetch(`https://api.themoviedb.org/3/search/movie?${API_KEY}&query=${theMovieToBeSearched}`)
    .then(response => response.json())
    .then(data => {
        arrayOfMovies = data.results;
        document.getElementById('movie-card').innerHTML = ``;
        listOfMovies(arrayOfMovies);

    });
})

    function listOfMovies(movies){
        for(let i =0;i<movies.length;i++){
            const {original_title,overview,poster_path,vote_average} = movies[i];
            // console.log(overview);
            const post_path = IMG_BASE_URL+poster_path;
            // console.log(post_path)
            const a = document.createElement('p');
            a.style.border="2px solid black";
            a.style.boxSizing ="border-box";
            a.style.color = "#ecf0f1";
            a.style.backgroundColor="#2c3e50";
            a.style.borderRadius = "25px";
            a.style.boxShadow = "6px 6px 4px #57606f"
            a.innerHTML = `
            <img src= '${post_path}' style="width:100%;height:400px;object-fit:content;border-top-left-radius:25px;border-top-right-radius:25px;"/>
            <h4 style="color:#fa8231;margin:20px 20px;">${original_title}</h4>
            <p style="margin:20px 20px;">${vote_average}/10</p>
            <p style="margin:20px 20px;">${overview}</p>
            
            
            `;
            // consle.log(a)
            document.getElementById('movie-card').appendChild(a);
        }
    }
    