function takeInnerText(id){
    const getEl = document.getElementById(id).innerText;
    const getElNumber = parseFloat(getEl);
    return getElNumber;
};
function getInputValue(id) {
    const getVL = document.getElementById(id).value;
    const getVLNumber = parseFloat(getVL);
    return getVLNumber;
};

document.getElementById("btn-donation").addEventListener('click', function(event) {
        event.preventDefault();
        
        window.location.href='index.html';
})
document.getElementById("btn-history").addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href='history.html';
})

////////////////////////////////////////////////////////////////////////
// function showSectionById(id) {
//     document.getElementById('homePage').classList.add('hidden');
//     document.getElementById('historyPage').classList.add('hidden');

//     // // show the section with the provided id as parameter
//     document.getElementById(id).classList.remove('hidden');
// }
// document.getElementById("btn-history").addEventListener('click', function(event) {
    //     event.preventDefault();
//     showSectionById('historyPage');
// })
// document.getElementById("btn-donation").addEventListener('click', function(event) {
    //     event.preventDefault();
//     showSectionById('homePage');
// })
///////////////////////////////////////////////////////////////////////////
function handleDonation(donateBtnId, inputId, totalBalanceId, semiTotalId){
    document.getElementById(donateBtnId).addEventListener('click', function(event) {
        event.preventDefault();
        const inputNumber = getInputValue(inputId);
        if(inputNumber.length === 0) {
            alert("Please Enter Your Amount!!");
            return;
        }
        else if(isNaN(inputNumber) === true) {
            alert("Invalid amount value!!!");
            return;
        }
        else if(inputNumber < 0) {
            alert("Invalid amount value!!!");
            return;
        }
        else if(inputNumber === 0) {
            alert("Amount is 0 BDT");
        }
        else if(inputNumber > 0) {
            const totalBalanceNumber = takeInnerText(totalBalanceId);
            const semiTotalNumber = takeInnerText(semiTotalId);

            let newTotalBalance = totalBalanceNumber - inputNumber;
            let newSemiTotal = semiTotalNumber + inputNumber;

            if(newTotalBalance < 0) {
                alert("Insufficient Balance!!");
                return;
            }

            document.getElementById(totalBalanceId).innerText = newTotalBalance;
            document.getElementById(semiTotalId).innerText = newSemiTotal;
            document.getElementById(inputId).value = '';

            my_modal_5.showModal();

        
        }
    });
}

handleDonation('donateNowOne', 'inputOne', 'totalBalance', 'firstTotal');
handleDonation('donateNowTwo', 'inputTwo', 'totalBalance', 'secondTotal');
handleDonation('donateNowThree', 'inputThree', 'totalBalance', 'thirdTotal');