
/**
 * Account page
 */
// inner form
const formDiv = document.querySelector('#inner-form');


// deposite section
const depoBtn = document.getElementById('deposit-item');
depoBtn.addEventListener('click', function () {

    formDiv.innerHTML = `<div class="lg:w-3/12 md:w-2/4 sm:w-3/5 sm:shadow mx-auto mt-8 bg-white rounded-md">
    <div class="p-4">
        <div class="input-container mb-4 text-black">
            <input id="deposit" type="text" placeholder="Deposit amount">
        </div>
        <input class="bg-purple-800 text-white font-medium py-2 rounded" id="deposit-submit" type="submit" value="Deposit">
        </div>
    </div>`;

    // form submit
    const deposit = document.getElementById('deposit-submit');
    deposit.addEventListener('click', function () {

        // deposit field
        let depositField = document.getElementById('deposit');
        let depositAmountStr = depositField.value;

        //conver value of deposite
        let depositAmount = parseInt(depositAmountStr);
        // statement for submit value of deposit
        if (typeof (depositAmount) == 'number' && depositAmount > 0) {
            //get current deposit value
            let currentDepositeField = document.getElementById('totalDeposite');
            let currentDepositeStr = currentDepositeField.innerText;
            let currentDeposite = parseInt(currentDepositeStr);
            // sum of deposite
            let total = currentDeposite + depositAmount;

            // update deposite
            currentDepositeField.innerText = total;
            // clean input field
            depositField.value = '';


            //update balance
            const currenBanlanceField = document.getElementById('totalBalance');
            let currenBanlanceStr = currenBanlanceField.innerText;
            const currenBanlance = parseInt(currenBanlanceStr);
            // new balance
            let newBalance = currenBanlance + depositAmount;

            currenBanlanceField.innerText = newBalance;
        }

    });

});



// withdraw section
const withdrawBtn = document.getElementById('withdraw-item');
withdrawBtn.addEventListener('click', (e) => {

    formDiv.innerHTML = `<div class="lg:w-3/12 md:w-2/4 sm:w-3/5 sm:shadow mx-auto mt-8 bg-white rounded-md">
                            <div class="p-4">
                                <div class="input-container mb-4 text-black">
                                    <input id="withdraw" type="text" placeholder="Withdraw amount">
                                </div>
                                <input class="bg-purple-800 text-white font-medium py-2 rounded" id="withdraw-submit" type="submit" value="Withdraw">
                            </div>
                        </div>`;

    // form submit
    const withdraw = document.getElementById('withdraw-submit');
    withdraw.addEventListener('click', function () {
        // withdraw field
        const withdrawField = document.getElementById('withdraw');
        let withdrawAmountStr = withdrawField.value;
        // convert value
        let withdrawAmount = parseInt(withdrawAmountStr);
        // statement
        if (typeof (withdrawAmount) == 'number' && withdrawAmount > 0) {

            // get current withdraw value
            const currentWithdrawField = document.getElementById('totalwithdraw');
            let currentWithdrawStr = currentWithdrawField.innerText;
            // conver withdraw value
            let currentWithdraw = parseInt(currentWithdrawStr);

            // sum of withdraw
            let totalWithdraw = currentWithdraw + withdrawAmount;
            // update withdraw 
            currentWithdrawField.innerText = totalWithdraw;


            //update balance
            
            //update balance
            const currenBanlanceField = document.getElementById('totalBalance');
            let currenBanlanceStr = currenBanlanceField.innerText;
            const currenBanlance = parseInt(currenBanlanceStr);
            // new balance
            let newBalance = currenBanlance - withdrawAmount;

            currenBanlanceField.innerText = newBalance;

            // clean input field
            withdrawField.value = '';            

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