"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// Team Overview Demo
// =============================================================
var TeamOverviewDemo = /*#__PURE__*/function () {
  function TeamOverviewDemo() {
    _classCallCheck(this, TeamOverviewDemo);

    this.init();
  }

  _createClass(TeamOverviewDemo, [{
    key: "init",
    value: function init() {
      // event handlers
      this.achievementChart();
    }
  }, {
    key: "achievementChart",
    value: function achievementChart() {
      var data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Projects',
          borderColor: Looper.colors.brand.teal,
          backgroundColor: Looper.colors.brand.teal,
          fill: false,
          data: [41, 20, 68, 17, 100, 83, 53]
        }, {
          label: 'Completed',
          borderColor: Looper.colors.brand.purple,
          backgroundColor: Looper.colors.brand.purple,
          fill: false,
          data: [51, 14, 51, 63, 59, 83, 34]
        }]
      }; // init achievement chart

      var canvas = $('#canvas-achievement')[0].getContext('2d');
      var chart = new Chart(canvas, {
        type: 'bar',
        data: data,
        options: {
          responsive: true,
          legend: {
            display: false
          },
          title: {
            display: false
          },
          tooltips: {
            mode: 'index',
            intersect: true
          },
          scales: {
            xAxes: [{
              gridLines: {
                display: true,
                drawBorder: false,
                drawOnChartArea: false
              }
            }],
            yAxes: [{
              gridLines: {
                display: true,
                borderDash: [8, 4]
              },
              ticks: {
                stepSize: 20
              }
            }]
          }
        }
      });
    }
  }]);

  return TeamOverviewDemo;
}();
/**
 * Keep in mind that your scripts may not always be executed after the theme is completely ready,
 * you might need to observe the `theme:load` event to make sure your scripts are executed after the theme is ready.
 */


$(document).on('theme:init', function () {
  new TeamOverviewDemo();
});