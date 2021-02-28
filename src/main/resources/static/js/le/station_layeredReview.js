//定义一个全局变量接受图表，以便resize
charts=[];

// 计划产量
function station_kpi1(){
    // 基于准备好的dom，初始化echarts实例
    var station_kpi1 = echarts.init(document.getElementById('station_kpi1'));
    charts.push(station_kpi1);

    // 指定图表的配置项和数据

    var option = {
        color:['#8B78F6',"#ff7f50","#87cefa","#32cd32","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['计划产量','当前产量','不良品数','设备开动率','在岗人数'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['25号','26号','27号','28号',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                /*                min: function (value) {
                                    return value.min - 0.1;
                                },*/
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
            }
        ],
        series : [
            {
                name:'计划产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[700, 800, 600, 900, ],
                itemStyle : { normal: {label : {show: true}}},
            },
            {
                name:'当前产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[650, 835, 520, 820, ],
                itemStyle : { normal: {label : {show: true}}},
            }/*,
            {
                name:'当前产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 3, 4, 1, ]
            },
            {
                name:'不良品数',
                type:'line',
                // itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 0, 1,]
            },
            {
                name:'设备开动率',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 2, 1, 4,  ]
            },
            {
                name:'在岗人数',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[0, 1, 3, 3, ]
            }*/
        ]

    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        station_kpi1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    station_kpi1.setOption(option);

}
// 当前产量
// function station_kpi2(){
//     // 基于准备好的dom，初始化echarts实例
//     var station_kpi2 = echarts.init(document.getElementById('station_kpi2'));
//     charts.push(station_kpi2);
//
//     // 指定图表的配置项和数据
//
//     var option = {
//         color:["#ff7f50","#87cefa",'#8B78F6',"#32cd32","#da70d6"],
//         tooltip : {
//             trigger: 'item',
//             formatter: "{a}<br/>{b}<br/>{c}元"
//         },
//         legend: {
//             data:['当前产量','不良品数','计划产量','设备开动率','在岗人数'],
//             /*y: 'bottom',*/
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
//                 data : ['25号','26号','27号','28号',],
//                 axisLine:{
//                     lineStyle:{
//                         color: '#87cefa'
//                     },
//                 },
//                 axisLabel : {
//                     interval:0,
//                     rotate:40,
//
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
//                 /*                min: function (value) {
//                                     return value.min - 0.1;
//                                 },*/
//                 splitLine: {
//                     "show": false
//                 },
//                 axisLabel: {
//                     textStyle: {
//                         color: '#fff'
//                     },
//                     formatter: function (value) {
//                         return value + ""
//                     },
//                 },
//             }
//         ],
//         series : [
//             {
//                 name:'当前产量',
//                 type:'line',
//
//                 // itemStyle: {normal: {areaStyle: {}}},
//                 data:[650, 835, 520, 820, ]
//             }/*,
//             {
//                 name:'当前产量',
//                 type:'line',
//
//                 // itemStyle: {normal: {areaStyle: {}}},
//                 data:[3, 3, 4, 1, ]
//             },
//             {
//                 name:'不良品数',
//                 type:'line',
//                 // itemStyle: {normal: {areaStyle: {}}},
//                 data:[1, 2, 0, 1,]
//             },
//             {
//                 name:'设备开动率',
//                 type:'line',
//
//                 // itemStyle: {normal: {areaStyle: {}}},
//                 data:[3, 2, 1, 4,  ]
//             },
//             {
//                 name:'在岗人数',
//                 type:'line',
//
//                 // itemStyle: {normal: {areaStyle: {}}},
//                 data:[0, 1, 3, 3, ]
//             }*/
//         ]
//
//     };
// /*    setInterval(function () {
//         // option.series[0].data =  [80,90,85,90];//改这里
//         // option.series[1].data =  [1.40, 1.35,1.33,1.46];
//         station_kpi2.setOption(option, true);
//     },500);*/
//     // 使用刚指定的配置项和数据显示图表。
//     station_kpi2.setOption(option);
//
// }
// 不良品数
function station_kpi2(){
    // 基于准备好的dom，初始化echarts实例
    var station_kpi3 = echarts.init(document.getElementById('station_kpi3'));
    charts.push(station_kpi3);

    // 指定图表的配置项和数据

    var option = {
        color:["#87cefa",'#8B78F6',"#ff7f50","#32cd32","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['不良品数','计划产量','当前产量','设备开动率','在岗人数'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['25号','26号','27号','28号',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                /*                min: function (value) {
                                    return value.min - 0.1;
                                },*/
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
            }
        ],
        series : [
            {
                name:'不良品数',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[10, 15, 9, 12, ],
                itemStyle : { normal: {label : {show: true}}},
            }/*,
            {
                name:'当前产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 3, 4, 1, ]
            },
            {
                name:'不良品数',
                type:'line',
                // itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 0, 1,]
            },
            {
                name:'设备开动率',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 2, 1, 4,  ]
            },
            {
                name:'在岗人数',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[0, 1, 3, 3, ]
            }*/
        ]

    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        station_kpi3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    station_kpi3.setOption(option);

}
// 设备开动率
function station_kpi3(){
    // 基于准备好的dom，初始化echarts实例
    var station_kpi4 = echarts.init(document.getElementById('station_kpi4'));
    charts.push(station_kpi4);

    // 指定图表的配置项和数据

    var option = {
        color:["#32cd32",'#8B78F6',"#ff7f50","#87cefa","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['设备开动率','计划产量','当前产量','不良品数','在岗人数'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['25号','26号','27号','28号',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                /*                min: function (value) {
                                    return value.min - 0.1;
                                },*/
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
        series : [
            {
                name:'设备开动率',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[70, 88, 65, 90,  ],
                itemStyle : { normal: {label : {show: true}}},
            }/*,
            {
                name:'当前产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 3, 4, 1, ]
            },
            {
                name:'不良品数',
                type:'line',
                // itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 0, 1,]
            },
            {
                name:'设备开动率',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 2, 1, 4,  ]
            },
            {
                name:'在岗人数',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[0, 1, 3, 3, ]
            }*/
        ]

    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        station_kpi4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    station_kpi4.setOption(option);

}

function station_kpi4(){
    // 基于准备好的dom，初始化echarts实例
    var station_kpi5 = echarts.init(document.getElementById('station_kpi5'));
    charts.push(station_kpi5);

    // 指定图表的配置项和数据

    var option = {
        color:["#da70d6",'#8B78F6',"#ff7f50","#87cefa","#32cd32",],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['在岗人数','计划产量','当前产量','不良品数','设备开动率',],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['25号','26号','27号','28号',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                /*                min: function (value) {
                                    return value.min - 0.1;
                                },*/
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
            }
        ],
        series : [
            {
                name:'在岗人数',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[6, 8, 7, 7, ],
                itemStyle : { normal: {label : {show: true}}},
            }/*,
            {
                name:'当前产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 3, 4, 1, ]
            },
            {
                name:'不良品数',
                type:'line',
                // itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 0, 1,]
            },
            {
                name:'设备开动率',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 2, 1, 4,  ]
            },
            {
                name:'在岗人数',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[0, 1, 3, 3, ]
            }*/
        ]

    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        station_kpi5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    station_kpi5.setOption(option);

}

// 优化情况汇总
function station_kpi6(){
    // 基于准备好的dom，初始化echarts实例
    var station_kpi6 = echarts.init(document.getElementById('station_kpi6'));
    charts.push(station_kpi6);

    // 指定图表的配置项和数据

    var option = {
        color:["#ff7f50","#32cd32","#87cefa",'#8B78F6',"#32cd32",],
        legend: {
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },
        tooltip: {},
        xAxis: {
            data: ["未启动","未优化","优化中","已优化",],
            axisLine:{
                lineStyle:{
                    color: '#87cefa'
                },
            },
            axisLabel : {
                interval:0,
                rotate:0,

                textStyle: {
                    color: '#fff',
                    fontSize:13
                }
            }},
        yAxis: {
            axisLine:{
                lineStyle:{
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
                    return value + ""
                },
            }
        },
        barWidth:85,
        series: [{
            type: 'bar',
            data: [20,43, 85, 93],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#db3a27',
                            '#f2b63c',
                            '#85c440',
                            '#5aaadb'

                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },

        }],
        //barWidth:80,
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        // series: [
        //     {type: 'bar',
        //         barCategoryGap:'60%',
        //
        //     },
        //     {type: 'bar',
        //         barCategoryGap:'60%',
        //     },
        //     {type: 'bar',
        //         barCategoryGap:'60%',
        //     }
        // ]
    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        station_kpi6.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    station_kpi6.setOption(option);
}

function station_kpi60(){
    // 基于准备好的dom，初始化echarts实例
    var station_kpi60 = echarts.init(document.getElementById('station_kpi60'));
    charts.push(station_kpi60);

    // 指定图表的配置项和数据

    var option = {
        title: {
            show:true,
            left: "center",
            top: "top",
            text:'优化状态汇总',
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },
        color:["#ff7f50","#32cd32","#87cefa",'#8B78F6',"#32cd32",],
        legend: {
            show:true,
            x:'center',
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },

        tooltip: {},
        xAxis: {
            data: ["延期","计划中","已完成",],
            axisLine:{
                lineStyle:{
                    color: '#87cefa'
                },
            },
            axisLabel : {
                interval:0,
                rotate:0,

                textStyle: {
                    color: '#fff',
                    fontSize:13
                }
            }},
        yAxis: {
            axisLine:{
                lineStyle:{
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
                    return value + ""
                },
            }
        },
        barWidth:85,
        series: [{
            type: 'bar',
            data: [70,48, 95],
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = [
                            '#c96b2c',
                            '#3cf2ce',
                            '#1fea09',
                            '#5aaadb'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },

        }],
        //barWidth:80,
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        // series: [
        //     {type: 'bar',
        //         barCategoryGap:'60%',
        //
        //     },
        //     {type: 'bar',
        //         barCategoryGap:'60%',
        //     },
        //     {type: 'bar',
        //         barCategoryGap:'60%',
        //     }
        // ]
    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        station_kpi60.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    station_kpi60.setOption(option);
}



function line_kpi(){
    // 基于准备好的dom，初始化echarts实例
    var line_kpi = echarts.init(document.getElementById('line_kpi'));
    charts.push(line_kpi);

    // 指定图表的配置项和数据

    var option = {
        color:['#8B78F6',"#ff7f50","#87cefa","#32cd32","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['计划产量','当前产量','不良品数','OEE','线末产出率'],
            y: 'bottom',
            x:'center',
            textStyle:{
                color:'#fff',
                fontSize:12
            }
        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '10%',
            containLabel: true
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['25号','26号','27号','28号',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#fff',
                        fontSize:13
                    }
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                /*                min: function (value) {
                                    return value.min - 0.1;
                                },*/
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
        series : [
            {
                name:'计划产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[1, 2, 1, 4, ]
            },
            {
                name:'当前产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[2, 3, 4, 2, ]
            },
            {
                name:'不良品数',
                type:'line',
                // itemStyle: {normal: {areaStyle: {}}},
                data:[1,3, 2, 1,]
            },
            {
                name:'OEE',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[3, 2, 4, 3,  ]
            },
            {
                name:'线末产出率',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[2, 1, 3, 3, ]
            }
        ]

    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        station_kpi.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    line_kpi.setOption(option);

}

$(function(){
    station_kpi1();
    station_kpi2();
    station_kpi3();
    station_kpi4();
    station_kpi6();
    station_kpi60();
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        /*$(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);*/
        // alert(activeTab);
        if(activeTab=="总览"){
            station_kpi1();
            station_kpi2();
            station_kpi3();
            station_kpi4();
            station_kpi6();
            station_kpi60();
        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}