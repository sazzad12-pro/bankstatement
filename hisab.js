document
  .getElementById("deposite-button")
  .addEventListener("click", function () {
    const userDepo = document.getElementById("deposite-input");
    const userDepoTotal = userDepo.value;
    const userDepotext = parseFloat(userDepoTotal);
    const withdrawTotal = document.getElementById("deposit-total");
    const withdrawTotalAmount = withdrawTotal.innerText;
    const withdrawamount = parseFloat(withdrawTotalAmount);
    withdrawTotal.innerText = withdrawamount + userDepotext;
    const balanceTotal = document.getElementById("balance-tatal");
    const previousBal = balanceTotal.innerText;
    const balnac = parseFloat(previousBal);
    balanceTotal.innerText = balnac + userDepotext;
    userDepo.value = "";
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawAdd = withdrawInput.value;
    const withdrawtotal = parseFloat(withdrawAdd);
    const tatalWithdraw = document.getElementById("withdraw-total");
    const tatal = tatalWithdraw.innerText;
    const taltalfl = parseFloat(tatal);
    tatalWithdraw.innerText = withdrawtotal + taltalfl;
    const belence = document.getElementById("balance-tatal");
    const tatalb = belence.innerText;
    const bpresflot = parseFloat(tatalb);
    belence.innerText = bpresflot - withdrawtotal;
    withdrawInput.value = "";
  });
