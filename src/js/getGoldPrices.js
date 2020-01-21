export function getGoldPrices() {

    $.getJSON('http://api.nbp.pl/api/cenyzlota/last/30/?format=json', function (data) {
        
        const labels = data.map(el => {
            return el.data;
        });
        const result = data.map(el => {
            return el.cena;
        })
        let ctx = document.getElementById('goldChart');
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: [...labels],
                datasets: [{
                    data: [...result],
                    backgroundColor: 'rgba(255, 243, 176, 0.2)',
                    borderColor: '#9E2A2B'
                }]     
            },
            options: {
                animation: {
                    easing: "easeOutCubic",
                    duration: 700
                },
                responsive: true, 
                hover: {
                    mode: 'dataset' 
                },
                legend: {
                    display: false,
                },
                scales: {
                    xAxes: [{ 
                        gridLines: {
                            color: "rgba(255, 243, 176, 0.3)",
                            lineWidth: 1 
                        },
                        display: true, 
                        scaleLabel: { 
                            display: true,
                            labelString: 'Dates',
                            fontSize: 12,
                            fontStyle: 'bold'
                        },
                        ticks: {
                            fontColor: "#fff3b0"
                        }
                    }],
                    yAxes: [{ 
                        gridLines: {
                            color: "rgba(255, 243, 176, 0.3)",
                            lineWidth: 1
                        },
                        ticks: {
                            fontColor: "#fff3b0"
                        }
                    }]
                }
            }
        });
    });
};
