// 不同的ID和KPI name返回不同的数据
function dataFromKPIsbyID(id) {
    var str = id.split('_');
    // console.log(ajaxData.person.id)
    switch (str[1]) {
        case 'person':{
            switch (str[2]) {
                case '0':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '1':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                        //['设备2',23.5,44.4,14.2,55.5]

                    ];
                case '2':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '3':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '4':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '5':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '6':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '7':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
            }
            break;
        }
        case 'equipment':{
            switch (str[2]) {
                case '0':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '1':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '2':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '3':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '4':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '5':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '6':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '7':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
            }
            break;
        }
        case 'process':{
            switch (str[2]) {
                case '0':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '1':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '2':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '3':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '4':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '5':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '6':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '7':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
            }
            break;
        }
        case 'quality':{
            switch (str[2]) {
                case '0':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '1':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '2':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '3':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '4':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '5':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '6':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '7':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
            }
            break;
        }
        case 'logistics':{
            switch (str[2]) {
                case '0':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '1':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '2':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '3':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '4':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '5':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '6':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '7':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
            }
            break;
        }
        case 'change':{
            switch (str[2]) {
                case '0':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '1':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '2':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '3':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8],
                        ['设备2',23.5,44.4,14.2,55.5]
                    ];
                case '4':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '5':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '6':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '7':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '8':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '9':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '10':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
                case '11':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['设备1',82.3,44.3,98.8,88.8]
                    ];
            }
            break;
        }
        case 'layer': {
            switch (str[2]) {
                case 'plannedOutput':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['计划产量',82.3,44.3,98.8,88.8]
                    ];
                case 'output':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['产量',82.3,44.3,98.8,88.8]
                    ];
                case '??':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['废品率',82.3,44.3,98.8,88.8]
                    ];
                case '???':
                    return [
                        ['station','25号','26号','27号','28号'],
                        ['停机时间',82.3,44.3,98.8,88.8]
                    ];
            }
            break;
        }
    }
}


// 生成折线图
// function line() {
//     //设置参数默认值
//     var id = arguments[0];
//     var name = arguments[1] ? arguments[1] : 'none';
//     var color = arguments[2] ? arguments[2] : ["#ff7f50","#8B78F6","#87cefa","#32cd32","#da70d6"];
//     // 基于准备好的dom，初始化echarts实例
//     var line = echarts.init(document.getElementById(id));
//     // 指定图表的配置项和数据
//     var option = {
//         dataset:{
//             // 按列的 key-value 形式。
//             source: []
//         },
//         color: color,
//         tooltip : {},
//         legend: {
//             x:'center',
//             textStyle:{
//                 color:'#fff',
//                 fontSize:16
//             }
//         },
//         grid:{
//             left: '5%',
//             right: '5%',
//             bottom: '10%',
//             containLabel: true
//         },
//         calculable : true,
//         xAxis : [
//             {
//                 type : 'category',
//                 boundaryGap : false,
//                 axisLine:{
//                     lineStyle:{
//                         color: '#87cefa'
//                     },
//                 },
//                 axisLabel : {
//                     interval:0,
//                     rotate:40,
//                     textStyle: {
//                         color: '#fff',
//                         fontSize:13
//                     }
//                 }
//             }
//         ],
//         yAxis : [
//             {
//                 type : 'value',
//                 axisLine:{
//                     lineStyle:{
//                         color: '#87cefa'
//                     },
//                 },
//                 splitLine: {
//                     "show": false
//                 },
//                 axisLabel: {
//                     textStyle: {
//                         color: '#fff'
//                     },
//                     formatter: function (value) {
//                         return value + "%"
//                     },
//                 },
//             }
//         ],
//         series : []
//     };
//     var data =  dataFromKPIsbyID(id);
//     var seriesChild =
//         {
//             type: 'line',
//             seriesLayoutBy: 'row',
//             itemStyle : { normal: {label : {show: true}}},
//         };
//     for (var i = 1; i < data.length; ++i) {
//         option.series.push(seriesChild);
//     };
//     // 红色警示线
//     var markLine = {
//             symbol:'none', // 去掉箭头
//             silent:true, // 不触发鼠标事件
//             data: [{
//                 name: "警示线",
//                 lineStyle:{ //警戒线的样式  ，虚实  颜色
//                     type:'dashed',
//                     color:"red"
//                 },
//                 yAxis: 60
//             }]
//         };
//     option.series[0].markLine = markLine;
//     setInterval(function () {
//         /*        var test = /person/;
//                 var testData0 = test.test(id) ? data0 : 0;
//                 option.dataset.source.data = [testData0,4,5,6];*/
//         // option.dataset.source.data = dataFromKPIsbyID(id);
//         option.dataset.source = data;
//         line.setOption(option);
//     }, 500);
//     // 使用刚指定的配置项和数据显示图表。
//     // dataFromKPIsbyID(id);
//     line.setOption(option);
// }

