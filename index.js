import { posts } from "./feed-data";

const feedContainer = document.getElementById("feedContainer");

posts.forEach(function (post) {
  feedContainer.innerHTML += `
<div class="feed-box">
    <div class="main-feed-header">
    <img src="" class="main-feed-avatar" alt="contributor-avatar" />
    <div class="main-feed-text">
        <h3>Funny name here</h3>
        <p>Manchester, United Kingdom</p>
    </div>
    </div>
    <div class="main-feed-img-box">
    <img src="" class="main-feed-img" alt="" />
    </div>
    <div class="main-feed-share-icons">
    <img src="" alt="" />
    <img src="" alt="" />
    <img src="" alt="" />
    </div>
    <div class="main-feed-like-count">
    <p>21, 492 likes</p>
    <p><strong>Shawn007 </strong>Uwe must be joking?!</p>
    </div>
</div> 
    `;
});
