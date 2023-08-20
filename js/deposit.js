
const depositBtn = document.getElementById("depositBtn");
depositBtn.addEventListener("click", function () {
  const depositInput = document.getElementById("depositInput").value;
  document.getElementById("depositInput").value = '';
  
  const depositAmount = document.getElementById("depositAmount").innerText;
  document.getElementById("depositAmount").innerText=depositInput;
  console.log(depositAmount);
})
