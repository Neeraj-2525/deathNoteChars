//  ************* TO TOGGLE THE HAMBURGER AND CROSS ICON ***************

function toggleIcons() {
    const openIcon = document.getElementById("open-icon");
    const collapseIcon = document.getElementById("collapse-icon");

    openIcon.style.display = (openIcon.style.display === "none") ? "inline-block" : "none";
    collapseIcon.style.display = (collapseIcon.style.display === "none") ? "inline-block" : "none";
}



// ***************** Open DropDown ***************** 

function openDropDown() {
    document.getElementById("onClickNavId").classList.toggle("on-click-nav-collapse-show");
    
}

function closeDropDown() {
    document.getElementById("onClickNavId").classList.toggle("on-click-nav-collapse-show");
}