

// CARS POP-UP

const carImage = document.getElementById("carImage");
const popupContent = document.getElementById("popupContent");
const closeButton = document.getElementById("closeButton");

carImage.addEventListener("click", () => {
    popupContent.style.display = "block";
});

closeButton.addEventListener("click", () => {
    popupContent.style.display = "none";
});

//