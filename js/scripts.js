// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------
// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Evolution of Sales',
    data: [31, 40, 28, 51, 42, 109, 100]
  } 
  // {
  //   name: 'Sales Orders',
  //   data: [11, 32, 45, 32, 34, 52, 41]}
  ],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#75d9d0"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: 'Sales in millons USD',
      },
    }
    // {
    //   opposite: true,
    //   title: {
    //     text: 'Sales Orders',
    //   },
    // },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();

// BAR CHART
var barChartOptions = {
  series: [{
    name: "TV",
    data: [10]
  }, {
    name: 'Google',
    data: [8]
  }, {
    name: 'Meta',
    data: [6]
  }, {
    name: 'Radio',
    data: [4]
  }, {
    name: 'Others',
    data: [2]
  }],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
  stackType: '100%',
  toolbar: {
      show: false
    },
  },
  xaxis: {
    categories: ["% Contribution to total media"],
  },
  colors: [
    "#F78104", "#008080", "#39E9D7",
    "#333333", "#5B7380"
  ],
  // plotOptions: {
  //   bar: {
  //     distributed: true,
  //     borderRadius: 4,
  //     horizontal: false,
  //     columnWidth: '40%',
  //   }
  // },
  // dataLabels: {
  //   enabled: false
  // },
  legend: {
    show: false
  },
  yaxis: {
    title: {
      text: "Countribution",
    }
  }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();

// DONUT CHART
var options = {
  series: [86.7, 13.3],
  labels: ["Base Sales", "Media"],
  chart: {
  type: 'donut',
  height: 350,
    toolbar: {
      show: false
    },
},
colors: [
  "#333333", "#48E5C2"
],
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      position: 'bottom'
    }
  }
}]
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

// Waterfall CHART
var data = [
  {
      name: "2018",
      type: "waterfall",
      orientation: "v",
      measure: [
          "absolute",
          "relative",
          "relative",
          "relative",
          "relative",
          "total",
          "relative",
          "relative",
          "relative",
          "relative",
          "total",
          "relative",
          "relative"
      ],
      x: [
          "Distribution",
          "Media Comp 1",
          "Media Comp 2",
          "Media Comp 3",
          "Media Comp 4",
          "Price",
          "Price Comp 1",
          "Price Comp 2",
          "Price Comp 3",
          "Price Comp 4",
          "Seasonality",
          "Social",
          "TV"
      ],
      textposition: "outside",
      // text: [
      //     "+15",
      //     "+80",
      //     "",
      //     "-40",
      //     "-20",
      //     "Total"
      // ],          
      y: [
        0.119729757,
        -0.001121947,
        -0.003314161,
        -0.001324839,
        -0.008197832,
        -0.154954610,
        0.359586934,
        0.051542854,
        0.059882117,
        0.118361679,
        0.327038790,
        0.046654148,
        0.086218202
      ],
      decreasing: { marker: { color: "#F78104"}},
      increasing: { marker: { color: "#48E5C2"} },
      totals: { marker: { color: "#333333"} },
      connector: {
        line: {
          width: 0,
          color: "rgb(63, 63, 63)"
        }
      },
  }
];
layout = {
  // title: {
  //     text: "Profit and loss statement 2018"
  // },
  xaxis: {
      type: "category"
  },
  yaxis: {
      type: "linear"
  },
  autosize: true,
  showlegend: false
};
Plotly.newPlot('myDiv', data, layout);

