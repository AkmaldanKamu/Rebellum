import Chart from "chart.js/auto";

(async () => {
  let tawuran = [
    { year: "2016 - 2018", kasus: 12.35 },
    { year: "2018 - 2020", kasus: 14.25 },
    { year: "2020 - 2022", kasus: 16.55 },
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
      { year: "2016 - 2018", kasus: 12.35 },
      { year: "2018 - 2020", kasus: 14.25 },
      { year: "2020 - 2022", kasus: 16.55 },
    ];
    updateChart();
  });

  const narkobaBtn = document.getElementById("narkoba");
  narkobaBtn.addEventListener("click", () => {
    // Mengganti data saat tombol A diklik
    tawuran = [
      { year: "2018 - 2020", kasus: 28 },
      { year: "2020 - 2022", kasus: 27 },
      { year: "2022 - 2024", kasus: 17 },
    ];
    updateChart();
  });

  const merokokBtn = document.getElementById("merokok");
  merokokBtn.addEventListener("click", () => {
    // Mengganti data saat tombol A diklik
    tawuran = [
      { year: "2018 - 2020", kasus: 18.8 },
      { year: "2020 - 2022", kasus: 22.4 },
      { year: "2022 - 2024", kasus: 28.6 },
    ];
    updateChart();
  });

  const seksual = document.getElementById("seksual");
  seksual.addEventListener("click", () => {
    // Mengganti data saat tombol A diklik
    tawuran = [
      { year: "2013", kasus: 63 },
      { year: "2017", kasus: 10 },
    ];
    updateChart();
  });

  const perundungan = document.getElementById("perundungan");
  perundungan.addEventListener("click", () => {
    // Mengganti data saat tombol A diklik
    tawuran = [
      { year: "bullying fisik", kasus: 55.5 },
      { year: "bullying verbal", kasus: 29.3 },
      { year: "bullying psikologis", kasus: 15.2 },
      { year: "siswa SD", kasus: 26 },
      { year: "siswa SMP", kasus: 25 },
      { year: "siswa SMA", kasus: 18.75 },
    ];
    updateChart();
  });

  const minumanKeras = document.getElementById("minumanKeras");
  minumanKeras.addEventListener("click", () => {
    // Mengganti data saat tombol A diklik
    tawuran = [
      { year: "14 - 16 tahun", kasus: 47.7 },
      { year: "15 - 19 tahun (pria)", kasus: 70 },
      { year: "15 - 19 tahun (wanita)", kasus: 58 },
    ];
    updateChart();
  });

  const myChart = new Chart(document.getElementById("mychart"), {
    type: "line",
    data: {
      labels: tawuran.map((row) => row.year),
      datasets: [
        {
          label: "kasus (%)",
          data: tawuran.map((row) => row.kasus),
          pointStyle: "circle",
          borderWidth: 5,
          pointRadius: 10,
          pointHoverRadius: 15,
          borderColor: "#6171C8",
        },
      ],
    },
  });
})();
