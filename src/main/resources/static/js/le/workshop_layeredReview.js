//定义一个全局变量接受图表，以便resize
charts=[];

// 计划产量
function workshop_kpi1(){
    // 基于准备好的dom，初始化echarts实例
    var workshop_kpi1 = echarts.init(document.getElementById('workshop_kpi1'));
    charts.push(workshop_kpi1);

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
                data:[700, 800, 600, 900, ],
                itemStyle : { normal: {label : {show: true}}},
            },
            {
                name:'产量',
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
        workshop_kpi1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    workshop_kpi1.setOption(option);

}
// 当前产量
// function workshop_kpi2(){
//     // 基于准备好的dom，初始化echarts实例
//     var workshop_kpi2 = echarts.init(document.getElementById('workshop_kpi2'));
//     charts.push(workshop_kpi2);
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
//         workshop_kpi2.setOption(option, true);
//     },500);*/
//     // 使用刚指定的配置项和数据显示图表。
//     workshop_kpi2.setOption(option);
//
// }
// 不良品数
function workshop_kpi2(){
    // 基于准备好的dom，初始化echarts实例
    var workshop_kpi3 = echarts.init(document.getElementById('workshop_kpi3'));
    charts.push(workshop_kpi3);

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
                data:[10, 15, 9, 12],
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
        workshop_kpi3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    workshop_kpi3.setOption(option);

}
// OEE
function workshop_kpi3(){
    // 基于准备好的dom，初始化echarts实例
    var workshop_kpi4 = echarts.init(document.getElementById('workshop_kpi4'));
    charts.push(workshop_kpi4);

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
                name:'OEE',
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
        workshop_kpi4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    workshop_kpi4.setOption(option);

}

function workshop_kpi4(){
    // 基于准备好的dom，初始化echarts实例
    var workshop_kpi5 = echarts.init(document.getElementById('workshop_kpi5'));
    charts.push(workshop_kpi5);

    // 指定图表的配置项和数据

    var option = {
        color:["#da70d6",'#8B78F6',"#ff7f50","#87cefa","#32cd32",],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['库存','计划产量','当前产量','不良品数','设备开动率',],
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
                name:'库存',
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
        workshop_kpi5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    workshop_kpi5.setOption(option);

}


function zonglan_workshop(){
    var arr = [60, 80, 73, 68, 85];
    var i = -1;
    // 基于准备好的dom，初始化echarts实例
    var myChart_zonglan_workshop= echarts.init(document.getElementById('zonglan_workshop'));
    charts.push(myChart_zonglan_workshop);
    // 指定图表的配置项和数据
    var option = {
        color:["#87cefa","#ff7f50","#32cd32","#da70d6",'#8B78F6'],
        title: {
            text: ''
        },
        tooltip: {},
        legend: {

            textStyle: {
                color:'#fff'},
            data: ['当日', '月平均']
        },
        radar: {
            // shape: 'circle',

            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#034c6a',
                    borderRadius: 3,
                    padding: [3, 5],
                    fontSize:16
                },
                /*formatter: function (a) {
                    i++;
                    return `${a}\n${arr[i]}`;
                },*/
            },


            indicator: [
                { name: '产量', max: 1},
                { name: '质量', max: 1},
                { name: '成本', max: 1},
                { name: '交付', max: 1},
                { name: '安全', max: 1},
                { name: '士气', max: 1},
            ],
            /*axisLabel:{
                show:true
            },*/
            triggerEvent: true //开启雷达图的边角名称可点击
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            itemStyle : { normal: {label : {show: true}}},
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [0.9, 0.6, 0.5, 0.9, 0.5,0.9],
                    name: '当日'
                },
                {
                    value: [0.8, 0.7, 0.8, 0.7, 0.8,0.7],
                    name: '月平均'
                }
            ]
        }]
    };


    /*    setInterval(function () {
           // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
            myChart_zonglan_workshop.setOption(option, true);
        },500);*/
    // 使用刚指定的配置项和数据显示图表。
    myChart_zonglan_workshop.setOption(option);

    myChart_zonglan_workshop.on('click', function (params) {
        console.log(params);
        var reg1 = /产量/;
        if(reg1.test(params.name)){ //判断点击文字
            // alert("点击人员KPI");
            layer.open({
                title:'产量',
                type: 1,
                shade: false,
                area: ['820px', '430px'], //宽高
                shadeClose: false, //点击遮罩关闭
                content: $("#chanliang")
            });
        }
        var reg2 = /质量/;
        if(reg2.test(params.name)){ //判断点击文字
            // alert("点击人员KPI");
            layer.open({
                title:'质量',
                type: 1,
                shade: false,
                area: ['820px', '430px'], //宽高
                shadeClose: false, //点击遮罩关闭
                content: $("#zhiliang")

            });
        }
        var reg3 = /士气/;
        if(reg3.test(params.name)){ //判断点击文字
            // alert("点击人员KPI");
            layer.open({
                title:'士气',
                type: 1,
                shade: false,
                area: ['420px', '430px'], //宽高
                shadeClose: false, //点击遮罩关闭
                content: $("#shiqi")

            });
        }
        var reg4 = /成本/;
        if(reg4.test(params.name)){ //判断点击文字
            // alert("点击人员KPI");
            layer.open({
                title:'成本',
                type: 1,
                shade: false,
                area: ['1240px', '430px'], //宽高
                // offset: ['100px', '50px'],
                shadeClose: false, //点击遮罩关闭
                content: $("#chengbeng")

            });
        }
        var reg5 = /安全/;
        if(reg5.test(params.name)){ //判断点击文字
            // alert("点击人员KPI");
            layer.open({
                title:'安全',
                type: 1,
                shade: false,
                area: ['420px', '430px'], //宽高
                shadeClose: false, //点击遮罩关闭
                content: $("#anquan")

            });
        }
        var reg6 = /交付/;
        if(reg6.test(params.name)){ //判断点击文字
            // alert("点击人员KPI");
            layer.open({
                title:'交付',
                type: 1,
                shade: false,
                area: ['420px', '430px'], //宽高
                shadeClose: false, //点击遮罩关闭
                content: $("#jiaofu")

            });
        }
/*        if (params.componentIndex === 0) {
            alert("点击人员KPI")
        }*/
    })

}

