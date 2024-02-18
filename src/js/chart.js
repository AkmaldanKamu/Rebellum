import Chart from "chart.js/auto";


const chartHTML = document.getElementById("mychart");

let tawuran = [
  { year: "2019", kasus: 0.4 },
  { year: "2020", kasus: 0.65 },
  { year: "2021", kasus: 0.22 },
  { year: "2022", kasus: 0.14 },
  { year: "2023", kasus: 0.16 },

];

const updateChart = () => {
  // Perbarui data grafik dengan data baru
  myChart.data.labels = tawuran.map((row) => row.year);
  myChart.data.datasets[0].data = tawuran.map((row) => row.kasus);
  myChart.update();
};

const tawuranBtn = document.getElementById("tawuran");
tawuranBtn.addEventListener("click", () => {
  // Mengganti data saat tombol A diklik
  tawuran = [

    { year: "2019", kasus: 0.4 },
    { year: "2020", kasus: 0.65 },
    { year: "2021", kasus: 0.22 },
    { year: "2022", kasus: 0.14 },
    { year: "2023", kasus: 0.16 },
  ];
  updateChart();
});

const narkobaBtn = document.getElementById("narkoba");
narkobaBtn.addEventListener("click", () => {
  // Mengganti data saat tombol A diklik
  tawuran = [

    { year: "2019", kasus: 28 },
    { year: "2020", kasus: 12 },
    { year: "2021", kasus: 14 },
    { year: "2022", kasus: 13 },
    { year: "2023", kasus: 16 },
  ];
  updateChart();
});

console.dir(narkobaBtn);

const merokokBtn = document.getElementById("merokok");
merokokBtn.addEventListener("click", () => {
  // Mengganti data saat tombol A diklik
  tawuran = [
    { year: "2019", kasus: 10.54 },
    { year: "2020", kasus: 10.61 },
    { year: "2021", kasus: 9.98 },
    { year: "2022", kasus: 22.04 },
    { year: "2023", kasus: 18.8 },
  ];
  updateChart();
});

const seksual = document.getElementById("seksual");
seksual.addEventListener("click", () => {
  tawuran = [
    { year: "pernikahan dini", kasus: 21.4  },
    { year: "hamil diluar nikah", kasus: 12.2 },
    { year: "hamil saat penelitian", kasus: 5.7 },
    { year: "melakukan aborsi", kasus: 7 },
  ];
  updateChart();
});

const perundungan = document.getElementById("perundungan");
perundungan.addEventListener("click", () => {
  // Mengganti data saat tombol A diklik
  tawuran = [
    { year: "2019", kasus: 23 },
    { year: "2020", kasus: 50 },
    { year: "2021", kasus: 13.5 },
    { year: "2022", kasus: 13.5 },
  ];
  updateChart();
});

const minumanKeras = document.getElementById("minumanKeras");
minumanKeras.addEventListener("click", () => {
  // Mengganti data saat tombol A diklik
  tawuran = [
    { year: "2019", kasus: 1.66 },
    { year: "2020", kasus: 1.48 },
    { year: "2021", kasus: 1.30 },
    { year: "2022", kasus: 1.22 },
    { year: "2023", kasus: 1.14 },
  ];
  updateChart();
});

const myChart = new Chart(chartHTML, {
  type: "line",
  data: {
    labels: tawuran.map((row) => row.year),
    datasets: [
      {
        label: "kasus (%)",
        data: tawuran.map((row) => row.kasus),
        pointStyle: "circle",
        borderWidth: 3,
        pointRadius: 10,
        pointHoverRadius: 15,
        borderColor: "#6171C8",
        fill: true,
        backgroundColor: "#F89B11",
      },
    ],
  },
});

