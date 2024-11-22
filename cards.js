// Fetch posts from the JSONPlaceholder API
const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postsContainer = document.getElementById("postsContainer");

fetch(API_URL)
  .then((response) => response.json())
  .then((posts) => {
    // Display posts as cards
    posts.forEach((post) => {
      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("h2");
      title.textContent = post.title;

      const body = document.createElement("p");
      body.textContent = post.body;

      card.appendChild(title);
      card.appendChild(body);

      postsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching posts:", error);
    postsContainer.innerHTML = "<p>Failed to load posts. Please try again later.</p>";
  });
