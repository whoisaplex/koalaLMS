 let ctx3 = document.getElementById("chart3");
    var myDailyChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday"],
        datasets: [{
            label: ':)',
            data: [3, 5, 6, 7, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2
        },
        {
            label: ':|',
            data: [3,4,5,6,7,8],
            backgroundColor: 'blue',
        },
        {
            label: ':(',
            data: [3,4,5,6,7,8],
            backgroundColor: 'blue',
        }

        ]
    },
    options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
}
    });
