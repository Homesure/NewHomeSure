// Get the book now button
const bookNowBtn = document.getElementById('bookNowBtn');

bookNowBtn.addEventListener('click', () => {
    const services = document.querySelectorAll('.service-card');
    let selectedServices = [];
    let totalAmount = 0;

    services.forEach(service => {
        const checkbox = service.querySelector('.service-checkbox');
        const typeSelect = service.querySelector('.service-type');

        if (checkbox.checked) {
            const type = typeSelect.value;
            let price = 0;

            if(type === 'standard') {
                price = parseFloat(checkbox.dataset.priceStandard);
            } else if(type === 'deep') {
                price = parseFloat(checkbox.dataset.priceDeep);
            }

            selectedServices.push({
                name: checkbox.nextElementSibling.querySelector('h2').innerText,
                type: type,
                price: price
            });

            totalAmount += price;
        }
    });

    if(selectedServices.length === 0) {
        alert('Please select at least one service.');
        return;
    }

    // Redirect to cart page with query parameters
    let cartUrl = 'cart.html?';
    selectedServices.forEach((service, index) => {
        cartUrl += `service${index+1}_name=${encodeURIComponent(service.name)}&`;
        cartUrl += `service${index+1}_type=${encodeURIComponent(service.type)}&`;
        cartUrl += `service${index+1}_price=${service.price}&`;
    });
    cartUrl += `total=${totalAmount}`;

    window.location.href = cartUrl;
});
