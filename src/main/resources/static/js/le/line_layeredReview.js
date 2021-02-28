//定义一个全局变量接受图表，以便resize
charts0=[];
// 计划产量和当前产量
function line_kpi1(){
    // 基于准备好的dom，初始化echarts实例
    line_kpi1 = echarts.init(document.getElementById('line_kpi1'));
    charts0.push(line_kpi1);

    // 指定图表的配置项和数据

    var option = {
        color:['#8B78F6',"#ff7f50","#87cefa","#32cd32","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['计划产量','产量','不良品数','设备开动率','在岗人数'],
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
                data:[700, 900, 600, 800, ],
                itemStyle : { normal: {label : {show: true}}},
            },
            {
                name:'产量',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[567, 702, 455,666, ],
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
        line_kpi1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    line_kpi1.setOption(option);

}
function line_kpi3(){
    // 基于准备好的dom，初始化echarts实例
    line_kpi3 = echarts.init(document.getElementById('line_kpi3'));
    charts0.push(line_kpi3);
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
                data:[6, 10, 4, 9, ],
                itemStyle : { normal: {label : {show: true}}},

            }
        ]

    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        line_kpi3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    line_kpi3.setOption(option);

}
// OEE
function line_kpi4(){
    // 基于准备好的dom，初始化echarts实例
    line_kpi4 = echarts.init(document.getElementById('line_kpi4'));
    charts0.push(line_kpi4);

    // 指定图表的配置项和数据

    var option = {
        color:["#32cd32",'#8B78F6',"#ff7f50","#87cefa","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['OEE','计划产量','当前产量','不良品数','在岗人数'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#fff',
                fontSize:16
            },
            id:'oee_legend'
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
                name:'OEE',
                type:'line',

                // itemStyle: {normal: {areaStyle: {}}},
                data:[73, 82, 91, 74,  ],
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
        line_kpi4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    line_kpi4.setOption(option);
    /* line_kpi4.on('legendselectchanged',function (params) {
         // alert("1");
         change();
     })*/

}
function line_kpi5(){
    // 基于准备好的dom，初始化echarts实例
    line_kpi5 = echarts.init(document.getElementById('line_kpi5'));
    charts0.push(line_kpi5);
    // 指定图表的配置项和数据
    var option = {
        color:["#da70d6",'#8B78F6',"#ff7f50","#87cefa","#32cd32",],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['线末产出率','计划产量','当前产量','不良品数','设备开动率',],
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
                name:'线末产出率',
                type:'line',
                // itemStyle: {normal: {areaStyle: {}}},
                data:[90, 91, 83, 93, ],
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
        line_kpi5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    line_kpi5.setOption(option);
}

// 优化情况汇总
function line_kpi6(){
    // 基于准备好的dom，初始化echarts实例
    var line_kpi6 = echarts.init(document.getElementById('line_kpi6'));
    charts0.push(line_kpi6);
    // 指定图表的配置项和数据
    var option = {
        title: {
            show:true,
            left: "center",
            top: "top",
            text:'优化进度统计',
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
        line_kpi6.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    line_kpi6.setOption(option);
}
function line_kpi60(){
    // 基于准备好的dom，初始化echarts实例
    var line_kpi60 = echarts.init(document.getElementById('line_kpi60'));
    charts0.push(line_kpi60);

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
            data: [10,88, 45],
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
    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        line_kpi60.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    line_kpi60.setOption(option);
}


function line_kpi(){
    // 基于准备好的dom，初始化echarts实例
    var line_kpi = echarts.init(document.getElementById('line_kpi'));
    charts0.push(line_kpi);

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
        line_kpi.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    line_kpi.setOption(option);
}
// 废品率
function line_kpi7(){
    line_kpi7 = echarts.init(document.getElementById('line_kpi7'));
    charts.push(line_kpi7);
    var option = {
        color:["#da70d6","#32cd32",'#8B78F6',"#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['废品率'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}%"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['部件A','部件B','部件C','部件D','部件E',],
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
                name:'废品率',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
            },
        ]
    };


    setInterval(function () {
        option.series[0].data =  cp_reject_rate//改这里

        line_kpi7.setOption(option, true);
    },500);
    line_kpi7.setOption(option);
}
// 停机时间
function line_kpi8(){
    line_kpi8 = echarts.init(document.getElementById('line_kpi8'));
    charts.push(line_kpi8);
    var option = {
        color:["#ff7f50","#32cd32",'#8B78F6',"#87cefa","#da70d6"],
        legend: {
            data:['停机时间'],
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
            bottom: '5%',
            containLabel: true
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}%"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['部件A','部件B','部件C','部件D','部件E',],
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
                name:'停机时间',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
            },
        ]
    };
    setInterval(function () {
        option.series[0].data =  cp_reject_rate//改这里
        line_kpi8.setOption(option, true);
    },500);
    line_kpi8.setOption(option);
}


// 旧方案
/*function change(){
    $("#line_kpi1,#line_kpi3,#line_kpi4,#line_kpi5").removeClass();
    if($("#line_kpi7_div, #line_kpi8_div").is(":hidden")) {
        // alert("2");
        $("#line_kpi1,#line_kpi3,#line_kpi4,#line_kpi5").addClass("div_height_layered_smaller");
        line_kpi1.resize();
        line_kpi3.resize();
        line_kpi4.resize();
        line_kpi5.resize();
        // $("div:hidden").show();
        $("#line_kpi7_div, #line_kpi8_div").show();
        line_kpi7();
        line_kpi8();
    } else {
        $("#line_kpi7_div, #line_kpi8_div").hide();
        $("#line_kpi1,#line_kpi3,#line_kpi4,#line_kpi5").addClass("div_height_layered_small");
        line_kpi1.resize();
        line_kpi3.resize();
        line_kpi4.resize();
        line_kpi5.resize();
    }
}*/
$(function(){
    line_kpi1();
    line_kpi3();
    line_kpi4();
    line_kpi5();
    line_kpi6();
    line_kpi60();

    //************* OEE  *************
    //---------------
    var line_kpi9 = echarts.init(document.getElementById('line_kpi9'));
    option9 = {
        color:["#da70d6","#32cd32",'#8B78F6',"#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['废品率'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#000',
                fontSize:16
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}%"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['部件A','部件B','部件C','部件D','部件E',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#000',
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
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#000'
                    },
                    formatter: function (value) {
                        return value + "%"
                    },
                },
            }
        ],
        series : [
            {
                name:'废品率',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
            },
        ]
    };
    setInterval(function () {

        line_kpi9.setOption(option9, true);
    },500);
    line_kpi9.setOption(option9);

    var line_kpi10 = echarts.init(document.getElementById('line_kpi10'));
    option10 = {
        color:["#ff7f50","#32cd32",'#8B78F6',"#87cefa","#da70d6"],
        legend: {
            data:['停机时间'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#000',
                fontSize:16
            }
        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['部件A','部件B','部件C','部件D','部件E',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#000',
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
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#000'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
            }
        ],
        series : [
            {
                name:'停机时间',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,77],
            },
        ]
    };
    setInterval(function () {


        line_kpi10.setOption(option10, true);
    },500);
    line_kpi10.setOption(option10);

    //************* 计划产量和当前产量  *************
    //---------------
    var line_kpi11 = echarts.init(document.getElementById('line_kpi11'));
    option11 = {
        color:['#8B78F6',"#ff7f50","#da70d6","#32cd32","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['计划产量'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#000',
                fontSize:16
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['部件A','部件B','部件C','部件D','部件E',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#000',
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
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#000'
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
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,45],
            },
        ]
    };
    setInterval(function () {
        line_kpi11.setOption(option11, true);
    },500);
    line_kpi11.setOption(option11);

    var line_kpi12 = echarts.init(document.getElementById('line_kpi12'));
    option12 = {
        color:["#ff7f50","#32cd32",'#8B78F6',"#87cefa","#da70d6"],
        legend: {
            data:['产量'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#000',
                fontSize:16
            }
        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['部件A','部件B','部件C','部件D','部件E',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#000',
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
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#000'
                    },
                    formatter: function (value) {
                        return value + ""
                    },
                },
            }
        ],
        series : [
            {
                name:'产量',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,88],
            },
        ]
    };
    setInterval(function () {
        line_kpi12.setOption(option12, true);
    },500);
    line_kpi12.setOption(option12);

    //************* 不良品数  *************
    //---------------
    var line_kpi13 = echarts.init(document.getElementById('line_kpi13'));
    option13 = {
        color:["#ff7f50","#32cd32",'#8B78F6',"#87cefa","#da70d6"],
        legend: {
            data:['不良品数'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#000',
                fontSize:16
            }
        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['部件A','部件B','部件C','部件D','部件E',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#000',
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
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#000'
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
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,88],
            },
        ]
    };
    setInterval(function () {
        line_kpi13.setOption(option13, true);
    },500);
    line_kpi13.setOption(option13);

    //************* 线末出产率  *************
    //---------------
    var line_kpi14 = echarts.init(document.getElementById('line_kpi14'));
    option14 = {
        color:["#ff7f50","#32cd32",'#8B78F6',"#87cefa","#da70d6"],
        legend: {
            data:['不良品数'],
            /*y: 'bottom',*/
            x:'center',
            textStyle:{
                color:'#000',
                fontSize:16
            }
        },
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}"
        },
        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['部件A','部件B','部件C','部件D','部件E',],
                axisLine:{
                    lineStyle:{
                        color: '#87cefa'
                    },
                },
                axisLabel : {
                    interval:0,
                    rotate:40,

                    textStyle: {
                        color: '#000',
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
                splitLine: {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#000'
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
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,88],
            },
        ]
    };
    setInterval(function () {
        line_kpi14.setOption(option14, true);
    },500);
    line_kpi14.setOption(option14);




    $('#line_kpi1').on('click', function() {

        layer.open({
            title:'该产线下工位数据展示',
            type: 1,
            shade: false,
            area: ['820px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#line_layer_quantity")

        });

    });
    $('#line_kpi3').on('click', function() {

        layer.open({
            title:'该产线下工位数据展示',
            type: 1,
            shade: false,
            area: ['420px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#line_layer_notgood")
        });
    });


    $('#line_kpi4').on('click', function() {

        layer.open({
            title:'该产线下工位数据展示',
            type: 1,
            shade: false,
            area: ['820px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#line_layer_oee")

        });

    });
    /*$('#line_kpi5').on('click', function() {

        layer.open({
            title:'该产线下工位数据展示',
            type: 1,
            shade: false,
            area: ['820px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#line_layer_xianmo")

        });

    });*/






    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        /*$(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);*/
        if(activeTab=="总览"){
            line_kpi1();
            line_kpi3();
            line_kpi4();
            line_kpi5();
            line_kpi6();
            line_kpi60();
        }
    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}