import { posts } from "./feed-data.js";

// ensure that the HTML is fully loaded before trying to render the feed.
document.addEventListener("DOMContentLoaded", function () {
  render();
});

// event listener

document.addEventListener("click", function (e) {
  if (e.target.dataset.like) {
    handleLikeClick(e.target.dataset.like);
  }
});

// handle click function
function handleLikeClick(postId) {
  const targetPostObject = posts.filter(function (post) {
    return post.uuid === postId;
  })[0];

  if (targetPostObject.isLiked) {
    targetPostObject.likes--;
    targetPostObject.isLiked = false;
  } else {
    targetPostObject.likes++;
    targetPostObject.isLiked = true;
  }

  console.log(targetPostObject.likes);
  render();
}

// handle image click

document.addEventListener("click", function (e) {
  if (e.target.dataset.image) {
    handleImageClick(e.target.dataset.image);
  }
});

function handleImageClick(imageId) {
  const targetImageObject = posts.filter(function (post) {
    return post.uuid === imageId;
  })[0];

  if (targetImageObject.isLiked) {
    targetImageObject.likes--;
    targetImageObject.isLiked = false;
  } else {
    targetImageObject.likes++;
    targetImageObject.isLiked = true;
  }

  console.log(targetImageObject.likes);
  render();
}

// rendered HTML

function getFeedHtml() {
  let feedHtml = "";

  posts.forEach(function (post) {
    // liked function
    let likeIconClass = "";
    if (post.isLiked) {
      likeIconClass = "liked";
    }

    feedHtml += `
            <div class="feed-box">
                <div class="main-feed-header">
                        <img src="${post.avatar}" class="main-feed-avatar" alt="contributor-avatar" />
                            <div class="main-feed-text">
                                <h3>${post.name}</h3>
                                <p>${post.location}</p>
                            </div>
                    </div>
                    <div class="main-feed-img-box">
                        <img src="${post.post.url}" class="main-feed-img ${likeIconClass}" alt="" data-image="${post.uuid}"/>
                    </div>
                    <div class="main-feed-share-icons">
            
                        <i class="fa-solid fa-heart ${likeIconClass}" data-like="${post.uuid}"></i>
                     
                        <i class="fa-regular fa-comment fa-flip-horizontal comment-icon" data-comment="${post.uuid}"></i>
                   
                        <i class="fa-regular fa-paper-plane share-icon"   data-share="${post.uuid}"></i>
            
                    </div>
                    <div class="main-feed-like-count">
                        <p><strong>${post.likes} likes</strong></p>
                        <p><strong>${post.username} </strong>${post.comment}</p>
                    </div>
            </div> 
                `;
  });
  return feedHtml;
}

function render() {
  document.getElementById("feedContainer").innerHTML = getFeedHtml();
}
