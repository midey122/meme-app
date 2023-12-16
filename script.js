let meme = document.getElementById("meme");
let title = document.getElementById("title");
let getMemeBtn = document.getElementById("get-meme-btn");

let url = " https://meme-api.com/gimme/";
// array to subreddits of your choice

let subreddits = ["catmemes", "wholesomemes", "dogmemes", "me_irl"];
//  function to get Random meme
let getMeme = () => {
  // choose a random subreddit from the subreddit array
  let randomSubreddit =
    subreddits[Math.floor(Math.random() * subreddits.length)];
  // fetch data from the api
  fetch(url + randomSubreddit)
    .then((resp) => resp.json())
    .then((data) => {
        let memeImg = new Image();
        // Display meme image and tittle only aafter the image loads
        memeImg.onload = () => {
            meme.src = data.url;
            title.innerHTML = data.title;
        };
        memeImg.src = data.url;
    });
};

// call the getmeme() on button click and on  window load
getMemeBtn.addEventListener("click", getMeme);
window.addEventListener("load", getMeme);
