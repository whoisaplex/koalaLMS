window.onload = function () {
    let ctx3 = document.getElementById("chart3");
    var myDailyChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["Mon", "Tues", "Wedn", "Thur", "Fri", "Sat", "Sun"],
        datasets: [{
            label: 'days',
            data: [4, 5, 6, 7, 8, 9, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2
        }]
    },
    options: {
         legend: {
            display: false
         },
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
    });
}