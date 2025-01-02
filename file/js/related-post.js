var maxPosts = 5; // Jumlah maksimal postingan yang ingin ditampilkan

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
    }
    .related-post img {
      width: 100%;
      height: auto;
      object-fit: cover;
      animation: float 6s ease-in-out infinite;
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

function loadRelatedPosts() {
  injectStyles();
  var feedUrl = `/feeds/posts/default?alt=json-in-script&max-results=${maxPosts}&callback=displayRelatedPosts`;
  var script = document.createElement("script");
  script.src = feedUrl;
  document.body.appendChild(script);
}

function displayRelatedPosts(response) {
  if (response.feed.entry) {
    var container = document.getElementById("related-posts");
    container.innerHTML = "";

    response.feed.entry.forEach(function (entry) {
      var title = entry.title.$t;
      var link = entry.link.find((l) => l.rel === "alternate").href;
      var imageUrl = "";

      if (entry.media$thumbnail) {
        imageUrl = entry.media$thumbnail.url.replace(/s72-c/, "w400-h300");
      } else if (entry.content && entry.content.$t) {
        var imgMatch = entry.content.$t.match(/<img.*?src="(.*?)"/);
        if (imgMatch) imageUrl = imgMatch[1];
      }

      var postHTML = `
        <div class="related-post">
          <a href="${link}" title="${title}">
            ${imageUrl ? `<img src="${imageUrl}" alt="${title}">` : ""}
            <h3>${title}</h3>
          </a>
        </div>
      `;
      container.innerHTML += postHTML;
    });
  }
}

document.addEventListener("DOMContentLoaded", loadRelatedPosts);
