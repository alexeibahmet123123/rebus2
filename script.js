// Правильные слова
const correctWords = [
    "LINGVISTIC", 
    "IDIOM", 
    "MORFOLOGIE", 
    "BILINGV", 
    "ALFABET", 
    "MATERNĂ", 
    "ACCENT", 
    "TRADUCERE", 
    "EXPRESIE", 
    "REGIONALISM", 
    "NATIV", 
    "ARTICULAȚIE"
];
let attempts = Array(correctWords.length).fill(0); // Счетчик попыток для каждого слова

// Функция генерации ребуса
function generateRebus() {
    const container = document.getElementById('rebus-container');
    container.innerHTML = ''; // Очищаем контейнер

    correctWords.forEach((word, wordIndex) => {
        const wordDiv = document.createElement('div');
        wordDiv.classList.add('letter-row');

        for (let i = 0; i < word.length; i++) {
            const letterDiv = document.createElement('div');
            letterDiv.classList.add('letter');
            
            if (i === 0) {
                // Первая буква фиксирована
                const span = document.createElement('span');
                span.textContent = word[i];
                letterDiv.appendChild(span);
            } else {
                // Остальные буквы - для ввода
                const input = document.createElement('input');
                input.type = 'text';
                input.maxLength = '1';
                input.classList.add('input-letter');
                input.dataset.index = `${wordIndex}-${i}`; // Уникальный индекс для каждой буквы

                letterDiv.appendChild(input);
            }

            wordDiv.appendChild(letterDiv);
        }

        container.appendChild(wordDiv);
    });
}

// Функция проверки ответов
function checkAnswers() {
    const inputs = document.querySelectorAll('.input-letter');
    const finalResultDiv = document.getElementById("final-result");
    finalResultDiv.innerHTML = ""; // Сбрасываем финальный результат

    let allCorrect = true;

    inputs.forEach((input) => {
        const index = input.dataset.index.split('-');
        const wordIndex = parseInt(index[0]);
        const letterIndex = parseInt(index[1]);
        const userInput = input.value.toUpperCase();

        if (userInput === correctWords[wordIndex][letterIndex]) {
            input.classList.add('correct');
            input.classList.remove('incorrect');
        } else {
            input.classList.add('incorrect');
            input.classList.remove('correct');
            allCorrect = false;
        }
    });

    if (allCorrect) {
        finalResultDiv.innerHTML = "Toate răspunsurile sunt corecte!";
    } else {
        finalResultDiv.innerHTML = "Unele răspunsuri sunt incorecte. Încearcă din nou!";
    }
}

// Функция генерации при загрузке страницы
window.onload = generateRebus;


