const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Total Amount', 'Deposite Amount', 'Withdraw Amount'],
      datasets: [{
        label: 'TK',
        data: [1200, 1900, 15000],
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });