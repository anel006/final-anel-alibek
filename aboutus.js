        let lang = 'ru';

        function toggleLanguage() {
            const elements = document.querySelectorAll('[data-lang-ru], [data-lang-en]');
            elements.forEach(element => {
                if (lang === 'ru') {
                    element.textContent = element.getAttribute('data-lang-en');
                } else {
                    element.textContent = element.getAttribute('data-lang-ru');
                }
            });
            lang = lang === 'ru' ? 'en' : 'ru';
        }

        const slides = document.querySelectorAll('.carousel-inner > div');
        const totalSlides = slides.length;
        let currentSlide = 0;

        showSlide(currentSlide);

        function showSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.display = 'block';
                } else {
                    slide.style.display = 'none';
                }
            });
        }

        document.getElementById('carousel-1').addEventListener('change', () => {
            currentSlide = 0;
            showSlide(currentSlide);
        });

        document.getElementById('carousel-2').addEventListener('change', () => {
            currentSlide = 1;
            showSlide(currentSlide);
        });

        document.querySelector('.left').addEventListener('click', () => {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            showSlide(currentSlide);
        });

        document.querySelector('.right').addEventListener('click', () => {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        });

        function toggleHiddenText(textNumber) {
            const hiddenText = document.querySelector(`.hidden-text-${textNumber}`);
            hiddenText.style.display = hiddenText.style.display === 'block' ? 'none' : 'block';
        }