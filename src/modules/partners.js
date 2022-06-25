const partners = () => {
    const cardsRest = document.querySelector('.cards-restaurants')
    const modalAuth = document.querySelector('.modal-auth')

    const renderendItems = (data) => {

        data.forEach(({ name, time_of_delivery, stars, price, kitchen, image, products }) => {
            const a = document.createElement('a')
            a.setAttribute('href', '/restaurant.html')
            a.classList.add('card')
            a.classList.add('cards-restaurants')

            a.dataset.products = products

            a.innerHTML = ` 
            <a href="restaurant.html" class="card card-restaurant">
                        <img src="${image}" alt="${name}" class="card-image" />
                        <div class="card-text">
                            <div class="card-heading">
                                <h3 class="card-title">${name}</h3>
                                <span class="card-tag tag"> ${time_of_delivery} мин</span>
                            </div>
                            <div class="card-info">
                                <div class="rating">
                                ${stars}
                                </div>
                                <div class="price">От ${price} ₽</div>
                                <div class="category">${kitchen}</div>
                            </div>            
                    </a>
                    `

            cardsRest.append(a)

            a.addEventListener('click', (e) => {
                if (localStorage.getItem('user')) {} else {
                    modalAuth.style.display = 'flex'
                    e.preventDefault()
                }
            })


        });
    }

    fetch('https://testdelivery-d0ff4-default-rtdb.firebaseio.com/db/partners.json')
        .then(response => response.json())
        .then(data => renderendItems(data))

}
export default partners