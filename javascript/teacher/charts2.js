
 let ctx2 = document.getElementById("chart2");
    var myDailyChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [' '],
        datasets: [{
            label: 'Javascript',
            data: [9],
            backgroundColor: '#f1e15a'
        },
        {
            label: 'HTML',
            data: [6],
            backgroundColor: '#e44c27'
        },
        {
            label: 'CSS',
            data: [7],
            backgroundColor: '#563d7b'
        }

        ]
    },
    options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true,
                max: 10
            }
        }]
    }
}
    });
