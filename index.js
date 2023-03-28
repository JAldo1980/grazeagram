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
            <img src="${post.post}" class="main-feed-img" alt="" id="${post.id}"/>
        </div>
        <div class="main-feed-share-icons">
            <img src="images/like.png" alt="like-icon" class="like-icon" data-like="${post.id}"/>
            <img src="images/comment.png" alt="comment-icon" class="comment-icon"data-comment="${post.id}"/>
            <img src="images/share.png" alt="share-icon" class="share-icon" data-share="${post.id}"/>
        </div>
        <div class="main-feed-like-count">
            <p><strong>${post.likes} likes</strong></p>
            <p><strong>${post.username} </strong>${post.comment}</p>
        </div>
</div> 
    `;

  document.addEventListener("click", function (e) {
    console.log(e.target.dataset.id);
  });
});
