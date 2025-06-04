document.addEventListener('DOMContentLoaded', function () {
    const productsContainer = document.getElementById('productsContainer');

    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(products => {
            displayProducts(products);
        })
        

    function displayProducts(products) {
        productsContainer.innerHTML = '';

        if (products.length === 0) {
            productsContainer.innerHTML = `
                <div class="col-12 text-center py-5">
                    <div class="alert alert-info">
                        No products found.
                    </div>
                </div>
            `;
            return;
        }

        products.forEach(product => {
            const col = document.createElement('div');
            col.className = 'col-md-4 col-lg-3 mb-4';

            const card = document.createElement('div');
            card.className = 'card product-card h-100';

            
            const imgContainer = document.createElement('div');
            imgContainer.className = 'product-img-container position-relative';
            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.title;
            img.className = 'product-img';
            imgContainer.appendChild(img);

            
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            
            const title = document.createElement('h5');
            title.className = 'product-title';
            title.textContent = product.title;

            
            const price = document.createElement('div');
            price.className = 'price mb-2';
            price.textContent = `₹${product.price}`;

            const description = document.createElement('p');
            description.className = 'product-description';
            description.textContent = product.description;
            
            

            
            const button = document.createElement('button');
            button.className = 'btn btn-add-to-cart';
            button.innerHTML = '<i class="fas fa-shopping-cart me-2"></i>Buy Now';

            const cardFooter = document.createElement('div');
            cardFooter.className = 'card-footer bg-transparent';
            cardFooter.appendChild(button);

            cardBody.appendChild(title);
            cardBody.appendChild(price);
            cardBody.appendChild(description);

            card.appendChild(imgContainer);
            card.appendChild(cardBody);
            card.appendChild(cardFooter);

            col.appendChild(card);
            productsContainer.appendChild(col);
        });
    }
});
