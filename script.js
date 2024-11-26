// Масив зображень для слайдера
const images = [
    'https://homesmart.com.ua/content/uploads/images/1%281%29.png',
    'https://marketing.brain.com.ua/static/articles_icon/82.png',
    'https://vencon.ua/uploads/blog/all/vozmozhnosti-umnogo-doma-obzor-sistem-1.jpg'
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