let years = [] ;
let temps = [] ;


let getData = async function (url) {
  let resp, result, table, column, year, temp;
  try {
    resp = await fetch(url);
    result = await resp.text();

    table = result.split("\n").slice(1);

    table.forEach((row) => {
      column = row.split(",");
      year = column[0];
      years.push(year) ;
      temp = column[1];
      temps.push(parseFloat(temp) + 14) ;
      //   console.table(year, temp);
    });
  } catch (err) {
    console.log(err);
  }
};



async function chartIt() {
    await getData("ZonAnn.Ts+dSST.csv");
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: "line",
        data: {
        labels: years,
        datasets: [
            {
            label: "# of Votes",
            data: temps,
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
            },
        ],
        },
    });
}

chartIt()