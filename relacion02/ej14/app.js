function toggleMenu(menuId) {
    let allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(submenu => {
        if (submenu.id !== menuId) {
            submenu.style.display = 'none';
        }
    });

    let menu = document.getElementById(menuId);
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
