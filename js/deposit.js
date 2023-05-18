const depositButton = document.querySelector('#btn-deposit'); // target the "Deposit" Button.
depositButton.addEventListener('click', function(){
    const depositAmount = document.querySelector('#deposit-amount').value; //get value from input as a string
    const depositNumber = parseFloat(depositAmount); // convert input value into a  number.
    const currentDeposit = document.querySelector('#currentDeposit').innerText; // get the current deposit value (html text) where input value is going to be add.
    const currentDepositNumber = parseFloat(currentDeposit); // convert input value into a number;
    const totalDeposit = depositNumber + currentDepositNumber; // add current value and input value

    const addDepositMoney = document.querySelector('#currentDeposit'); // target the deposit section where total amount will be add.
    addDepositMoney.innerText = totalDeposit; // add total value to the deposit section.

    // adding deposite balance to the main balance;
    const currentBalance = document.querySelector('#currentBalance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    const totalBalance = currentBalanceNumber + depositNumber;

    const totalMoney = document.querySelector('#currentBalance');
    totalMoney.innerText = totalBalance;

    
    document.querySelector('#deposit-amount').value = ""; // set input into a null string after adding number to deposit.
    
})