function test() {
    alert("测试别的js文件中的函数使用")
}

$(function(){
    zonglan_workshop();
    workshop_kpi1();
    workshop_kpi2();
    workshop_kpi3();
    workshop_kpi4();

    //workshop_kpi6();
    //workshop_kpi60();

    //************* 计划产量  *************
    //---------------
    var shop_kpi11 = echarts.init(document.getElementById('shop_kpi11'));
    options11 = {
        color:["#32cd32",'#8B78F6',"#ff7f50","#87cefa",],
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
                name:'计划产量',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
            },
        ]
    };
    setInterval(function () {

        shop_kpi11.setOption(options11, true);
    },500);
    shop_kpi11.setOption(options11);

    //************* 产量  *************
    //---------------
    var shop_kpi12 = echarts.init(document.getElementById('shop_kpi12'));
    options12 = {
        color:["#da70d6","#32cd32",'#8B78F6',"#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['产量'],
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
                name:'产量',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
            },
        ]
    };
    setInterval(function () {

        shop_kpi12.setOption(options12, true);
    },500);
    shop_kpi12.setOption(options12);


    //************* 不良品数  *************
    //---------------
    var shop_kpi13 = echarts.init(document.getElementById('shop_kpi13'));
    options13 = {
        color:['#8B78F6',"#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['不良品数'],
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
                name:'不良品数',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
            },
        ]
    };
    setInterval(function () {

        shop_kpi13.setOption(options13, true);
    },500);
    shop_kpi13.setOption(options13);

    //************* 废品率  *************
    //---------------
    var shop_kpi14 = echarts.init(document.getElementById('shop_kpi14'));
    options14 = {
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

        shop_kpi14.setOption(options14, true);
    },500);
    shop_kpi14.setOption(options14);

    //************* 停机时间  *************
    //---------------
    var shop_kpi15 = echarts.init(document.getElementById('shop_kpi15'));
    options15 = {
        color:["#D7DF01","#32cd32",'#8B78F6',"#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['停机时间'],
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
                data : ['设备A','设备B','设备C','设备D','设备E',],
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
                name:'停机时间',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
            },
        ]
    };
    setInterval(function () {

        shop_kpi15.setOption(options15, true);
    },500);
    shop_kpi15.setOption(options15);

    //************* 库存  *************
    //---------------
    var shop_kpi16 = echarts.init(document.getElementById('shop_kpi16'));
    options16 = {
        color:["#0431B4",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['库存'],
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
                name:'库存',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
            },
        ]
    };
    setInterval(function () {

        shop_kpi16.setOption(options16, true);
    },500);
    shop_kpi16.setOption(options16);

    //************* 产量  *************
    //---------------
    var shop_kpi17 = echarts.init(document.getElementById('shop_kpi17'));
    options17 = {
        color:["#87cefa","#da70d6","#32cd32",'#8B78F6',"#ff7f50",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['产量'],
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
                        return value + "%"
                    },
                },
            }
        ],
        series : [
            {
                name:'产量',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi17.setOption(options17, true);
    },500);
    shop_kpi17.setOption(options17);


    //************* oee  *************
    var shop_kpi18 = echarts.init(document.getElementById('shop_kpi18'));
    option18 = {
        color:["#32cd32",'#8B78F6',"#ff7f50","#87cefa","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}"
        },
        legend: {
            data:['OEE','计划产量','当前产量','不良品数','在岗人数'],
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
                /*                min: function (value) {
                                    return value.min - 0.1;
                                },*/
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
                name:'OEE',
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
        shop_kpi18.setOption(option18, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    shop_kpi18.setOption(option18);

    //************* 质量投诉次数  *************
    //---------------
    var shop_kpi19 = echarts.init(document.getElementById('shop_kpi19'));
    options19 = {
        color:["#87cefa","#da70d6","#32cd32",'#8B78F6',"#ff7f50",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['质量投诉次数'],
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
                name:'质量投诉次数',
                type:'bar',
                barWidth:30,
                data:[6,8,7,6,6],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi19.setOption(options19, true);
    },500);
    shop_kpi19.setOption(options19);

    //************* 质量造成损失  *************
    //---------------
    var shop_kpi20 = echarts.init(document.getElementById('shop_kpi20'));
    options20 = {
        color:["#da70d6","#87cefa","#32cd32",'#8B78F6',"#ff7f50",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['质量造成损失'],
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
                name:'质量造成损失',
                type:'line',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi20.setOption(options20, true);
    },500);
    shop_kpi20.setOption(options20);

    //************* 离职率  *************
    //---------------
    var shop_kpi21 = echarts.init(document.getElementById('shop_kpi21'));
    options21 = {
        color:["#da70d6","#32cd32",'#8B78F6',"#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['离职率'],
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
                        color: '#000'
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
                name:'离职率',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi21.setOption(options21, true);
    },500);
    shop_kpi21.setOption(options21);

    //************* 材料得率  *************
    //---------------
    var shop_kpi22 = echarts.init(document.getElementById('shop_kpi22'));
    options22 = {
        color:["#da70d6","#32cd32",'#8B78F6',"#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['材料得率'],
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
                        color: '#000'
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
                name:'材料得率',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi22.setOption(options22, true);
    },500);
    shop_kpi22.setOption(options22);

    //************* 万元产值能耗  *************
    //---------------
    var shop_kpi23 = echarts.init(document.getElementById('shop_kpi23'));
    options23 = {
        color:["#32cd32","#da70d6",'#8B78F6',"#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['万元产值能耗'],
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
                        color: '#000'
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
                name:'万元产值能耗',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi23.setOption(options23, true);
    },500);
    shop_kpi23.setOption(options23);

    //************* 制造费用  *************
    //---------------
    var shop_kpi24 = echarts.init(document.getElementById('shop_kpi24'));
    options24 = {
        color:['#8B78F6',"#32cd32","#da70d6","#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['制造费用'],
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
                        color: '#000'
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
                name:'制造费用',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi24.setOption(options24, true);
    },500);
    shop_kpi24.setOption(options24);

    //************* 材料设计利用率  *************
    //---------------
    var shop_kpi25 = echarts.init(document.getElementById('shop_kpi25'));
    options25 = {
        color:["#ff7f50","#da70d6","#32cd32",'#8B78F6',"#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['材料设计利用率'],
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
                        color: '#000'
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
                name:'材料设计利用率',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi25.setOption(options25, true);
    },500);
    shop_kpi25.setOption(options25);

    //************* 一次合格率  *************
    //---------------
    var shop_kpi26 = echarts.init(document.getElementById('shop_kpi26'));
    options26 = {
        color:["#87cefa","#ff7f50","#da70d6","#32cd32",'#8B78F6',],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['一次合格率'],
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
                        color: '#000'
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
                name:'一次合格率',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi26.setOption(options26, true);
    },500);
    shop_kpi26.setOption(options26);

    //************* 人员生产效率  *************
    //---------------
    var shop_kpi27 = echarts.init(document.getElementById('shop_kpi27'));
    options27 = {
        color:["#ff7f50","#da70d6","#32cd32",'#8B78F6',"#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['人员生产效率'],
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
                        color: '#000'
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
                name:'人员生产效率',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi27.setOption(options27, true);
    },500);
    shop_kpi27.setOption(options27);

    //************* 工装夹具消耗  *************
    //---------------
    var shop_kpi28 = echarts.init(document.getElementById('shop_kpi28'));
    options28 = {
        color:['#8B78F6',"#32cd32","#da70d6","#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['工装夹具消耗'],
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
                        color: '#000'
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
                name:'工装夹具消耗',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi28.setOption(options28, true);
    },500);
    shop_kpi28.setOption(options28);

    //************* 连续安全生产天数  *************
    //---------------
    var shop_kpi29 = echarts.init(document.getElementById('shop_kpi29'));
    options29 = {
        color:['#8B78F6',"#32cd32","#da70d6","#ff7f50","#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['连续安全生产天数'],
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
                        color: '#000'
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
                name:'连续安全生产天数',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi29.setOption(options29, true);
    },500);
    shop_kpi29.setOption(options29);

    //************* 准时交付率  *************
    //---------------
    var shop_kpi30 = echarts.init(document.getElementById('shop_kpi30'));
    options30 = {
        color:["#ff7f50","#da70d6","#32cd32",'#8B78F6',"#87cefa",],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['准时交付率'],
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
                        color: '#000'
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
                name:'准时交付率',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi30.setOption(options30, true);
    },500);
    shop_kpi30.setOption(options30);

    //************* 生产计划完成率  *************
    //---------------
    var shop_kpi31 = echarts.init(document.getElementById('shop_kpi31'));
    options31 = {
        color:["#87cefa","#ff7f50","#da70d6","#32cd32",'#8B78F6',],
        grid:{
            left: '5%',
            right: '5%',
            bottom: '5%',
            containLabel: true
        },
        legend: {
            data:['生产计划完成率'],
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
                        color: '#000'
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
                name:'生产计划完成率',
                type:'bar',
                barWidth:31,
                data:[60,80,70,50,60],
                itemStyle : { normal: {label : {show: true}}},
            },
        ]
    };
    setInterval(function () {

        shop_kpi31.setOption(options31, true);
    },500);
    shop_kpi31.setOption(options31);


    //第一个获取的是已经在总览界面显示的图表对象，不是函数；第二个是弹窗对象
    $('#workshop_kpi1').on('click', function() {
        layer.open({
            title:'该车间下产线数据展示',
            type: 1,
            shade: false,
            area: ['820px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#shop_layer_quantity")
        });

    });

    $('#workshop_kpi3').on('click', function() {

        layer.open({
            title:'该车间下产线数据展示',
            type: 1,
            shade: false,
            area: ['420px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#shop_layer_notgood")

        });
    });

    $('#workshop_kpi4').on('click', function() {

        layer.open({
            title:'该车间下产线数据展示',
            type: 1,
            shade: false,
            area: ['820px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#shop_layer_oee")

        });

    });

    $('#workshop_kpi5').on('click', function() {

        layer.open({
            title:'该车间下产线数据展示',
            type: 1,
            shade: false,
            area: ['420px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#shop_layer_storage")

        });

    });

    $('#shop_kpi22').on('click', function() {


        layer.open({
            title:'材料得率',
            type: 1,
            shade: false,
            area: ['820px', '430px'], //宽高
            offset: ['100px'],
            shadeClose: false, //点击遮罩关闭
            content: $("#cailiaodelv")

        });
    });

    $('#shop_kpi24').on('click', function() {


        layer.open({
            title:'制造费用',
            type: 1,
            shade: false,
            area: ['820px', '430px'], //宽高
            offset: ['100px'],
            shadeClose: false, //点击遮罩关闭
            content: $("#zhizaofeiyong")

        });
    });

    $('#shop_kpi30').on('click', function() {


        layer.open({
            title:'准时交付率',
            type: 1,
            shade: false,
            area: ['420px', '430px'], //宽高
            offset: ['100px'],
            shadeClose: false, //点击遮罩关闭
            content: $("#jiaofulv")

        });
    });






    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        /*$(".active-tab span").html(activeTab);
        $(".previous-tab span").html(previousTab);*/
        // alert(activeTab);
        if(activeTab=="总览"){
            zonglan_workshop();
            workshop_kpi1();
            workshop_kpi2();
            workshop_kpi3();
            workshop_kpi4();

        }
    });
});

//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}