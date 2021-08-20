
/**
 * Account page
 */

// create form
function createForm(formName) {

    // inner form
    let formDiv = document.querySelector('#inner-form');

    if (formName == 'deposit-form') {
        formDiv.innerHTML = `<div class="lg:w-3/12 md:w-2/4 sm:w-3/5 sm:shadow mx-auto mt-8 bg-white rounded-md">
                                <div class="p-4">
                                    <div class="input-container mb-4 text-black">
                                        <input id="deposit" type="text" placeholder="Deposit amount">
                                    </div>
                                    <input class="bg-purple-800 text-white font-medium py-2 rounded" id="deposit-submit" type="submit" value="Deposit">
                                </div>
                            </div>`;

    } else if (formName == 'withdraw-form') {
        formDiv.innerHTML = `<div class="lg:w-3/12 md:w-2/4 sm:w-3/5 sm:shadow mx-auto mt-8 bg-white rounded-md">
                                <div class="p-4">
                                    <div class="input-container mb-4 text-black">
                                        <input id="withdraw" type="text" placeholder="Withdraw amount">
                                    </div>
                                    <input class="bg-purple-800 text-white font-medium py-2 rounded" id="withdraw-submit" type="submit" value="Withdraw">
                                </div>
                            </div>`;
    }

}

// get input value form submit
function getInputValue(id) {
    // deposit field
    let inputField = document.getElementById(id);
    let inputAmountStr = inputField.value;

    //conver value of deposite
    let inputAmount = parseInt(inputAmountStr);
    // clean input field
    inputField.value = '';
    return inputAmount;
}


// update amount with input value
function addAmount(id, inputAmount) {

    let updateField = document.getElementById(id);
    let updateFieldValueStr = updateField.innerText;
    let updateFieldValue = parseInt(updateFieldValueStr);
    // sum of deposite
    let total = updateFieldValue + inputAmount;

    // update deposite
    updateField.innerText = total;
}

// get Current Balance
 function getCurrentBalance(){
    const currenBanlanceField = document.getElementById('totalBalance');
    let currenBanlanceStr = currenBanlanceField.innerText;
    const currenBanlance = parseInt(currenBanlanceStr);
    return currenBanlance;
 }

// updateBalance
function updateBalance(inputAmount, isAdd) {
    //current balance
    const currenBanlanceField = document.getElementById('totalBalance');
    let currenBanlance = getCurrentBalance();

    if (isAdd == true) {
        // new balance
        let newBalance = currenBanlance + inputAmount;
        currenBanlanceField.innerText = newBalance;

    } else {
        // new balance
        let newBalance = currenBanlance - inputAmount;
        currenBanlanceField.innerText = newBalance;

    }

}


// deposite section
const depoBtn = document.getElementById('deposit-item');
depoBtn.addEventListener('click', function () {

    // generate form
    createForm('deposit-form');


    // form submit
    const deposit = document.getElementById('deposit-submit');
    deposit.addEventListener('click', function () {

        //get input value
        let depositAmount = getInputValue('deposit');

        // statement for submit value of deposit
        if (typeof (depositAmount) == 'number' && depositAmount > 0) {

            // add into deposit section
            addAmount('totalDeposite', depositAmount);
            //add amount with current balance
            updateBalance(depositAmount, true);
        }

    });

});


// withdraw section
const withdrawBtn = document.getElementById('withdraw-item');
withdrawBtn.addEventListener('click', (e) => {
    // genarate form
    createForm('withdraw-form');

    // form submit
    const withdraw = document.getElementById('withdraw-submit');
    withdraw.addEventListener('click', function () {

        // functional way 

        //get input value
        let withdrawAmount = getInputValue('withdraw');

        // statement for submit value of deposit
        if (typeof (withdrawAmount) == 'number' && withdrawAmount > 0) {

            let currentBalance = getCurrentBalance();
            
            if(withdrawAmount <= currentBalance){
                // add into deposit section
                addAmount('totalwithdraw', withdrawAmount);
                //reduce amount with current balance
                updateBalance(withdrawAmount, false);
            }
            
        }

    });

})


/*
 form by create element

 // create deposit form
    let container = document.createElement('div');
    container.classList = 'lg:w-3/12 md:w-2/4 sm:w-3/5 sm:shadow mx-auto mt-8 bg-white rounded-md';

    let parent = document.createElement('div');
    parent.classList = 'p-4';

    let inputContainer = document.createElement('div');
    inputContainer.classList = 'input-container mb-4';

    let inputField = document.createElement("INPUT");
    inputField.setAttribute("id", "deposit");
    inputField.setAttribute("type", "text");
    inputField.setAttribute("placeholder", "Deposit amount");

    let submitBtn = document.createElement('input');
    submitBtn.setAttribute('id','deposit-submit');
    submitBtn.setAttribute('type','submit');
    submitBtn.setAttribute('value','Deposit');
    submitBtn.classList = 'bg-purple-800 text-white font-medium py-2 rounded';

    // append
    inputContainer.appendChild(inputField);
    parent.appendChild(inputContainer);
    parent.appendChild(submitBtn);
    container.appendChild(parent);

    formDiv.append(container);

   */