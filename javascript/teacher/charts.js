let ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
type: 'line',
data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
        label: 'HTML',
        data: [50, 60, 70, 80, 100, 50],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2
    },
    {
        label: 'CSS',
        data: [90, 75, 80, 50, 95, 70],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2
    },
        {
        label: 'Javascript',
        data: [100, 80, 90, 70, 80, 100],
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 2
    }]
},
options: {
    scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
}
});
