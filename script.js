function toggleMenu() {
    const navList = document.querySelector('.nav-list');
    const navEnding = document.querySelector('.nav-ending');

    // Toggle the "show" class on both nav lists
    navList.classList.toggle('show');
    navEnding.classList.toggle('show');
}
