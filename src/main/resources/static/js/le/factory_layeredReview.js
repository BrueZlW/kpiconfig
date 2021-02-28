//定义一个全局变量接受图表，以便resize
charts=[];

// 计划产量和当前产量
function factory_kpi1(){
    // 基于准备好的dom，初始化echarts实例
    factory_kpi1 = echarts.init(document.getElementById('factory_kpi1'));
    charts.push(factory_kpi1);

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
        factory_kpi1.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    factory_kpi1.setOption(option);

}

// 成品一检合格数
function factory_kpi2(){
    // 基于准备好的dom，初始化echarts实例
    var factory_kpi3 = echarts.init(document.getElementById('factory_kpi3'));
    charts.push(factory_kpi3);

    // 指定图表的配置项和数据

    var option = {
        color:["#87cefa",'#8B78F6',"#ff7f50","#32cd32","#da70d6"],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['成品一检合格数','计划产量','当前产量','设备开动率','在岗人数'],
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
                name:'成品一检合格数',
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
        factory_kpi3.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    factory_kpi3.setOption(option);

}
// OEE
function factory_kpi3(){
    // 基于准备好的dom，初始化echarts实例
    var factory_kpi4 = echarts.init(document.getElementById('factory_kpi4'));
    charts.push(factory_kpi4);

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
            }
        ]

    };
    setInterval(function () {
        // option.series[0].data =  [80,90,85,90];//改这里
        // option.series[1].data =  [1.40, 1.35,1.33,1.46];
        factory_kpi4.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    factory_kpi4.setOption(option);

}
//按时交货率
function factory_kpi4(){
    // 基于准备好的dom，初始化echarts实例
    var factory_kpi5 = echarts.init(document.getElementById('factory_kpi5'));
    charts.push(factory_kpi5);

    // 指定图表的配置项和数据

    var option = {
        color:["#da70d6",'#8B78F6',"#ff7f50","#87cefa","#32cd32",],
        tooltip : {
            trigger: 'item',
            formatter: "{a}<br/>{b}<br/>{c}元"
        },
        legend: {
            data:['按时交货率','计划产量','当前产量','不良品数','设备开动率',],
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
                name:'按时交货率',
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
        factory_kpi5.setOption(option, true);
    },500);
    // 使用刚指定的配置项和数据显示图表。
    factory_kpi5.setOption(option);

}








$(function(){
    factory_kpi1();
    factory_kpi2();
    factory_kpi3();
    factory_kpi4();



    //************* 计划产量和产量  *************
    var factory_kpi20 = echarts.init(document.getElementById('factory_kpi20'));
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
                data:[40,70,70,60,55],
            },
        ]
    };
    setInterval(function () {
        factory_kpi20.setOption(option11, true);
    },500);
    factory_kpi20.setOption(option11);

    var factory_kpi21 = echarts.init(document.getElementById('factory_kpi21'));
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
                data:[55,90,40,55,60],
            },
        ]
    };
    setInterval(function () {
        factory_kpi21.setOption(option12, true);
    },500);
    factory_kpi21.setOption(option12);





    //************* 成品一检合格率  *************
    var factory_kpi22 = echarts.init(document.getElementById('factory_kpi22'));
    option13 = {
        color:["#87cefa"],
        legend: {
            data:['成品一检合格数'],
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
                name:'成品一检合格数',
                type:'bar',
                barWidth:30,
                data:[77,80,80,70,88],
            },
        ]
    };
    setInterval(function () {
        factory_kpi22.setOption(option13, true);
    },500);
    factory_kpi22.setOption(option13);

    //************* OEE  *************
    //---------------
    var factory_kp23 = echarts.init(document.getElementById('factory_kp23'));
    option9 = {
        color:["#32cd32"],
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
        factory_kp23.setOption(option9, true);
    },500);
    factory_kp23.setOption(option9);

    var factory_kpi24 = echarts.init(document.getElementById('factory_kpi24'));
    option10 = {
        color:['#8B78F6'],
        legend: {
            data:['OEE'],
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
                name:'OEE',
                type:'bar',
                barWidth:30,
                data:[60,80,70,50,77],
            },
        ]
    };
    setInterval(function () {
        factory_kpi24.setOption(option10, true);
    },500);
    factory_kpi24.setOption(option10);

    //************* 车间产量 *************
    //---------------
    var factory_kpi25 = echarts.init(document.getElementById('factory_kpi25'));
    option14 = {
        color:["#da70d6"],
        legend: {
            data:['车间产量'],
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
                name:'车间产量',
                type:'bar',
                barWidth:30,
                data:[66,77,72,70,55],
            },
        ]
    };
    setInterval(function () {
        factory_kpi25.setOption(option14, true);
    },500);
    factory_kpi25.setOption(option14);



    $('#factory_kpi1').on('click', function() {
        // alert("111");
        layer.open({
            title:'该工厂下车间数据展示',
            type: 1,
            shade: false,
            area: ['820px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#factory_layer_quantity")

        });

    });

    $('#factory_kpi3').on('click', function() {

        layer.open({
            title:'该工厂下车间数据展示',
            type: 1,
            shade: false,
            area: ['420px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#factory_layer_onegood")
        });
    });
    $('#factory_kpi4').on('click', function() {

        layer.open({
            title:'该工厂下车间数据展示',
            type: 1,
            shade: false,
            area: ['820px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#factory_layer_oee")

        });

    });
    $('#factory_kpi5').on('click', function() {

        layer.open({
            title:'该工厂下车间数据展示',
            type: 1,
            shade: false,
            area: ['420px', '430px'], //宽高
            shadeClose: false, //点击遮罩关闭
            content: $("#factory_layer_jiaohuo")

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
            factory_kpi1();
            factory_kpi2();
            factory_kpi3();
            factory_kpi4();

        }

    });
});
//resize图表
window.onresize=function () {
    for(var i=0;i<charts.length;i++){
        charts[i].resize();
    }
}