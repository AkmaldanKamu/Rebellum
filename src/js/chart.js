import Chart from 'chart.js/auto';

(async function() {
  const tawuran = [
    { year: '2018 - 2020', kasus: 13.45 },
    { year: '2020 - 2022', kasus: 15.75 },
    { year: '2022 - 2024', kasus: 31.45 },
  ];

  const narkoba = [
    { year: '2018 - 2020', kasus: 28 },
    { year: '2020 - 2022', kasus: 27 },
    { year: '2022 - 2024', kasus: 17 },
  ]

  const rokok = [
    { year: '2018 - 2020', kasus: 18.8 },
    { year: '2020 - 2022', kasus: 22.4 },
    { year: '2022 - 2024', kasus: 28.6 },
  ]

  new Chart(
    document.getElementById('mychart'),
    {
      type: 'line',
      data: {
        labels: tawuran.map(row => row.year),
        datasets: [
          {
            label: 'Data tawuran',
            data: tawuran.map(row => row.kasus),
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
            borderColor: "#6171C8",
          },
          {
            label: 'Data narkoba',
            data: narkoba.map(row => row.kasus),
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
            borderColor: "#FF6F61",
          },
          {
            label: 'Data rokok',
            data: rokok.map(row => row.kasus),
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
            borderColor: "#7A7A7A",
          },
        ]
      }
    }
  );
})();