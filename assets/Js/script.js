document.addEventListener("DOMContentLoaded", function () {
    var loadingBar = document.getElementById("loadingBar");
    
    var progress = 0;
    var interval = setInterval(function () {
        if (progress >= 100) {
            clearInterval(interval);
            // Optional: Hide or remove the loading bar once the page is fully loaded
            document.querySelector(".loading-bar-container").style.display = "none";
        } else {
            progress += 1;
            loadingBar.style.width = progress + "%";
        }
    }, /* Set the interval duration in milliseconds */);
});
