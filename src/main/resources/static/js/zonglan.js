

$(function zonglan_factory (){

    var arr = [60, 80, 73, 68, 85];
    var i = -1;

    // 基于准备好的dom，初始化echarts实例
    var myChart_zonglan_factory = echarts.init(document.getElementById('zonglan_factory'));
    charts.push(myChart_zonglan_factory);

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
            data: ['当日', '月平均'],

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
                /*formatter: '{b}',*/
                formatter: function (a) {
                    i++;
                    return `${a}\n${arr[i]}`;
                },
/*                formatter: function (a) {
                    i++;
                    return `${a}\n`;
                }*/
            },
            indicator: [
                { name: '人员KPI', max: 100},
                { name: '设备KPI', max: 100},
                { name: '过程KPI', max: 100},
                { name: '质量KPI', max: 100},
                { name: '物流KPI', max: 100},

            ]
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: arr,
                     name: '当日',
                    /*label: {
                        normal: {
                            show: true,
                            position: 'left',
                            fontStyle:'normal',
                            fontSize:20,
                            // fontWeight:'bold',
                            // color:"#87cefa",
                            formatter:function(params) {
                                return params.value;
                            }
                        }
                    }*/


                },
                {
                    value: [75, 75, 90, 50, 72],
                     name: '月平均',
                    /*label: {
                        normal: {
                            show: true,
                            position: 'right',
                            fontStyle:'normal',
                            fontSize:16,
                            // fontWeight:'normal',
                            // color:"#fff",
                            formatter:function(params) {
                                return params.value;
                            }
                        }
                    }*/
                }
            ]
        }],
    };

/*    setInterval(function () {
       // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
       //  option.radar.name.formatter(1,1)
       //  arr = [90,90,90,90,90];
        myChart_zonglan_factory.setOption(option, true);
    },500);*/
    // 使用刚指定的配置项和数据显示图表。
    myChart_zonglan_factory.setOption(option);


})


$(function zonglan_line (){

    var arr1 = [90, 80, 73, 68, 85];
    var i1 = -1;
    // 基于准备好的dom，初始化echarts实例
    var myChart_zonglan_line= echarts.init(document.getElementById('zonglan_line'));
    charts.push(myChart_zonglan_line);

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
                formatter: function (a) {
                    i1++;
                    return `${a}\n${arr1[i1]}`;
                }
            },
            indicator: [
                { name: '人员KPI', max: 100},
                { name: '设备KPI', max: 100},
                { name: '过程KPI', max: 100},
                { name: '质量KPI', max: 100},
                { name: '物流KPI', max: 100},

            ]
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: arr1,
                     name: '当日'
                },
                {
                    value: [75, 75, 90, 50, 72],
                     name: '月平均'
                }
            ]
        }]
    };

/*    setInterval(function () {
       // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
        myChart_zonglan_line.setOption(option, true);
    },500);*/
    // 使用刚指定的配置项和数据显示图表。
    myChart_zonglan_line.setOption(option);


})


/*$(function zonglan_workshop (){
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
                formatter: function (a) {
                    i++;
                    return `${a}\n${arr[i]}`;
                },
            },

            indicator: [
                { name: '人员KPI', max: 100},
                { name: '设备KPI', max: 100},
                { name: '过程KPI', max: 100},
                { name: '质量KPI', max: 100},
                { name: '物流KPI', max: 100},

            ]
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [60, 80, 73, 68, 85],
                     name: '当日'
                },
                {
                    value: [75, 75, 90, 50, 72],
                     name: '月平均'
                }
            ]
        }]
    };

/!*    setInterval(function () {
       // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
        myChart_zonglan_workshop.setOption(option, true);
    },500);*!/
    // 使用刚指定的配置项和数据显示图表。
    myChart_zonglan_workshop.setOption(option);


})*/

$(function zonglan_workstation (){
    var arr = [60, 80, 73, 68, 85];
    var i = -1;
    // 基于准备好的dom，初始化echarts实例
    var myChart_zonglan_workstation= echarts.init(document.getElementById('zonglan_workstation'));
    charts.push(myChart_zonglan_workstation);

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
                formatter: function (a) {
                    i++;
                    return `${a}\n${arr[i]}`;
                },
            },

            indicator: [
                { name: '人员KPI', max: 100},
                { name: '设备KPI', max: 100},
                { name: '过程KPI', max: 100},
                { name: '质量KPI', max: 100},
                { name: '物流KPI', max: 100},

            ]
        },
        series: [{
            // name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [
                {
                    value: [60, 80, 73, 68, 85],
                     name: '当日'
                },
                {
                    value: [75, 75, 90, 50, 72],
                     name: '月平均'
                }
            ]
        }]
    };

/*    setInterval(function () {
       // option.series[0].data[0].value =  $("#quality_A_M1").attr("data-value")*100;
        myChart_zonglan_workstation.setOption(option, true);
    },500);*/
    // 使用刚指定的配置项和数据显示图表。
    myChart_zonglan_workstation.setOption(option);


})