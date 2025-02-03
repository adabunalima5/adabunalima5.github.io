(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-CZ1JW50EX7");

  (function (m, e, t, r, i, k, a) {
    m[i] =
      m[i] ||
      function () {
        (m[i].a = m[i].a || []).push(arguments);
      };
    m[i].l = 1 * new Date();
    for (var j = 0; j < document.scripts.length; j++) {
      if (document.scripts[j].src === r) {
        return;
      }
    }
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    a.parentNode.insertBefore(k, a);
  })(
    window,
    document,
    "script",
    "https://mc.yandex.ru/metrika/tag.js",
    "ym"
  );

  ym(99489251, "init", {
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
  });

  const header = document.getElementById("header");
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");
  const searchToggle = document.getElementById("search-toggle");
  const searchBox = document.getElementById("search-box");

  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
      if (currentScroll > 50) {
        header.style.top = "-100px";
      }
    } else {
      header.style.top = "0";
    }
    lastScroll = currentScroll;
  });

  menuToggle.addEventListener("click", function () {
    const isMenuVisible = menu.style.display === "block";
    menu.style.display = isMenuVisible ? "none" : "block";
  });

  searchToggle.addEventListener("click", function () {
    const isSearchVisible = searchBox.style.display === "block";
    searchBox.style.display = isSearchVisible ? "none" : "block";
  });

  document.addEventListener("click", function (event) {
    const isClickInsideMenu =
      menu.contains(event.target) || menuToggle.contains(event.target);
    const isClickInsideSearch =
      searchBox.contains(event.target) || searchToggle.contains(event.target);

    if (!isClickInsideMenu) {
      menu.style.display = "none";
    }

    if (!isClickInsideSearch) {
      searchBox.style.display = "none";
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const pageTitle = document.title;
    const images = document.querySelectorAll("img");
    images.forEach(function (image) {
      image.setAttribute("alt", pageTitle);
      image.setAttribute("loading", "lazy");
    });
  });

  const uri = window.location.toString();
  if (uri.indexOf("?m=1") > 0) {
    const cleanUri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, cleanUri);
  }

  const protocol = window.location.protocol.replace(/:/g, "");
  if (protocol === "http") {
    const url = window.location.href.replace("http", "https");
    window.location.replace(url);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const archiveWidget = document.getElementById("BlogArchive1");
    if (archiveWidget) {
      const toggleButton = document.createElement("button");
      toggleButton.textContent = "Archive";
      toggleButton.classList.add("toggle-button");
      const widgetContent = archiveWidget.querySelector(".widget-content");
      if (widgetContent) {
        archiveWidget.insertBefore(toggleButton, widgetContent);
        toggleButton.addEventListener("click", function () {
          widgetContent.classList.toggle("visible");
          toggleButton.textContent = widgetContent.classList.contains("visible")
            ? "Archive"
            : "Archive";
          if (widgetContent.classList.contains("visible")) lazyLoadContent();
        });
      }
    }

    function lazyLoadContent() {
      const lazyElements = document.querySelectorAll(".lazy");
      const observer = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("loaded");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      lazyElements.forEach(function (element) {
        observer.observe(element);
      });
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const labelWidget = document.getElementById("Label1");
    if (labelWidget) {
      const widgetContent = labelWidget.querySelector(".widget-content");
      if (widgetContent) {
        const toggleButton = document.createElement("button");
        toggleButton.textContent = "Labels";
        toggleButton.classList.add("toggle-button");
        labelWidget.insertBefore(toggleButton, widgetContent);
        toggleButton.addEventListener("click", function () {
          widgetContent.classList.toggle("visible");
          toggleButton.textContent = widgetContent.classList.contains("visible")
            ? "Labels"
            : "Labels";
          if (widgetContent.classList.contains("visible")) {
            lazyLoadContent(widgetContent);
          }
        });
      }
    }

    function lazyLoadContent(widgetContent) {
      const lazyElements = widgetContent.querySelectorAll(".lazy");
      const observer = new IntersectionObserver(
        function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("loaded");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      lazyElements.forEach(function (element) {
        observer.observe(element);
      });
    }
  });
})();

