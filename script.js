const historyTotal = document.getElementById("totalBalance2");


// // // function 01
function takeInnerText(id){
    const getEl = document.getElementById(id).innerText;
    const getElNumber = parseFloat(getEl);
    return getElNumber;
};
// // // function 02
function getInputValue(id) {
    const getVL = document.getElementById(id).value;
    const getVLNumber = parseFloat(getVL);
    return getVLNumber;
};


const homePG = document.getElementById("homePage");
const historyPG = document.getElementById("historyPage");
const donationBtn = document.getElementById("btn-donation");
const historyBtn = document.getElementById("btn-history");

historyBtn.addEventListener('click', function(event) {
    event.preventDefault();
    historyPG.classList.remove("hidden");
    historyPG.classList.add("block");
    homePG.classList.remove("block");
    homePG.classList.add("hidden");
})
donationBtn.addEventListener('click', function(event) {
    event.preventDefault();
    historyPG.classList.remove("block");
    historyPG.classList.add("hidden");
    homePG.classList.remove("hidden");
    homePG.classList.add("block");
})


///////////////////////////////////////////////////////////////////////////
// // // function 03
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
            if(donateBtnId === "donateNowOne"){
                addHistoryItem(inputNumber, cardNameOne);
            }
            else if(donateBtnId === "donateNowTwo"){
                addHistoryItem(inputNumber, cardNameTwo);
            }
            else{
                addHistoryItem(inputNumber, cardNameThree);
            }
            historyTotal.innerText = newTotalBalance;
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

const historyItems = document.getElementById("history-items");
const cardNameOne = document.getElementById("card-name-1").innerText;
const cardNameTwo = document.getElementById("card-name-2").innerText;
const cardNameThree = document.getElementById("card-name-3").innerText;

// // function 04
function addHistoryItem(amount, cardName) {
    let historyItem = document.createElement("div");
    historyItem.className = `p-5 rounded-xl border flex flex-col gap-5`;
    historyItem.innerHTML = `<h1 class="text-xl font-bold"> ${amount} Taka is Donated for ${cardName}</h1> <p  class =" text-xs">Date: ${new Date()}`;

    historyItems.appendChild(historyItem);
}