import { posts } from "./feed-data.js";

const feedContainer = document.getElementById("feedContainer");

posts.forEach(function (post) {
  feedContainer.innerHTML += `
<div class="feed-box">
    <div class="main-feed-header">
            <img src="${post.avatar}" class="main-feed-avatar" alt="contributor-avatar" />
                <div class="main-feed-text">
                    <h3>${post.name}</h3>
                    <p>${post.location}</p>
                </div>
        </div>
        <div class="main-feed-img-box">
            <img src="${post.post}" class="main-feed-img" alt="" />
        </div>
        <div class="main-feed-share-icons">
            <img src="images/like.png" alt="" />
            <img src="images/comment.png" alt="" />
            <img src="images/share.png" alt="" />
        </div>
        <div class="main-feed-like-count">
            <p><strong>${post.likes} likes</strong></p>
            <p><strong>${post.username} </strong>${post.comment}</p>
        </div>
</div> 
    `;
});
