const auth = () => {
    const btnAuth = document.querySelector('.button-auth');
    const modalAuth = document.querySelector('.modal-auth')
    const closeAuthModal = document.querySelector('.close-auth')
    const logInForm = document.getElementById('logInForm')
    const modalDialogAuth = document.querySelector('.modal-dialog-auth')
    const btnLogin = document.querySelector('.button-login')
    const loginInput = document.getElementById('login')
    const passwordInput = document.getElementById('password')
    const btnOut = document.querySelector('.button-out')
    const userName = document.querySelector('.user-name')
    const cartBtn = document.getElementById('cart-button')

    btnAuth.addEventListener('click', () => {
        modalAuth.style.display = 'flex'
    })

    closeAuthModal.addEventListener('click', () => {
        modalAuth.style.display = 'none'
    })

    btnOut.addEventListener('click', () => {
        logout()
    })

    const login = (user) => {
        btnAuth.style.display = 'none'
        btnOut.style.display = 'flex'
        userName.style.display = 'flex'
        userName.textContent = user.login
        modalAuth.style.display = 'none'
        cartBtn.style.display = 'flex'

        if (user.login === "") {
            alert('введите логин')
            userName.textContent = ""
            btnAuth.style.display = 'flex';
            btnOut.style.display = 'none';
            modalAuth.style.display = 'flex';
            localStorage.removeItem("user");
        }
    }

    const logout = () => {
        btnAuth.style.display = 'flex'
        btnOut.style.display = 'none'
        userName.style.display = 'none'
        userName.textContent = ' ';
        localStorage.removeItem('user')
        cartBtn.style.display = 'none'
    }

    logInForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const user = {
            login: loginInput.value,
            password: passwordInput.value,
        }

        localStorage.setItem('user', JSON.stringify(user))
        login(user)
    })

    if (localStorage.getItem('user')) {
        login(JSON.parse(localStorage.getItem('user')))
    }
}

export default auth