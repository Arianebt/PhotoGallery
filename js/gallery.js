// Define an array of gallery items
const galleryItems = [
  {
    title: "Pink Flowers",
    description: "These beautiful pink flowers are known as chrysanthemums. Chrysanthemums are popular flowers in many cultures and are associated with various meanings, including love, happiness, and longevity.",
    imageLarge: "flowers-pink-large.jpg",
    imageSmall: "flowers-pink-small.jpg"
  },
  {
    title: "Purple Flowers",
    description: "Purple flowers often symbolize enchantment, creativity, and royalty. They can evoke a sense of mystery and elegance.",
    imageLarge: "flowers-purple-large.jpg",
    imageSmall: "flowers-purple-small.jpg"
  },
  {
    title: "Red Flowers",
    description: "Red flowers are often associated with passion, love, and desire. They can convey strong emotions and are often used to represent deep affection and romance.",
    imageLarge: "flowers-red-large.jpg",
    imageSmall: "flowers-red-small.jpg"
  },
  {
    title: "White Flowers",
    description: "White flowers symbolize purity, innocence, and spirituality. They are often used in weddings and represent new beginnings and purity of the soul.",
    imageLarge: "flowers-white-large.jpg",
    imageSmall: "flowers-white-small.jpg"
  },
  {
    title: "Yellow Flowers",
    description: "These vibrant yellow flowers are sunflowers. Sunflowers are known for their large size and their ability to turn towards the sun. They symbolize adoration, loyalty, and vitality.",
    imageLarge: "flowers-yellow-large.jpg",
    imageSmall: "flowers-yellow-small.jpg"
  }
];


// Get references to HTML elements
const featuredImage = document.getElementById("featured-image");
const imageCaption = document.getElementById("image-caption");
const thumbnailList = document.getElementById("thumbnail-list");

// Dynamically build the thumbnail list from the gallery items array
galleryItems.forEach((item) => {
  const thumbnail = document.createElement("img");
  thumbnail.src = "images/" + item.imageSmall;
  thumbnail.alt = item.title;
  thumbnail.width = 240;
  thumbnail.height = 160;

  const listItem = document.createElement("li");
  listItem.appendChild(thumbnail);
  thumbnailList.appendChild(listItem);

  // Add a click event listener to each thumbnail
  thumbnail.addEventListener("click", () => {
    // Reset all thumbnails to inactive
    thumbnailList.querySelectorAll("img").forEach((img) => {
      img.classList.add("inactive");
    });

    // Set the selected thumbnail to active
    thumbnail.classList.remove("inactive");

    // Set the featured image and caption
    featuredImage.src = "images/" + item.imageLarge;
    imageCaption.innerHTML = "<strong>" + item.title + "</strong><br><br>" + item.description;
  });


  // Add a CSS class to inactive thumbnails
  thumbnail.classList.add("inactive");
});

// Add an active class to the first thumbnail
const firstThumbnail = thumbnailList.querySelector("li img");
if (firstThumbnail) {
  firstThumbnail.classList.remove("inactive");
}
