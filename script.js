document.addEventListener('DOMContentLoaded', function() {
    
    // --- МОБИЛЬНОЕ МЕНЮ ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // --- КАЛЬКУЛЯТОР ---
    const areaRange = document.getElementById('area-range');
    const areaVal = document.getElementById('area-val');
    const productSelect = document.getElementById('product-select');
    const totalPriceEl = document.getElementById('total-price');
    const plasticWeightEl = document.getElementById('plastic-weight');
    const calcOrderBtn = document.getElementById('calc-order-btn');

    // ВАШ НОМЕР ДЛЯ ЗАКАЗА
    const myPhone = "77770000000"; 

    function calculate() {
        // Получаем значения
        let area = parseInt(areaRange.value);
        let price = parseInt(productSelect.value);
        let productName = productSelect.options[productSelect.selectedIndex].text;

        // Обновляем текст
        areaVal.innerText = area;

        // Расчет суммы
        let total = area * price;
        totalPriceEl.innerText = total.toLocaleString() + ' ₸';

        // Расчет пластика (15 кг на м2)
        let plastic = area * 15;
        plasticWeightEl.innerText = plastic;

        // Ссылка WhatsApp
        let msg = `Здравствуйте! Расчет с сайта:\n📦 Товар: ${productName}\n📏 Площадь: ${area} м²\n💰 Сумма: ${total.toLocaleString()} ₸\n\nХочу обсудить детали.`;
        let link = `https://wa.me/${myPhone}?text=${encodeURIComponent(msg)}`;
        
        calcOrderBtn.href = link;
    }

    // Запуск слушателей
    if(areaRange && productSelect) {
        areaRange.addEventListener('input', calculate);
        productSelect.addEventListener('change', calculate);
        calculate(); // Первый запуск
    }
});