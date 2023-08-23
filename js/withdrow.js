
const withdrowBtn = document.getElementById("withdrowBtn");

withdrowBtn.addEventListener("click", function () {
  
  const withdrowInput = document.getElementById("withdrowInput").value;
  document.getElementById("withdrowInput").value = '';

  const balance = document.getElementById("balance").innerText;

  
    if (withdrowInput < balance && withdrowInput>0){
    
      // Total Withdraw Display
      
      const withdrowAmount = document.getElementById("withdrowAmount").innerText;
      const totalWithdraw=Math.floor(withdrowAmount)+Math.floor(withdrowInput)
      document.getElementById("withdrowAmount").innerText = totalWithdraw;
  
      // Total Amount Display
  
     
    const totalBalance = Math.floor(balance) - Math.floor(withdrowInput);
    document.getElementById("balance").innerText=totalBalance;
  
      swal("Withdraw Sucessfull!", "Thank You", "success");
    } else {

      swal("Insufficient amount!", "Sorry", "error");
    }
  
    
 
  
})
