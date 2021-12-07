

// In the deposit and withdrawal function use this code to show the prompt
//parseFloat(prompt("Put some proper message here"));
// You need to change the message of course. You should also do some research why parseFloat() is used here
// answer by making a comment in the code.
// Be aware of that you need to add some code to this so you can display the actual input.

const opDiv = document.getElementById("op-name");
const dtDiv = document.getElementById("op-detail");
const balanceEl = document.getElementById("balanceDiv");

const account = {
  accountName : "Asmaa Z.",
  balance : 100,
  getBalance : function () {
    alert(`Your current balance is ${this.balance}`)
  },
  deposit : function () {
    let depositAmount = prompt("How much would you like to deposit ?");
    if (depositAmount)
    {
      if (depositAmount && depositAmount > 0 && !isNaN(depositAmount))
      {
        this.balance += parseFloat(depositAmount);

        const opTag = document.createElement("div");
        opTag.classList.add("deposit");
        opTag.innerHTML = `<p><strong>+${formatMoney(parseInt(depositAmount))}</strong></p>`;

        const titleTag = document.createElement("div");
        titleTag.classList.add("deposit");
        titleTag.innerHTML= "<p>Deposit</P>";
        updateDOM(titleTag, opTag) ;
      }
      else
      {
        this.accountError(depositAmount);
        this.deposit();
      }
    }
  },
  withdrawal: function () {
    let withdrawalAmount = prompt("How much would you like to withdraw ?");
    if (withdrawalAmount)
    {
      if (withdrawalAmount && withdrawalAmount > 0 && !isNaN(withdrawalAmount))
      {
        if (withdrawalAmount > this.balance)
        {
            alert("The withdrawal amount should be greater than the balance amount !");
          this.withdrawal();
        }
        else
        {
          this.balance -= parseFloat(withdrawalAmount);

          const opTag = document.createElement("div");
          opTag.classList.add("withdrawal");
          opTag.innerHTML = `<p><strong>-${formatMoney(parseInt(withdrawalAmount))} $</strong></p>`;

          const titleTag = document.createElement("div");
          titleTag.classList.add("withdrawal");
          titleTag.innerHTML= "<p>Withdrawal</p>";
          updateDOM(titleTag, opTag) ;
        }

      }
      else
      {
        this.accountError(withdrawalAmount);
        this.withdrawal();
      }
    }
  },
  getAccountName: function () {
    alert(`Name of the account : ${this.accountName}`)
  },
  accountError: (typedValue) => alert(`The value ${isNaN(typedValue) ? "typed" : typedValue} is not valid !`),
  exitAccount: () => window.close()
}

atm();
function atm() {
  balanceDiv.innerHTML =`<p><strong> Balance : ${formatMoney(parseInt(account.balance))} $</strong></p>`;
  let choice = prompt("Select a choice : \n 1.) See balance \n 2.) Make a deposit \n 3.) Make a withdrawal \n 4.) Get account name \n 5.) Exit");
  // Switch statement makes it easy to handle multiple cases, and covers all of them with clean and less code
  
  if ( choice !== null)
  {
    switch (choice)
    {
      case "1":
        account.getBalance();
        atm();
        break;
      case "2":
        account.deposit();
        account.getBalance();
        atm();
        break;
      case "3":
        account.withdrawal();
        account.getBalance();
        atm();
        break;
      case "4":
        account.getAccountName();
        atm();
        break;
      case "5":
        account.exitAccount();
        break;
      case "0":
      case isNaN :
      default :
        alert("Unaccepted value. Authorized values are 1 to 5 !");
        atm();
        break;
    }
  }
}

function updateDOM(opTitleEl, tagElement) {
  opDiv.appendChild(opTitleEl);
  dtDiv.appendChild(tagElement);
  balanceEl.innerHTML =`<p>Balance : ${account.balance} $</p>`;
}

function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

