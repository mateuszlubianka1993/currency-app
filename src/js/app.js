$(document).ready(function () {

    // getTableA();
});

function getTableA() {

  $.getJSON('http://api.nbp.pl/api/exchangerates/tables/a?format=json', function(data) {

    const result = data;
    console.log(data);
  });
};
