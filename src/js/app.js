$(document).ready(function () {

    getTableA();
});

function getTableA() {

    $.getJSON('http://api.nbp.pl/api/exchangerates/tables/a?format=json', function (data) {

        const rates = data[0].rates;
        const labels = rates.map(el => {
            return el.code;
        });
        const result = rates.map(el => {
            return el.mid;
        })

        let ctx = document.getElementById('tableAChart');
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: [...labels],
                datasets: [{
                    data: [...result],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(32,255,94, 0.2)',
                        'rgba(32,82,255, 0.2)',
                        'rgba(255,32,82, 0.2)',
                        'rgba(255,94,32, 0.2)',
                        'rgba(110,0,25, 0.2)',
                        'rgba(100,0,100, 0.2)',
                        'rgba(0,24,0, 0.2)',
                        'rgba(100,100,0, 0.2)',
                        'rgba(0,151,0, 0.2)',
                        'rgba(6,34,57, 0.2)',
                        'rgba(126,121,13, 0.2)',
                        'rgba(126,13,19, 0.2)',
                        'rgba(90,135,190, 0.2)',
                        'rgba(126,64,13, 0.2)',
                        'rgba(181,31,31, 0.2)',
                        'rgb(31,181,31, 0.2)',
                        'rgba(68,64,20, 0.2)',
                        'rgba(147,6,200, 0.2)',
                        'rgba(247,97,130, 0.2)',
                        'rgba(255,0,13, 0.2)',
                        'rgba(255,156,223, 0.2)',
                        'rgba(20,68,64, 0.2)',
                        'rgba(68,20,24, 0.2)',
                        'rgba(168,200,247, 0.2)',
                        'rgba(160,0,47, 0.2)',
                        'rgba(16,100,47, 0.2)',
                        'rgba(23,168,45, 0.2)',
                        'rgba(218,165,32, 0.2)',
                        'rgba(158, 42, 43, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(32,255,94, 1)',
                        'rgba(32,82,255, 1)',
                        'rgba(255,32,82, 1)',
                        'rgba(255,94,32, 1)',
                        'rgba(110,0,25, 1)',
                        'rgba(100,0,100, 1)',
                        'rgba(0,24,0, 1)',
                        'rgba(100,100,0, 1)',
                        'rgba(0,151,0, 1)',
                        'rgba(6,34,57, 1)',
                        'rgba(126,121,13, 1)',
                        'rgba(126,13,19, 0.2)',
                        'rgba(90,135,190, 1)',
                        'rgba(126,64,13, 1)',
                        'rgba(181,31,31, 1)',
                        'rgb(31,181,31, 1)',
                        'rgba(68,64,20, 1)',
                        'rgba(147,6,200, 1)',
                        'rgba(247,97,130, 1)',
                        'rgba(255,0,13, 1)',
                        'rgba(255,156,223, 1)',
                        'rgba(20,68,64, 1)',
                        'rgba(68,20,24, 1)',
                        'rgba(168,200,247, 1)',
                        'rgba(160,0,47, 1)',
                        'rgba(16,100,47, 1)',
                        'rgba(23,168,45, 1)',
                        'rgba(218,165,32, 1)',
                        'rgba(158, 42, 43, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                legend: {
                    display: false,
                }
            }
        });
    });
};
