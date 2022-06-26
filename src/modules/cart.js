const cart = () => {
    const btnCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    const modalBody = modalCart.querySelector('.modal-body')
    const clearCart = modalCart.querySelector('.clear-cart')
    const renderItems = (data) => {


        modalBody.innerHTML = ''


        data.forEach(({ price, count, name }) => {
            const CartRow = document.createElement('div')
            CartRow.classList.add('food-row')



            CartRow.innerHTML = `
                    <span class="food-name">${name}</span>
                    <strong class="food-price">${price} ₽</strong>
                    <div class="food-counter">
                        <button class="counter-button btn-dec">-</button>
                        <span class="counter">${count}</span>
                        <button class="counter-button btn-inc">+</button>
                    `

            modalBody.prepend(CartRow)

            clearCart.addEventListener('click', () => {
                CartRow.innerHTML = ''
            })

        });

    }

    btnCart.addEventListener('click', () => {
        modalCart.classList.add('is-open')

        if (localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
        }



    })
    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open')

    })






}
export default cart