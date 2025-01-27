// Create header dynamically
const headerHTML = `
<header id="header" style="position: fixed; top: 0; left: 0; width: 100%; background-color: orange; z-index: 999; transition: top 0.3s ease; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
  <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 15px;">
    <button id="menu-toggle" style="background-color: transparent; border: none; cursor: pointer; padding: 5px;">
      <div style="width: 25px; height: 3px; background-color: white; margin: 4px auto; transition: all 0.3s;"></div>
      <div style="width: 25px; height: 3px; background-color: white; margin: 4px auto; transition: all 0.3s;"></div>
      <div style="width: 25px; height: 3px; background-color: white; margin: 4px auto; transition: all 0.3s;"></div>
    </button>
    <h1 style="font-size: 22px; margin: 0; color: white; text-align: center; flex: 1;"><data:blog.title/>/h1>
    <button id="search-toggle" style="background-color: transparent; border: none; cursor: pointer; padding: 5px;">
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="20px" height="20px">
        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zM9.5 14c-2.48 0-4.5-2.02-4.5-4.5S7.02 5 9.5 5 14 7.02 14 9.5 11.98 14 9.5 14z"/>
      </svg>
    </button>
  </div>
  <nav id="menu" style="display: none; position: absolute; top: 50px; left: 0; width: 100%; background-color: white; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); padding: 10px;">
    <ul style="list-style: none; margin: 0; padding: 0;">
      <li><a href="/" style="display: block; padding: 10px; text-decoration: none; color: black;">Home</a></li>
      <li><a href="/p/sitemap.html" style="display: block; padding: 10px; text-decoration: none; color: black;">Sitemap</a></li>
      <li><a href="/p/privacy-policy.html" style="display: block; padding: 10px; text-decoration: none; color: black;">Privacy Policy</a></li>
      <li><a href="/p/terms-and-conditions.html" style="display: block; padding: 10px; text-decoration: none; color: black;">Terms and Conditions</a></li>
    </ul>
  </nav>
  <div id="search-box" style="display: none; position: absolute; top: 50px; right: 10px; background-color: white; padding: 5px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); border-radius: 5px; width: calc(100% - 20px); max-width: 400px;">
    <form action="/search" method="get" target="_top" style="display: flex; align-items: center;">
      <input type="text" name="q" placeholder="Search this blog..." style="flex: 1; padding: 8px 10px; border: 1px solid #ddd; border-radius: 5px 0 0 5px; outline: none; font-size: 14px;"/>
      <button type="submit" style="background-color: orange; color: white; border: none; padding: 8px 15px; font-size: 14px; border-radius: 0 5px 5px 0; cursor: pointer;">🔍</button>
    </form>
  </div>
</header>
`;

// Append the header to the body
document.body.insertAdjacentHTML('afterbegin', headerHTML);

// Menu toggle functionality
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
menuToggle.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

// Search toggle functionality
const searchToggle = document.getElementById('search-toggle');
const searchBox = document.getElementById('search-box');
searchToggle.addEventListener('click', () => {
  searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
});

// Hide header on scroll down, show on scroll up
let lastScroll = 0;
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll) {
    header.style.top = '-70px';
  } else {
    header.style.top = '0';
  }
  lastScroll = currentScroll;
});
