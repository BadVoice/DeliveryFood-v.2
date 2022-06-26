const secondMenu = () => {
    const cardsMenu = document.querySelector('.cards-menu')
    const sectionMenu = document.querySelector('.menu')
    const changeTitle = (restourant) => {

        const section = document.createElement('div')
        section.classList.add('section-heading')

        section.innerHTML = `
            <h2 class="section-title restaurant-title">${restourant.name}</h2>
                    <div class="card-info">
                        <div class="rating">
                        ${restourant.stars}
                        </div>
                        <div class="price">От  ${restourant.price} ₽</div>
                        <div class="category">${restourant.kitchen}</div>
                    </div>
                    `

        sectionMenu.prepend(section)
    }
    const cartArr = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

    const addToCart = (cartItem) => {

        if (cartArr.some((item) => item.id === cartItem.id)) {
            cartArr.map((item => {
                if (item.id === cartItem.id) {
                    item.count++
                }

                return item
            }))
        } else {
            cartArr.push(cartItem)
        }


        localStorage.setItem('cart', JSON.stringify(cartArr))
    }


    const renderItems = (data) => {
        data.forEach(({ id, name, description, price, image }) => {
            const card = document.createElement('div')
            card.classList.add('card')

            card.innerHTML = ` 
            <img src="${image}" alt="${name}" class="card-image" />
            <div class="card-text">
                <div class="card-heading">
                    <h3 class="card-title card-title-reg">${name}</h3>
                </div>
                <div class="card-info">
                    <div class="ingredients">${description}
                    </div>
                </div>
                <div class="card-buttons">
                    <button class="button button-primary button-add-cart">
                        <span class="button-card-text">В корзину</span>
                        <span class="button-cart-svg"></span>
                    </button>
                    <strong class="card-price-bold">${price}₽</strong>
                </div>
            </div>
        
            `


            card.querySelector('.button-add-cart').addEventListener('click', () => {
                addToCart({ name, price, id, count: 1 })

            })


            cardsMenu.append(card)

        })
    }

    if (localStorage.getItem('restourant')) {
        const restourant = JSON.parse(localStorage.getItem('restourant'))

        changeTitle(restourant)

        fetch(`./db/${restourant.products}`)
            .then(response => response.json())
            .then(data => renderItems(data))
            .catch((error) => {
                console.log(error)
            })
    } else {
        window.location.href = '/'
    }

}
export default secondMenu