const loginBtn = document.querySelector('#btn-login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.querySelector('#login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.querySelector('#transaction-area');
    transactionArea.style.display = 'block';
})