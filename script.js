function changeSection(sectionId) {
    window.location.hash = sectionId;
    showActiveMenuItem(sectionId);
  }
  
  function showActiveMenuItem(sectionId) {
    const menuItems = document.querySelectorAll('.nav-links a');
    menuItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === sectionId) {
        item.classList.add('active');
      }
    });
  }
  
  // Function to toggle the menu
  function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }



