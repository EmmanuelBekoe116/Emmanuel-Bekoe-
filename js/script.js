 // JavaScript to handle click events on category links
document.addEventListener("DOMContentLoaded", function () {
    const categoryList = document.getElementById("category-list");
    categoryList.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
            e.preventDefault(); // Prevent the default link behavior
            const category = e.target.textContent;
            window.location.href = `category.html?category=${encodeURIComponent(category)}`;
        }
    });
});
