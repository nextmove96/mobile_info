document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const container = document.getElementById('data-container');
    loader.style.display = 'block';
    
    const url = 'https://script.google.com/macros/s/AKfycbzfEJg8pZYLjFFaq233IBGc5zB5uPMoiK-ZHCBPmaEBl_siW4nVwzDNhg01lxe2Evai/exec';

    // Function to shuffle array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    fetch(url, {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        loader.style.display = 'none';
        shuffleArray(data);
        data.forEach(item => {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <img src="${item.image}" alt="Image for ${item.title}">
                <div class="body-hero">
                <h2>${item.title}</h2>
                <p>${item.text1}</p>
                <p>${item.text2}</p>
                <p>${item.text3}</p>
                </div>
            `;
            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        loader.style.display = 'none';
        container.innerHTML = '<p>Failed to load data.</p>';
    });
});
