      document.addEventListener('DOMContentLoaded', function () {
            const detailsButton = document.getElementById('detailsButton');
            const details = document.getElementById('details');
            const feedbackInput = document.getElementById('feedback');
            const output = document.getElementById('output');
            const description = document.getElementById('description');

            detailsButton.addEventListener('click', function () {
                details.classList.toggle('hidden');
            });

            feedbackInput.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    output.textContent = `Thanks for your feedback: "${feedbackInput.value}"`;
                    feedbackInput.value = '';
                }
            });

            description.addEventListener('mouseover', function () {
                description.style.color = '#660000';
            });

            description.addEventListener('mouseout', function () {
                description.style.color = '';
            });
        });