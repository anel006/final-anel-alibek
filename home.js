        function switchLanguage() {
            var languageSwitch = document.getElementById("language-switch");
            var greeting = document.getElementById("greeting");
            var navHome = document.getElementById("nav-home");
            var navAbout = document.getElementById("nav-about");
            var navServices = document.getElementById("nav-services");
            var navQuiz = document.getElementById("nav-quiz");
            var navContact = document.getElementById("nav-contact");
            var footerText = document.getElementById("footer-text");

            if (languageSwitch.innerHTML === "АНГ / РУС") {
                languageSwitch.innerHTML = "ENG / RUS";
                greeting.innerText = "Welcome to English with Vampire Diaries! Learn English using your favorite moments from the series.";
                navHome.href = "index.html";
                navHome.innerText = "Home";
                navAbout.href = "about.html";
                navAbout.innerText = "About Us";
                navServices.href = "#Services";
                navServices.innerText = "Services";
                navQuiz.href = "#Quiz";
                navQuiz.innerText = "Quiz";
                navContact.href = "#Contact";
                navContact.innerText = "Contact Us";
                footerText.innerText = "© 2024 English with Vampire Diaries. All rights reserved.";
            } else {
                languageSwitch.innerHTML = "ENG / RUS";
                greeting.innerText = "Добро пожаловать на английский с 'Дневниками вампира'! Изучайте английский, используя любимые моменты из сериала 'Дневники вампира'!";
                navHome.href = "ол.html";
                navHome.innerText = "Главная";
                navAbout.href = "2.html";
                navAbout.innerText = "О нас";
                navServices.href = "#Новости";
                navServices.innerText = "Услуги";
                navQuiz.href = "#Новости";
                navQuiz.innerText = "Викторина";
                navContact.href = "#Новости";
                navContact.innerText = "Контакты";
                footerText.innerText = "© 2024 Английский с Дневниками Вампира. Все права защищены.";
            }
        }