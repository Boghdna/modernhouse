// Масив зображень для слайдера
const images = [
    'https://gmk.center/wp-content/uploads/2020/09/main-7.jpg',
    'https://ecopolitic.com.ua/wp-content/uploads/2021/03/shutterstock_1216216276-750x500.jpg',
    'https://koleo.com.ua/wp-content/uploads/2022/12/%D1%84%D0%BE%D1%82%D0%BE_%D0%A1%D1%83%D1%87%D0%B0%D1%81%D0%BD%D1%96-%D0%B5%D0%BA%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D1%96-%D1%82%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%97_%D0%9A%D0%BE%D0%BB%D0%B5%D0%BE.jpg'
];

let currentImageIndex = 0; // Поточний індекс зображення
const header = document.querySelector('header');

// Функція для оновлення фону
function updateBackground() {
    header.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

// Функція для автоматичної зміни зображень
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; // зациклення на останньому зображенні
    updateBackground();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length; // зациклення на першому зображенні
    updateBackground();
}

// Автоматична зміна зображень (рух з правого на лівий)
setInterval(nextImage, 3000); // Зміна кожні 5 секунд

// Додавання подій на стрілочки
document.getElementById('next').addEventListener('click', nextImage);
document.getElementById('prev').addEventListener('click', prevImage);

// Початкове зображення
updateBackground();




document.getElementById('toggleButton').addEventListener('click', function () {
    const infoDiv = document.getElementById('info');
    if (infoDiv.classList.contains('hidden')) {
        infoDiv.classList.remove('hidden');
        infoDiv.classList.add('view');
        this.textContent = 'Сховати джерела інформації';
    } else {
        infoDiv.classList.add('hidden');
        infoDiv.classList.remove('view');
        this.textContent = 'Показати джерела інформації';
    }
});


// Знайти кнопку
const backToTopButton = document.getElementById("back-to-top");

// Показати/сховати кнопку залежно від прокрутки
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) { // Показувати кнопку після 300px прокрутки
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Повернення на початок сторінки при кліку
backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавний скрол
    });
});