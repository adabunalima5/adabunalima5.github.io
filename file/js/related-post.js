var maxPosts = 15; // Jumlah maksimal postingan yang ingin ditampilkan

function injectStyles() {
  var style = document.createElement("style");
  style.innerHTML = `
    #related-posts {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 10px;
      margin: 0;
      padding: 0;
    }
    .related-post {
      background-color: #ffffff;
      border: 1px solid #000000;
      overflow: hidden;
      border-radius: 5px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      text-align: center;
      margin: 0;
    }
    .related-post img {
      width: 100%;
      height: auto;
      object-fit: cover;
      animation: float 3s infinite;
    }
    .related-post h3 {
      font-size: 14px;
      margin: 5px 0;
      padding: 0;
      color: #333;
    }
    @keyframes float {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-5px);
      }
    }
  `;
  document.head.appendChild(style);
}

function getLabelsFromPost() {
  var labels = [];
  var labelElements = document.querySelectorAll('.post-labels a');
  labelElements.forEach(function (labelElement) {
    labels.push(labelElement.textContent.trim());
  });
  return labels;
}

function loadRelatedPosts() {
  injectStyles();
  var labels = getLabelsFromPost();
  if (labels.length == 0) return;

  var relatedPosts = [];
  var feedUrlBase = '/feeds/posts/default/-/';
  labels.forEach(function (label) {
    var feedUrl = feedUrlBase + encodeURIComponent(label) + '?max-results=' + maxPosts;
    var script = document.createElement('script');
    script.src = feedUrl + '&alt=json-in-script&callback=displayRelatedPosts';
    document.body.appendChild(script);
  });
}

var allRelatedPosts = [];

function displayRelatedPosts(response) {
  if (response.feed.entry) {
    var entries = response.feed.entry;
    for (var i = 0; i < entries.length; i++) {
      var entry = entries[i];
      var title = entry.title.$t;
      var link = entry.link.find((l) => l.rel == 'alternate').href;
      var imageUrl = '';
      if (entry.media$thumbnail) {
        imageUrl = entry.media$thumbnail.url.replace(/s72-c/, 'w400-h300');
      } else if (entry.content && entry.content.$t) {
        var imgMatch = entry.content.$t.match(/<img.*?src="(.*?)"/);
        if (imgMatch) {
          imageUrl = imgMatch[1];
        }
      }
      allRelatedPosts.push({ title: title, link: link, imageUrl: imageUrl });
    }
  }
  if (allRelatedPosts.length > 0) {
    displayAllPosts();
  }
}

function displayAllPosts() {
  var container = document.getElementById('related-posts');
  container.innerHTML = '';
  allRelatedPosts.forEach(function (post) {
    var postHTML = `
      <div class="related-post">
        <a href="${post.link}" title="${post.title}">
          ${post.imageUrl ? `<img src="${post.imageUrl}" alt="${post.title}" class="related-post-image"/>` : ''}
          <h3 class="related-post-title">${post.title}</h3>
        </a>
      </div>
    `;
    container.innerHTML += postHTML;
  });
  removeDuplicates();
}

function removeDuplicates() {
  var seen = {};
  var posts = document.querySelectorAll('.related-post a');
  posts.forEach(function (post) {
    var link = post.getAttribute('href');
    if (seen[link]) {
      post.parentElement.remove();
    } else {
      seen[link] = true;
    }
  });
}

document.addEventListener('DOMContentLoaded', loadRelatedPosts);
