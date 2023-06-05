document.addEventListener("DOMContentLoaded", function(){
    var navItems = document.querySelectorAll('.nav-item');

    window.showSection = function(id) {
        var sections = document.querySelectorAll('.section');
        sections.forEach(function(section) {
            section.style.display = 'none';
        });

        navItems.forEach(function(navItem) {
            navItem.querySelector('.nav-link').classList.remove('active');
        });

        document.getElementById(id).style.display = 'block';
        document.querySelector(`[onclick="showSection('${id}')"]`).classList.add('active');
    }
    

    showSection('profile');
});

