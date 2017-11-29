 let ctx3 = document.getElementById("chart3");
    var myDailyChart = new Chart(ctx3, {
    type: 'bar',
    data: {
        labels: ["Monday", "Tuesday", "Wednessday", "Thursday", "Friday"],
        datasets: [{
            label: ':)',
            data: [3, 5, 6, 7, 10],
            backgroundColor: 'rgba(58, 249, 44,0.2)',
            borderColor: 'rgba(58, 249, 44,1)',
            borderWidth: 2
        },
        {
            label: ':|',
            data: [3,4,5,6,7,8],
            backgroundColor: 'rgba(249, 255, 76, 0.4)',
            borderColor: 'rgba(249, 255, 76, 1)',
            borderWidth: 2
        },
        {
            label: ':(',
            data: [7,4,5,6,7,8],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 2
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