//生成饼状图
function pie() {
    //设置参数默认值
    var id = arguments[0];
    var color = arguments[2] ? arguments[2] : ["#ff7f50","#8B78F6","#87cefa","#32cd32","#da70d6"];
    var data=arguments[3];
    console.log(data);
    // 基于准备好的dom，初始化echarts实例
    var pie = echarts.init(document.getElementById(id));
    // 指定图表的配置项和数据

    var  option = {
        dataset:{
            // 按列的 key-value 形式。
            source: []
        },
        legend: {
            top: "90%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        color: color,
        series: []

    };

    //var data =  dataFromKPIsbyID(id);
    var seriesChild =
        {
            type: 'pie',
            seriesLayoutBy: 'row',
            //color:color,

            radius: ["10%", "55%"],
            center: ['50%', '50%'],
            roseType: "radius",
            labelLine: {

                smooth: 0.2,
                length: 10,
                length2: 10
            },

            itemStyle : {
                color:color,
                normal: {label : {show: true}}
                },
        };
    for (var i = 0; i < data.length; ++i) {
        option.series.push(seriesChild);
    };
    setInterval(function () {
        /*        var test = /person/;
                var testData0 = test.test(id) ? data0 : 0;
                option.dataset.source.data = [testData0,4,5,6];*/
        // option.dataset.source.data = dataFromKPIsbyID(id);
        option.dataset.source = data;
        pie.setOption(option);
    }, 3000);
    // 使用刚指定的配置项和数据显示图表。
    // dataFromKPIsbyID(id);
    // pie.setOption(option);
    pie.setOption(option);
}

//生成横向柱状图
function barH() {

    //设置参数默认值
    var id = arguments[0];
    var name = arguments[1];
    var color = arguments[2] ? arguments[2] : ["#ff7f50","#8B78F6","#87cefa","#32cd32","#da70d6"];
    var data=arguments[3];
    // 基于准备好的dom，初始化echarts实例
    var bar = echarts.init(document.getElementById(id));
    // 指定图表的配置项和数据

    var option = {
        //seriesLayoutBy: 'row',

        dataset:{
            // 按列的 key-value 形式。
            source: []
        },
        legend: {
            //x:'center',
            //color:'#fff',
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },
        //color:['#da70d6','#8B78F6'],

        color:color,
        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },

        xAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                splitLine: {
                    "show": false,
                    lineStyle:{
                        color: '#87cefa'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },

                },
            }
        ],

        yAxis : [
            {
                //inverse:true,
                type : 'category',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    textStyle: {
                        color: '#fff'
                    }
                }
            }
        ],
        series : [
            /*{
               seriesLayoutBy: 'row',
                type:'bar',
                barWidth : 25,
                itemStyle : {
                    //color:color,
                    normal:
                        {label :
                                {
                                    show: true,
                                    textBorderColor: '#333',
                                    textBorderWidth: 2,
                                    //color:color,

                                    //textPosition:'inside'
                                }
                        }
                },
            },*/
        ]
    };
    //var data =  dataFromKPIsbyID(id);
    var seriesChild =
        {
            barWidth : 15,
            seriesLayoutBy: 'row',
            type: 'bar',
            itemStyle : {
                //color:color,
                normal:
                    {label :
                            {
                                show: true,
                                textBorderColor: '#333',
                                textBorderWidth: 2,
                                //color:color,

                                //textPosition:'inside'
                            }
                    }
            }
        };
    for (var i = 1; i < data.length; ++i) {
        option.series.push(seriesChild);
    };

    // 红色警示线
    var warningLine = {
        symbol:'none', // 去掉箭头
        silent:true, // 不触发鼠标事件
        data: [{
            name: "警示线",
            lineStyle:{ //警戒线的样式  ，虚实  颜色
                type:'dashed',
                color:"red"
            },
            xAxis: 75
        }]
    };
    option.series[0].markLine = warningLine;
    setInterval(function () {
        option.dataset.source = data;
        bar.setOption(option);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    dataFromKPIsbyID(id);
    bar.setOption(option);
}

//生成仪表盘
function gauge(){
    var id = arguments[0];
    var name=arguments[1];
    var color = arguments[2] ? arguments[2] : ["#ff7f50","#8B78F6","#87cefa"];
    var data=arguments[3];
    var leftnur=[0.2, 0.8, 1.0];
    console.log(data);
    var gauge = echarts.init(document.getElementById(id));

    var  option = {
        tooltip: {
            formatter: '{a} <br/>{b} : {c}%'
        },
        series:{
            radius :'80%',
            name: name,
            type: 'gauge',
            max: 100,
            detail: {formatter: '{value}'},
            data: [{value:80}],
            splitLine:{
                length: 25
            },
            axisLine:{
                lineStyle :{
                    color:[[leftnur[0], color[0]], [leftnur[1], color[1]], [leftnur[2], color[2]]],  //  改变刻度的三段颜色
                    width:25   // 刻度的宽度
                }
            }
        }
    };

    /*var data =  dataFromKPIsbyID(id);
    var seriesChild =
    for (var i = 1; i < data[0].length; ++i) {
        option.series.push(seriesChild);
    };

    //option.series[0].data[0].value=80;*/
    setInterval(function () {
        /*        var test = /person/;
                var testData0 = test.test(id) ? data0 : 0;
                option.dataset.source.data = [testData0,4,5,6];*/
        // option.dataset.source.data = dataFromKPIsbyID(id);
        //option.dataset.source = data;

        option.series.data=[data[1][1]];//数据

        gauge.setOption(option);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    //dataFromKPIsbyID(id);
    //gauge.setOption(option);

}

//生成柱状图
function bar() {
    //设置参数默认值
    var id = arguments[0];

    var color = arguments[2] ? arguments[2] : ["#ff7f50","#8B78F6","#87cefa","#32cd32","#da70d6"];
    var data= arguments[3];
    // 基于准备好的dom，初始化echarts实例
    var bar = echarts.init(document.getElementById(id));
    // 指定图表的配置项和数据
    var option = {
        dataset: {
            // dimensions: ['product', '产线A','产线B'],
            source: []
        },
        //color:color,
        legend: {
            textStyle: {
                color: "#fff"
            }
        },
        tooltip: {},
        splitLine:{
            lineStyle:{
                color:"#000000"
            }
        },

        barWidth: 20,
        xAxis: {
            type: 'category',
            axisLabel:{
                color:"#ffffff"
            }
        },
        yAxis: {
            splitLine: {
                "show": false
            },
            axisLabel:{
                color:"#ffffff",
                formatter: '{value} %'
            }

        },
        color:color,
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series : []
    };
    //var data =dataFromKPIsbyID(id);
    // ['product', '产线A','产线B'],
    //     ['5月',12,8],
    //     ['6月',10,9],
    //     ['7月',11,10],
    //     ['9月',9,12],
    // ];
    var seriesChild =
        {
            type: 'bar',
            seriesLayoutBy: 'row',

            itemStyle : {
                color:color,
                normal: {label : {show: true}}
                },
        };
    for (var i = 1; i < data.length; ++i) {
        option.series.push(seriesChild);
    };
    //红色警示线
    var warningLine = {
        symbol:'none', // 去掉箭头
        silent:true, // 不触发鼠标事件
        data: [{
            name: "警示线",
            lineStyle:{ //警戒线的样式  ，虚实  颜色
                type:'dashed',
                color:"red"
            },
            yAxis: 60
        }]
    };
    option.series[0].markLine = warningLine;
    //option.series[0].push(markLine);
    setInterval(function () {
        /*        var test = /person/;
                var testData0 = test.test(id) ? data0 : 0;
                option.dataset.source.data = [testData0,4,5,6];*/
        // option.dataset.source.data = dataFromKPIsbyID(id);
        option.dataset.source = data;
        bar.setOption(option);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    //dataFromKPIsbyID(id);
    bar.setOption(option);
}

//生成雷达图
function radar() {
    //设置参数默认值
    var id = arguments[0];
    var color = arguments[1] ? arguments[1] : ["#ff7f50","#8B78F6","#87cefa","#32cd32","#da70d6"];
    //var data = arguments[2];
    // 基于准备好的dom，初始化echarts实例
    var radar = echarts.init(document.getElementById(id));
    // 指定图表的配置项和数据
    //var option;
    var  option = {
        color: ["#ff7f50", "#87cefa"],
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            right: '10%',

            textStyle: {
                color: "#fff"
            }
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    /*                    backgroundColor: '#999',
                                        borderRadius: 3,
                                        padding: [3, 5]*/
                }
            },
            indicator: [
                // {name: '25号', max: 100},
                // {name: '26号', max: 100},
                // {name: '27号', max: 100},
                // {name: '28号', max: 100}
            ]
        },
        series: []
    };
    var data = dataFromKPIsbyID(id);
    var seriesChild ={
        type: 'radar',
        itemStyle : { normal: {label : {show: true}}},
        data: [
            {
                value: [55, 66, 77, 88],
                name: '设备1',
                lineStyle: {
                    color: "#ff7f50"
                },

            },
            {
                value: [75, 95, 88, 90],
                name: '设备2',
                lineStyle: {
                    color: "#87cefa"
                },

            }
        ]
    };
    for (var i = 1; i < data[0].length; ++i) {
        option.series.push(seriesChild);
    };
    var indicatorName=['指标A','指标B','指标C','指标D',];
    var indicatorMax=['100','100','100','100'];
    var indicatorArr = [];
    for (var i = 0; i < indicatorName.length; i++) {

        //console.log(i);

        var indicator = {};

        for (var j = 0; j < indicatorMax.length; j++) {

            if (i == j) {

                indicator.name = indicatorName[i];

                indicator.max = indicatorMax[j];

                option.radar.indicator.push(indicator);

            }

        }

    }
    //console.log(indicator);
// // ]
//     // var name=['28号','27号','26号','25号',]
//     for (var j = 1; j <name.length; ++i) {
//         // indicator.name=['28号','27号','26号','25号',]
//         option.radar.indicator.push(name);
//     };
    setInterval(function () {

        option.dataset.source = data;
        radar.setOption(option);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    radar.setOption(option);
}

function line() {
    //设置参数默认值
    var id = arguments[0];
    var name = arguments[1] ? arguments[1] : 'none';
    var color = arguments[2] ? arguments[2] : ["#ff7f50", "#8B78F6", "#87cefa", "#32cd32", "#da70d6"];
    var data = arguments[3];
    console.log(data);
    // 基于准备好的dom，初始化echarts实例
    var line = echarts.init(document.getElementById(id));
    // 指定图表的配置项和数据
    var option = {
        dataset: {
            // 按列的 key-value 形式。
            source: []
        },
        color: color,
        tooltip: {},
        legend: {
            x: 'center',
            textStyle: {
                color: '#fff',
                fontSize: 16
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable: true,
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#87cefa'
                    },
                },
                axisLabel: {
                    interval: 0,
                    rotate: 40,
                    textStyle: {
                        color: '#fff',
                        fontSize: 13
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLine: {
                    lineStyle: {
                        color: '#87cefa'
                    },
                },
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            }
        ],
        series: []
    };


    var seriesChild =
        {
            type: 'line',
            seriesLayoutBy: 'row',
            itemStyle: {normal: {label: {show: true}}},
        };
    for (var i = 1; i < data.length; ++i) {
        option.series.push(seriesChild);
    }
    ;
    // 红色警示线
    var markLine = {
        symbol: 'none', // 去掉箭头
        silent: true, // 不触发鼠标事件
        data: [{
            name: "警示线",
            lineStyle: { //警戒线的样式  ，虚实  颜色
                type: 'dashed',
                color: "red"
            },
            yAxis: 60
        }]
    };
    option.series[0].markLine = markLine;
    setInterval(function () {

        /*        var test = /person/;
                var testData0 = test.test(id) ? data0 : 0;
                option.dataset.source.data = [testData0,4,5,6];*/
        // option.dataset.source.data = dataFromKPIsbyID(id);
        option.dataset.source = data;
        line.setOption(option);
    }, 500);
    // 使用刚指定的配置项和数据显示图表。
    // dataFromKPIsbyID(id);
    line.setOption(option);
}


$(function (){
    var date="2021-01-28T19:38:38.000+00:00";
    var day=date.formateDate();
})








// 弹窗函数
function layerFunction() {
    var name = arguments[0];
    layer.open({
        title:'该车间下产线数据展示',
        skin: 'layer_my',
        type: 1,
        shade: false,
        area: ['820px', '430px'], //宽高
        shadeClose: false, //点击遮罩关闭
        content: $("#" + name)
    });
}