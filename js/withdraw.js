const withdrawButton = document.querySelector('#btn-withdraw');
withdrawButton.addEventListener('click', function(){
    const withdrawAmount = document.querySelector('#withdraw-amount').value;
    const withdrawNumber = parseFloat(withdrawAmount); 
    
    const currentWithdraw = document.querySelector('#currentWithdraw').innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);

    const totalWithdraw = withdrawNumber + currentWithdrawNumber;

    const addWithdrawMoney = document.querySelector('#currentWithdraw');
    addWithdrawMoney.innerText = totalWithdraw;

    const currentBalance = document.querySelector('#currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    const totalBalance = currentBalanceNumber - withdrawNumber;

    const totalMoney = document.querySelector('#currentBalance');
    totalMoney.innerText = totalBalance;

    document.querySelector('#withdraw-amount').value = '';
})