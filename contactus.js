        document.getElementById('contactForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const address = document.getElementById('address').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const course = document.getElementById('course').value;
            const payment = document.getElementById('payment').value;
            const message = document.getElementById('message').value;
            const status = document.getElementById('formStatus');
            
            if (firstName && lastName && address && phone && email && course && payment && message) {
                status.textContent = 'Thank you for your message, ' + firstName + ' ' + lastName + '! We will get back to you soon.';
                status.style.color = 'green';
                document.getElementById('sendSound').play();
                document.getElementById('contactForm').classList.add('sent');
            } else {
                status.textContent = 'Please fill out all fields.';
                status.style.color = 'red';
            }
            document.getElementById('contactForm').reset();
        });