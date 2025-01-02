var maxPosts = 15; // Jumlah maksimal postingan yang ingin ditampilkan

function loadRelatedPosts() {
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
