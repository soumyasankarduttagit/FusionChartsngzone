import { Component } from '@angular/core';

const stackData = {
  chart: {
    caption: "Head Count Analysis with CTC",
    // subcaption: "2012-2016",
    xaxisname: "CTC",
    yaxisname: "Business Unit",
    formatnumberscale: "1",
    plottooltext:
      "<b>$dataValue</b> <b>$seriesName</b> in $label",
    theme: "fusion",
    drawcrossline: "1"
  },
  categories: [
    {
      category: [
        {
          label: "PM"
        },
        {
          label: "PWD"
        },
        {
          label: "RD"
        },
        {
          label: "MPP"
        },
        {
          label: "DGM"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Head Count",
      data: [
        {
          value: "800"
        },
        {
          value: "600"
        },
        {
          value: "543"
        },
        {
          value: "343"
        },
        {
          value: "243"
        }
      ]
    },
    {
      seriesname: "CTC",
      data: [
        {
          value: "800"
        },
        {
          value: "600"
        },
        {
          value: "543"
        },
        {
          value: "343"
        },
        {
          value: "243"
        }
      ]
    }
  ]
};

const pidata = {
  chart: {
    caption: "Geneder Wise Headcount",
    // plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Male",
      value: "3264"
    },
    {
      label: "Female",
      value: "2210"
    },
    {
      label: "Other",
      value: "143"
    }
  ]
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // defaltValue=false;
  defaltValue: boolean = false;  
  dataSource: Object;
  title = 'Head Count Analysis';
  width = 600;
  height = 400;
  type = "mscolumn2d";
  dataFormat = "json";
  stackDataSource: Object;

  piwidth = 600;
  piheight = 400;
  pitype = "pie2d";
  pidataFormat = "json";
  pidataSource: Object;

  chartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    toolbox: {
      feature: {
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar'] },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    grid: {
      top: '15%',
      left: '5%',
      right: '5%',
      bottom: '5%',
      containLabel: true,
    },
    legend: {
      data: ['Ton / ha', 'Second Ton / Ha', 'Third Ton / Ha', 'Ton', 'Ha']
    },
    xAxis: [
      {
        type: 'category',
        data: ['Value1', 'Value2', 'Value3', 'Value4', 'Value5', 'Value6', 'Value7', 'Value8', 'Value9', 'Value10', 'Value11', 'Value12', 'Value13', 'Value14', 'Value15'],
        axisPointer: {
          type: 'shadow'
        }
      },
    ],
    yAxis: [
      {
        type: 'value',
        name: 'Ton1 / ha',
        axisLabel: {
          formatter: '{value}'
        }
      },
      {
        type: 'value',
        name: 'Ton2',
        offset: 0,
        axisLabel: {
          formatter: '{value} Ton'
        }
      },
      {
        type: 'value',
        name: 'Ha3',
        offset: 80,
        axisLabel: {
          formatter: '{value} Ha'
        }
      },
    ],
    series: [
      {
        name: 'Ton / ha',
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'rgb(125, 10, 10)'
          }
        },
        data: [24.03, 31.75, 24.51, 34.71, 32.43, 37.13, 21.24, 29.88, 10.16, 28.34, 22.29, 21.44, 23.74, 31.74, 16.42]
      },
      {
        name: 'Second Ton / Ha',
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'rgb(17, 86, 34)'
          }
        },
        data: [15.41, 14.88, 16.17, 27.84, 34.13, 27.04, 24.56, 22.2, 7.65, 20.09, 18.24, 23.86, 21.73, 19.69, 15.43]
      },
      {
        name: 'Third Ton / Ha',
        type: 'bar',
        itemStyle: {
          normal: {
            color: 'rgb(14, 22, 109)'
          }
        },
        data: [12.95, 10.66, 14.35, 19.69, 18.57, 32.45, 21.06, 12.54, 12.15, 11.38, 13.73, 17.37, 12.62, 13.29, 16.53]
      },
      {
        name: 'Ton',
        type: 'line',
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: 'rgb(14, 22, 109)'
          }
        },
        data: [76.18, 286.42, 392.12, 1336.8, 295.12, 1234.82, 380.6, 110.86, 68.04, 221.18, 82.02, 141.74, 821.54, 556.78, 12.48]
      },
      {
        name: 'Ha',
        type: 'line',
        yAxisIndex: 2,
        itemStyle: {
          normal: {
            color: 'rgb(14, 22, 109)'
          }
        },
        data: [3.17, 9.02, 18, 38.51, 7.3, 35.95, 11.45, 3.71, 6.7, 7.86, 3.41, 6.61, 36.71, 20.07, 0.76]
      },
    ]
  };
  contacts = [
    {id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com"},
    {id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com"},
    {id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com"},
    {id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com"}
  ];
  constructor() {
    this.pidataSource = pidata;
    this.stackDataSource = {
      chart: {
        caption: "Test Report",
        // subcaption: "2012-2016",
        xaxisname: "XYZ",
        yaxisname: "Unit",
        formatnumberscale: "1",
        plottooltext:
          "<b>$dataValue</b> <b>$seriesName</b> in $label",
        theme: "fusion",
        drawcrossline: "1"
      },
      categories: [
        {
          category: [
            {
              label: "PM"
            },
            {
              label: "PWD"
            },
            {
              label: "RD"
            },
            {
              label: "MPP"
            },
            {
              label: "DGM"
            }
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Count",
          data: [
            {
              value: "800"
            },
            {
              value: "600"
            },
            {
              value: "543"
            },
            {
              value: "343"
            },
            {
              value: "243"
            }
          ]
        },
        {
          seriesname: "XYZ",
          data: [
            {
              value: "800"
            },
            {
              value: "600"
            },
            {
              value: "543"
            },
            {
              value: "343"
            },
            {
              value: "243"
            }
          ]
        }
      ]
    };
    //STEP 2 - Chart Data
    const chartData = [
      {
        label: "PM",
        value: "290"
      },
      {
        label: "PWD",
        value: "260"
      },
      {
        label: "RD",
        value: "180"
      },
      {
        label: "MPP",
        value: "140"
      },
      {
        label: "DGM",
        value: "115"
      },
      {
        label: "MOA",
        value: "100"
      },
      {
        label: "DES",
        value: "30"
      },
      {
        label: "OneU",
        value: "30"
      }
    ];
    // STEP 3 - Chart Configuration
    const dataSource = {
      chart: {
        //Set the chart caption
        caption: "Head Count Analysis",
        //Set the chart subcaption
        // subCaption: "In MMbbl = One Million barrels",
        //Set the x-axis name
        xAxisName: "CTC",
        //Set the y-axis name
        yAxisName: "Head Count",
        // numberSuffix: "K",
        //Set the theme for your chart
        theme: "fusion"
      },
      // Chart Data - from step 2
      data: chartData
    };
    this.dataSource = dataSource;
  }
  dataplotClick($event) {
     console.log("$event  ",$event);
    
    //  let dataIndex = $event.dataObj.dataIndex;
    //  console.log("dataIndex  ",dataIndex);
    //  console.log("mian :: ",this.stackDataSource['dataset'][0].data[dataIndex]);
     this.defaltValue=true;
     console.log("this.defaltValue  ",this.defaltValue);

    // let isSliced = $event.dataObj.isSliced;
    // this.zone.run(() => {
    //     this.selectedSlice = isSliced ? 'none' : this.getLabel(dataIndex).toLowerCase();
    // })
}
}
