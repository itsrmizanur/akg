let isClicked = 0;
function toggleBtn() {
    isClicked = !isClicked;
    if (!isClicked) {
        document.getElementsByClassName("toggle-menu")[0].style.display =
            "none";
    } else {
        document.getElementsByClassName("toggle-menu")[0].style.display =
            "block";
    }
}
