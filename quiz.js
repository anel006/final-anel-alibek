        document.addEventListener('DOMContentLoaded', function () {
            const submitQuiz = document.getElementById('submitQuiz');
            const result = document.getElementById('result');
            const quiz = document.getElementById('quiz');
            const languageButton = document.getElementById('languageButton');
            let isEnglish = true;

            submitQuiz.addEventListener('click', function () {
                let score = 0;
                const questions = quiz.getElementsByClassName('question');

                for (let i = 0; i < questions.length; i++) {
                    const question = questions[i];
                    const correctAnswers = question.getAttribute('data-correct').split(',');
                    const selectedAnswers = Array.from(question.querySelectorAll('input:checked')).map(input => input.value);
                    
                    if (correctAnswers.length === selectedAnswers.length && correctAnswers.every(val => selectedAnswers.includes(val))) {
                        score++;
                    }
                }

                result.textContent = `You answered ${score} out of 10 questions correctly.`;
                result.classList.remove('hidden');
            });

            languageButton.addEventListener('click', function () {
                const questions = quiz.getElementsByClassName('question');
                if (isEnglish) {
                    document.querySelector('h1').textContent = 'Викторина по Дневникам Вампира';
                    languageButton.textContent = 'Switch to English';
                    questions[0].querySelector('p').textContent = '1. ______ является главной женской героиней в Дневниках Вампира. У нее сложные отношения с двумя братьями, Стефаном и Дэймоном, которые оба вампиры.';
                    questions[0].querySelector('label:nth-of-type(1)').textContent = 'Елена';
                    questions[0].querySelector('label:nth-of-type(2)').textContent = 'Бонни';
                    questions[0].querySelector('label:nth-of-type(3)').textContent = 'Каролина';
                    questions[1].querySelector('p').textContent = '2. Стефан ______ влюбляется в Елену с первого взгляда, но их отношения сталкиваются с многочисленными трудностями, включая сверхъестественные угрозы и личные жертвы.';
                    questions[1].querySelector('label:nth-of-type(1)').textContent = 'влюбиться';
                    questions[1].querySelector('label:nth-of-type(2)').textContent = 'влюбляется';
                    questions[1].querySelector('label:nth-of-type(3)').textContent = 'влюбился';
                    questions[2].querySelector('p').textContent = '3. Мистик Фоллс - это город, где ______ происходят события Дневников Вампира, включая многочисленные сверхъестественные явления, которые бросают вызов жителям.';
                    questions[2].querySelector('label:nth-of-type(1)').textContent = 'в котором';
                    questions[2].querySelector('label:nth-of-type(2)').textContent = 'где';
                    questions[2].querySelector('label:nth-of-type(3)').textContent = 'все';
                    questions[3].querySelector('p').textContent = '4. Дэймон ______ Стефана, и его импульсивные действия часто приводят к конфликтам и хаосу среди их друзей и семьи.';
                    questions[3].querySelector('label:nth-of-type(1)').textContent = 'старше';
                    questions[3].querySelector('label:nth-of-type(2)').textContent = 'старший';
                    questions[3].querySelector('label:nth-of-type(3)').textContent = 'старый';
                    questions[4].querySelector('p').textContent = '5. У Елены есть ______ один брат, Джереми, который все больше вовлекается в сверхъестественные события в Мистик Фоллс.';
                    questions[4].querySelector('label:nth-of-type(1)').textContent = 'нет';
                    questions[4].querySelector('label:nth-of-type(2)').textContent = 'один';
                    questions[4].querySelector('label:nth-of-type(3)').textContent = 'много';
                    questions[5].querySelector('p').textContent = '6. Бонни ______ магию, чтобы защищать своих друзей от различных сверхъестественных угроз, часто ценой больших личных потерь.';
                    questions[5].querySelector('label:nth-of-type(1)').textContent = 'используя';
                    questions[5].querySelector('label:nth-of-type(2)').textContent = 'использует';
                    questions[5].querySelector('label:nth-of-type(3)').textContent = 'использовала';
                    questions[6].querySelector('p').textContent = '7. Клаус является одним из ______ оригинальных вампиров, известных как Оригиналы, которые являются самыми могущественными и древними вампирами.';
                    questions[6].querySelector('label:nth-of-type(1)').textContent = 'тех';
                    questions[6].querySelector('label:nth-of-type(2)').textContent = 'этих';
                    questions[6].querySelector('label:nth-of-type(3)').textContent = 'тех';
                    questions[7].querySelector('p').textContent = '8. ______ - это название бара, где они часто встречаются, чтобы обсудить свои планы и отдохнуть после борьбы с сверхъестественными событиями.';
                    questions[7].querySelector('label:nth-of-type(1)').textContent = 'Этот';
                    questions[7].querySelector('label:nth-of-type(2)').textContent = 'Мистик Гриль';
                    questions[7].querySelector('label:nth-of-type(3)').textContent = 'Дом Сальваторе';
                    questions[8].querySelector('p').textContent = '9. Елена ______ с моста в первом сезоне, что является ключевым моментом в сериале, влияющим на развитие ее персонажа.';
                    questions[8].querySelector('label:nth-of-type(1)').textContent = 'упала';
                    questions[8].querySelector('label:nth-of-type(2)').textContent = 'падает';
                    questions[8].querySelector('label:nth-of-type(3)').textContent = 'упавшая';
                    questions[9].querySelector('p').textContent = '10. Джереми является ______ младшим братом, который сталкивается с собственными проблемами и трансформациями на протяжении сериала.';
                    questions[9].querySelector('label:nth-of-type(1)').textContent = 'Елены';
                    questions[9].querySelector('label:nth-of-type(2)').textContent = 'Дэймона';
                    questions[9].querySelector('label:nth-of-type(3)').textContent = 'Елены';
                } else {
                    document.querySelector('h1').textContent = 'Vampire Diaries Quiz';
                    languageButton.textContent = 'Switch to Russian';
                    questions[0].querySelector('p').textContent = '1. ______ is the main female protagonist in The Vampire Diaries. She has a complicated relationship with two brothers, Stefan and Damon, who are both vampires.';
                    questions[0].querySelector('label:nth-of-type(1)').textContent = 'Elena';
                    questions[0].querySelector('label:nth-of-type(2)').textContent = 'Bonnie';
                    questions[0].querySelector('label:nth-of-type(3)').textContent = 'Caroline';
                    questions[1].querySelector('p').textContent = '2. Stefan ______ in love with Elena at first sight, but their relationship faces numerous challenges, including supernatural threats and personal sacrifices.';
                    questions[1].querySelector('label:nth-of-type(1)').textContent = 'fall';
                    questions[1].querySelector('label:nth-of-type(2)').textContent = 'falls';
                    questions[1].querySelector('label:nth-of-type(3)').textContent = 'fallen';
                    questions[2].querySelector('p').textContent = '3. Mystic Falls is the town where ______ the events of The Vampire Diaries take place, including numerous supernatural occurrences that challenge the residents.';
                    questions[2].querySelector('label:nth-of-type(1)').textContent = 'which';
                    questions[2].querySelector('label:nth-of-type(2)').textContent = 'that';
                    questions[2].querySelector('label:nth-of-type(3)').textContent = 'all';
                    questions[3].querySelector('p').textContent = '4. Damon is ______ than Stefan, and his impulsive actions often lead to conflict and chaos among their friends and family.';
                    questions[3].querySelector('label:nth-of-type(1)').textContent = 'older';
                    questions[3].querySelector('label:nth-of-type(2)').textContent = 'oldest';
                    questions[3].querySelector('label:nth-of-type(3)').textContent = 'old';
                    questions[4].querySelector('p').textContent = '5. Elena has ______ one brother, Jeremy, who becomes increasingly involved in the supernatural events in Mystic Falls.';
                    questions[4].querySelector('label:nth-of-type(1)').textContent = 'none';
                    questions[4].querySelector('label:nth-of-type(2)').textContent = 'one';
                    questions[4].querySelector('label:nth-of-type(3)').textContent = 'many';
                    questions[5].querySelector('p').textContent = '6. Bonnie ______ magic to protect her friends from various supernatural threats, often at great personal cost.';
                    questions[5].querySelector('label:nth-of-type(1)').textContent = 'using';
                    questions[5].querySelector('label:nth-of-type(2)').textContent = 'uses';
                    questions[5].querySelector('label:nth-of-type(3)').textContent = 'used';
                    questions[6].querySelector('p').textContent = '7. Klaus is one of ______ original vampires, known as the Originals, who are the most powerful and ancient vampires in existence.';
                    questions[6].querySelector('label:nth-of-type(1)').textContent = 'the';
                    questions[6].querySelector('label:nth-of-type(2)').textContent = 'these';
                    questions[6].querySelector('label:nth-of-type(3)').textContent = 'those';
                    questions[7].querySelector('p').textContent = '8. ______ is the name of the bar where they often meet to discuss their plans and unwind after dealing with supernatural events.';
                    questions[7].querySelector('label:nth-of-type(1)').textContent = 'That';
                    questions[7].querySelector('label:nth-of-type(2)').textContent = 'The Mystic Grill';
                    questions[7].querySelector('label:nth-of-type(3)').textContent = 'The Salvatore House';
                    questions[8].querySelector('p').textContent = '9. Elena ______ from a bridge in the first season, marking a pivotal moment in the series that impacts her character\'s journey.';
                    questions[8].querySelector('label:nth-of-type(1)').textContent = 'fell';
                    questions[8].querySelector('label:nth-of-type(2)').textContent = 'falls';
                    questions[8].querySelector('label:nth-of-type(3)').textContent = 'fallen';
                    questions[9].querySelector('p').textContent = '10. Jeremy is ______ younger brother who faces his own struggles and transformations throughout the series.';
                    questions[9].querySelector('label:nth-of-type(1)').textContent = 'Elena';
                    questions[9].querySelector('label:nth-of-type(2)').textContent = 'Damon';
                    questions[9].querySelector('label:nth-of-type(3)').textContent = 'Elena\'s';
                }

                isEnglish = !isEnglish;
            });
        });