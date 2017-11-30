
 let ctx2 = document.getElementById("chart2");
    var myDailyChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Courses'],
        datasets: [{
            label: 'Javascript',
            data: [9],
            backgroundColor: '#e44c27'
        },
        {
            label: 'HTML',
            data: [6],
            backgroundColor: '#563d7b'
        },
        {
            label: 'CSS',
            data: [7],
            backgroundColor: '#f1e15a'
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
