
function takeInnerText(id){
    const getEl = document.getElementById(id).innerText;
    const getElNumber = parseFloat(getEl);
    return getElNumber;
};

function getInputValue(id){
    const getVL = document.getElementById(id).value;
    const getVLNumber = parseFloat(getVL);
    return getVLNumber;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.getElementById("donateNowOne").addEventListener('click', function(event) {
    event.preventDefault();
    
    const inputNumber = getInputValue('inputOne');
    if(inputNumber.length === 0) {
        alert("Please Enter Your Amount!!");
        return;
    }
    else if(isNaN(inputNumber)===true){
        alert("Invalid Amount Value!!!");
        return;
    }
    else if(inputNumber < 0){
        alert("Invalid Amount Value!!!");
        return;
    }
    else if(inputNumber===0){
        alert("Amount is 0BDT!!!");
        return;
    }
    else if(inputNumber > 0) {       
        const totalBalanceNumber = takeInnerText('totalBalance');
        const semiTotalNumber = takeInnerText('firstTotal');

        let newTotalBalance = totalBalanceNumber - inputNumber;
        let newSemiTotal = semiTotalNumber + inputNumber;

        if(newTotalBalance < 0) {
            alert("Insufficient Balance!!!")
            return;
        }
         document.getElementById('totalBalance').innerText = newTotalBalance;
         document.getElementById("firstTotal").innerText = newSemiTotal;
         document.getElementById('inputOne').value = '';  
    
        my_modal_5.showModal();

    }   
});
/////////////////////////////////////////////////////////
    document.getElementById("donateNowTwo").addEventListener('click', function(event) {
    event.preventDefault();
    
    const inputNumber = getInputValue('inputTwo');
    if(inputNumber.length === 0) {
        alert("Please Enter Your Amount!!");
        return;
    }
    else if(isNaN(inputNumber)===true){
        alert("Invalid Amount Value!!!");
        return;
    }
    else if(inputNumber < 0){
        alert("Invalid Amount Value!!!");
        return;
    }
    else if(inputNumber===0){
        alert("Amount is 0BDT!!!");
        return;
    }
    else if(inputNumber > 0) {       
        const totalBalanceNumber = takeInnerText('totalBalance');
        const semiTotalNumber = takeInnerText('secondTotal');

        let newTotalBalance = totalBalanceNumber - inputNumber;
        let newSemiTotal = semiTotalNumber + inputNumber;

        if(newTotalBalance < 0) {
            alert("Insufficient Balance!!!")
            return;
        }
         document.getElementById('totalBalance').innerText = newTotalBalance;
         document.getElementById("secondTotal").innerText = newSemiTotal;
         document.getElementById('inputTwo').value = '';  
                
        my_modal_5.showModal();
    
    }   
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("donateNowThree").addEventListener('click', function(event) {
    event.preventDefault();
    

        // validation(inputThree, thirdTotal, totalBalance);
        

    const inputNumber = getInputValue('inputThree');
    if(inputNumber.length === 0) {
        alert("Please Enter Your Amount!!");
        document.getElementById('inputThree').value = ''; 
        return;
    }
    else if(isNaN(inputNumber)===true){
        alert("Invalid Amount Value!!!");
        document.getElementById('inputThree').value = ''; 
        return;
    }
    else if(inputNumber < 0){
        alert("Invalid Amount Value!!!");
        document.getElementById('inputThree').value = ''; 
        return;
    }
    else if(inputNumber===0){
        alert("Amount is 0BDT!!!");
        document.getElementById('inputThree').value = ''; 
        return;
    }
    else if(inputNumber > 0) {       
        const totalBalanceNumber = takeInnerText('totalBalance');
        const semiTotalNumber = takeInnerText('thirdTotal');

        let newTotalBalance = totalBalanceNumber - inputNumber;
        let newSemiTotal = semiTotalNumber + inputNumber;

        if(newTotalBalance < 0) {
            alert("Insufficient Balance!!!")
            return;
        }      
         document.getElementById('totalBalance').innerText = newTotalBalance;
         document.getElementById("thirdTotal").innerText = newSemiTotal;
         document.getElementById('inputThree').value = ''; 

         my_modal_5.showModal();   


    }   
});

/////////////////////////////////////////////////////////////////////////////////
// function validation(inputID, semiTotal, finalTotal){
//     const inputNumber = getInputValue(inputID);
//     if(inputNumber.length === 0) {
//         alert("Please Enter Your Amount!!");
//         document.getElementById(inputID).value = ''; 
//         return;
//     }
//     else if(isNaN(inputNumber)===true){
//         alert("Invalid Amount Value!!!");
//         document.getElementById(inputID).value = ''; 
//         return;
//     }
//     else if(inputNumber < 0){
//         alert("Invalid Amount Value!!!");
//         document.getElementById(inputID).value = ''; 
//         return;
//     }
//     else if(inputNumber===0){
//         alert("Amount is 0BDT!!!");
//         document.getElementById(inputID).value = ''; 
//         return;
//     }
//     else if(inputNumber > 0) {       
//         const totalBalanceNumber = takeInnerText(finalTotal);
//         const semiTotalNumber = takeInnerText(semiTotal);

//         let newTotalBalance = totalBalanceNumber - inputNumber;
//         let newSemiTotal = semiTotalNumber + inputNumber;

//         if(newTotalBalance < 0) {
//             alert("Insufficient Balance!!!")
//             return;
//         }      
//          document.getElementById(finalTotal).innerText = newTotalBalance;
//          document.getElementById(semiTotal).innerText = newSemiTotal;
//          document.getElementById(inputID).value = ''; 

//          my_modal_5.showModal();   


//     }   
// }