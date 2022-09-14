document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueByID('deposit-field');

    if (!isNaN(newDepositAmount)) {
        const prevDepositAmount = getElementValueById('total-deposit-amount');
        const prevTotalBalance = getElementValueById('total-ac-balance');
        setElementValueById('total-deposit-amount', newDepositAmount + prevDepositAmount);
        setElementValueById('total-ac-balance', prevTotalBalance + newDepositAmount);
    }
    else {
        alert("Invalid operation");
    }

});

