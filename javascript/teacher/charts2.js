let ctx2 = document.getElementById("chart2");
var myDailyChart = new Chart(ctx2, {
type: 'bar',
data: {
    labels: ["HTML", "CSS", "Javascript"],
    datasets: [{
        data: [7,8,9],
        backgroundColor: ['#e44c27','#563d7b','#f1e15a'],
        borderWidth: 2
    }]
},
    options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                max:10
            }
        }]
    }
}

});
