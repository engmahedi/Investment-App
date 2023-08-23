
const depositBtn = document.getElementById("depositBtn");

depositBtn.addEventListener("click", function () {
  const depositInput = document.getElementById("depositInput").value;
  document.getElementById("depositInput").value = '';
  
  if (depositInput >= 100) {
    // Total Deposite Display

    const depositAmount = document.getElementById("depositAmount").innerText;
    const totalDeposit = Math.floor(depositAmount) + Math.floor(depositInput)
    document.getElementById("depositAmount").innerText = totalDeposit;
  
    // Total Amount Display

    const balance = document.getElementById("balance").innerText;  
    const totalBalance = Math.floor(balance) + Math.floor(depositInput);
    document.getElementById("balance").innerText = totalBalance;
    
  swal("Deposit Sucessfull!", "Thank You", "success");
  } else {
    swal("Insufficient amount!", "Minimum 100 TK", "error");
  }

  
  
})