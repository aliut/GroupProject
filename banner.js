
        document.addEventListener("DOMContentLoaded", function() {
            let prevScrollPos = window.pageYOffset;
            const header = document.querySelector("header");
    
            window.onscroll = function() {
                let currentScrollPos = window.pageYOffset;
    
                if (prevScrollPos > currentScrollPos) {
                    header.classList.remove("scrolled");
                } else {
                    header.classList.add("scrolled");
                }
    
                prevScrollPos = currentScrollPos;
            };
        });
