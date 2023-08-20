
const withdrowBtn = document.getElementById("withdrowBtn");

withdrowBtn.addEventListener("click", function () {
  
  const withdrowInput = document.getElementById("withdrowInput").value;
  document.getElementById("withdrowInput").value = '';

  const withdrowAmount = document.getElementById("withdrowAmount").innerText;
  
  document.getElementById("withdrowAmount").innerText = withdrowInput;
  console.log(withdrowAmount);
})
