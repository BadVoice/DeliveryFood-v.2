const cart = () => {
    const btnCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    const modalBody = modalCart.querySelector('.modal-body')
    const clearCart = modalCart.querySelector('.clear-cart')
    const modalPrice = modalCart.querySelector('.modal-pricetag')


    const countInc = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        cartArray.map((item) => {
            if (item.id === id) {
                item.count++
            } else if (item.price === price) {
                price * item.pcount
            }
            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        renderItems(cartArray)
        cartSumPrice(JSON.parse(localStorage.getItem('cart')))
    }


    const countDec = (id) => {
        const cartArray = JSON.parse(localStorage.getItem('cart'))
        cartArray.map((item) => {
            if (item.id === id) {
                item.count = item.count > 0 ? item.count - 1 : 0
            }
            return item
        })

        localStorage.setItem('cart', JSON.stringify(cartArray))
        cartSumPrice(JSON.parse(localStorage.getItem('cart')))
    }

    const renderItems = (data) => {
        modalBody.innerHTML = ''

        data.forEach(({ price, count, id, name }) => {
            const CartRow = document.createElement('div')
            CartRow.classList.add('food-row')

            CartRow.innerHTML = `
                    <span class="food-name">${name}</span>
                    <strong class="food-price">${price} ₽</strong>
                    <div class="food-counter">
                        <button class="counter-button btn-dec" data-index="${id}">-</button>
                        <span class="counter">${count}</span>
                        <button class="counter-button btn-inc" data-index="${id}">+</button>
                    `

            modalBody.prepend(CartRow)
        });
    }

    const cartSumPrice = (data) => {
        let priceArr = []
        data.forEach(({ price, count }) => {
            let sumArr = price * count
            priceArr.push(sumArr)
        })
        const res = priceArr.reduce((acc, inc) => acc + inc, 0)
        modalPrice.textContent = `${res}`
    }


    modalBody.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('btn-inc')) {
            countInc(e.target.dataset.index);
        } else if (e.target.classList.contains('btn-dec')) {
            countDec(e.target.dataset.index);
        };
    })

    btnCart.addEventListener('click', () => {
        modalCart.classList.add('is-open')

        if (localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
            cartSumPrice(JSON.parse(localStorage.getItem('cart')))
        }

    })
    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open')

    })
}

export default cart