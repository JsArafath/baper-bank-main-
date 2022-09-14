document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueByID('withdraw-field');
    const prevTotalBalance = getElementValueById('total-ac-balance');

    if (!isNaN(newWithdrawAmount) && newWithdrawAmount <= prevTotalBalance) {
        const prevWithdrawAmount = getElementValueById('total-withdraw-amount');
        setElementValueById('total-withdraw-amount', newWithdrawAmount + prevWithdrawAmount);
        setElementValueById('total-ac-balance', prevTotalBalance - newWithdrawAmount);
    }
    else {
        alert('Invalid');
    }
})









