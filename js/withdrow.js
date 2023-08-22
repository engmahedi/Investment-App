
const withdrowBtn = document.getElementById("withdrowBtn");

withdrowBtn.addEventListener("click", function () {
  
  const withdrowInput = document.getElementById("withdrowInput").value;
  document.getElementById("withdrowInput").value = '';

  if (withdrowInput >= 100) {
    
    // Total Withdraw Display
    
    const withdrowAmount = document.getElementById("withdrowAmount").innerText;
    const totalWithdraw=Math.floor(withdrowAmount)+Math.floor(withdrowInput)
    document.getElementById("withdrowAmount").innerText = totalWithdraw;

    // Total Amount Display

    const balance = document.getElementById("balance").innerText;
    const totalBalance = Math.floor(balance) - Math.floor(withdrowInput);
    document.getElementById("balance").innerText=totalBalance;

    swal("Withdraw Sucessfull!", "Thank You", "success");
  } else {
    swal("Insufficient amount!", "Minimum 100 TK", "error");
  }
 
  
})
