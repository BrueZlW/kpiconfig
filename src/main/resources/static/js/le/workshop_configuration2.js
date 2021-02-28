/*json数据读取*/

//level = "workshop";
function ajaxForJson(jsonname) {

    $.ajax({
        url: "json/"+jsonname+".json", //json文件位置
        type: "GET", //请求方式为get
        dataType: "json", //返回数据格式为json
        async : false, // 同步请求，请将此选项设置为 false。注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
        success: function(data) { //请求成功完成后要执行的方法
            // console.log(data);
            ajaxData = data;
            // localStorage.setItem('ajaxData',data);
            generateDiv(data);
             // 设置成全局变量供调用
        }
    })
}
//获取当前层级
function geturlname(){

    //var jsonarg;
    var urlname=window.location.href;
    //console.log(urlname);
    if(urlname.search("factory") != -1 ){
        jsonarg="factory";
    }
    else if(urlname.search("workshop") != -1){
        jsonarg="workshop";
        //console.log(jsonarg);
    }
    else if(urlname.search("line") != -1){
        jsonarg="line";
    }
    else if(urlname.search("workstation") != -1){
        jsonarg="workstation";
    }

}

// 根据KPI个数，生成对应个数的div
function generateDiv(data) {
    for (var key in data) {
        var num = data[key].length;
        if (key == "change") {
            switch (num) {
                case 9:
                    generateNightDivSimple(key, data[key]);
                    break;
                case 10:
                    generateTenDivSimple(key, data[key]);
                    break;
                case 11:
                    generateElevenDivSimple(key, data[key]);
                    break;
                case 12:
                    generateTwelveDivSimple(key, data[key]);
                    break;
            }
        } else {
            switch (num) {
                case 2:
                    generateTwoDiv(key, data[key]);
                    break;
                case 3:
                    genenrateThreeDiv(key, data[key]);
                    break;
                case 4:
                    generateFourDiv(key, data[key]);
                    break;
                case 5:
                    generateFiveDiv(key, data[key]);
                    break;
                case 6:
                    generateSixDiv(key, data[key]);
                    break;
                case 7:
                    generateSevenDiv(key, data[key]);
                    break;
                case 8:
                    generateEightDiv(key, data[key]);
                    break;
            }
        }

    }
}
// ------------  五个维度 生成 div --------------
// 生成2个div 带表头
function generateTwoDiv(type, KPIs) {
    var html = '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child div_height">\n' +
        '\t\t<div class="div_any_title" ><img src="images/title_1.png">' + KPIs[0].name +'</div>\n' +
        '\t\t<p id="'+ KPIs[0].id + '" class="p_chart_1"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child div_height">\n' +
        '\t\t<div class="div_any_title" ><img src="images/title_1.png">' + KPIs[1].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[1].id + '" class="p_chart_1"></p>\n' +
        '\t</div>\n' +
        '</div>';
    $("#"+ type + " > div > div").html(html);
}

// 生成3个div 带表头
function genenrateThreeDiv(type, KPIs) {
    var html = '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[0].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[0].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[1].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[1].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child div_height">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[2].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[2].id + '" class="p_chart_1"></p>\n' +
        '\t</div>\n' +
        '</div>';
    $("#"+ type + " > div > div").html(html);
}

// 生成4个div 带表头
function generateFourDiv(type, KPIs) {
    var html = '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[0].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[0].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[1].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[1].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\t\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[2].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[2].id + '" class="p_chart"></p>\n' +
        '\t</div>\t\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[3].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[3].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>';
    $("#"+ type + " > div > div").html(html);
}

// 生成5个div 带表头
function generateFiveDiv(type, KPIs) {
    var html = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[0].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[0].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[1].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[1].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child div_height">\n' +
        '\t\t<div class="div_any_title any_title_width"><img src="images/title_0.png">' + KPIs[2].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[2].id + '" class="p_chart_2"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[3].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[3].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[4].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[4].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>';
    $("#"+ type + " > div > div").html(html);
}

// 生成6个div 带表头
function generateSixDiv(type, KPIs) {
    var html = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[0].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[0].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[1].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[1].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[2].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[2].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[3].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[3].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[4].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[4].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[5].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[5].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>';
    $("#"+ type + " > div > div").html(html);
}

// 生成7个div 带表头
function generateSevenDiv(type, KPIs) {
    var html = '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[0].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[0].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[2].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[2].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[5].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[5].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[1].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[1].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[3].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[3].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[4].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[4].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[6].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[6].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>';
    $("#"+ type + " > div > div").html(html);
}

// 生成8个div 带表头
function generateEightDiv(type, KPIs) {
    var html = '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[0].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[0].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[1].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[1].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[2].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[2].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[3].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[3].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[4].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[4].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[5].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[5].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_1.png">' + KPIs[6].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[6].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '\t<div class="div_any_child">\n' +
        '\t\t<div class="div_any_title"><img src="images/title_2.png">' + KPIs[7].name +'</div>\n' +
        '\t\t<p id="'+  KPIs[7].id + '" class="p_chart"></p>\n' +
        '\t</div>\n' +
        '</div>';
    $("#"+ type + " > div > div").html(html);
}


// ------------  总览 生成 div --------------
// 9
function generateNightDivSimple(type, KPIs) {
    var html = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[0].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[1].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[2].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[3].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[4].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[5].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[6].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[7].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[8].id  + '">\n' +
        '\t</div>\n' +
        '</div>';
    $("#change").html(html);
}
// 10
function generateTenDivSimple(type, KPIs) {
    var html = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[0].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[1].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[2].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[3].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[4].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[5].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[6].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[7].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[8].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[9].id  + '">\n' +
        '\t</div>\n' +
        '</div>';
    $("#change").html(html);
}
// 11
function generateElevenDivSimple(type, KPIs) {
    var html = '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[0].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[1].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-4 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[2].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[3].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[4].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[5].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[6].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[7].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[8].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[9].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[10].id  + '">\n' +
        '\t</div>\n' +
        '</div>';
    $("#change").html(html);
}
// 12
function generateTwelveDivSimple(type, KPIs) {
    var html = '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[0].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[1].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[2].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[3].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[4].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[5].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[6].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[7].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[8].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[9].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[10].id  + '">\n' +
        '\t</div>\n' +
        '</div>\n' +
        '<div class="col-lg-3 col-md-6 col-sm-6 col-xs-12 " >\n' +
        '\t<div class="div_height_layered_small" id="'+ KPIs[11].id  + '">\n' +
        '\t</div>\n' +
        '</div>';
    $("#change").html(html);
}
//工厂总览
function zonglan_factory (){

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
                { name: '人员', max: 100},
                { name: '设备', max: 100},
                { name: '过程', max: 100},
                { name: '质量', max: 100},
                { name: '物流', max: 100},

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


}
//车间总览雷达图
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

//产线柱状图
function line_kpi6(){
    // 基于准备好的dom，初始化echarts实例
    var line_kpi6 = echarts.init(document.getElementById('line_kpi6'));

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
//工位柱状图
function station_kpi6(){
    // 基于准备好的dom，初始化echarts实例
    var station_kpi6 = echarts.init(document.getElementById('station_kpi6'));


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

$(function () {

    geturlname();
    ajaxForJson(jsonarg);
    if(jsonarg=="factory" ){
        zonglan_factory ();
    }
    else if(jsonarg=="workshop"){
        zonglan_workshop();
    }
    else if(jsonarg=="line"){
        line_kpi60();
        line_kpi6();
    }
    else if(jsonarg=="workstation"){
        station_kpi6();
        station_kpi60()
    }

    // ajaxData = localStorage.getItem('ajaxData');
    // alert("1")
    // console.log(ajaxData)
    // for (var i = 0; i < ajaxData.change.length; i++) {
    //     line(ajaxData.change[i].id, ajaxData.change[i].name, ajaxData.change[i].color);
    // }
    // 弹窗
    // $("#change > div > div").click(function () {
    //     // console.log(this.id);
    //     var str = this.id.split('_');
    //     var num = str[2];
    //     var kpiName = ajaxData.change[num].name;
    //     // console.log(str);
    //     // console.log(num);
    //     // console.log(kpiName);
    //     // console.log($("#workshop_change_output > div > div").length)
    //     // console.log($("#workshop_change_output > div > div"))
    //     if (kpiName == "计划和实际产量") {
    //         for (var i = 0; i < $("#workshop_change_output > div > div").length; i++) {
    //             var id = $("#workshop_change_output > div > div")[i].id;
    //             line(id);
    //         }
    //         layerFunction('workshop_change_output')
    //     } else if (kpiName == "oee") {
    //         for (var i = 0; i < $("#workshop_change_oee > div > div").length; i++) {
    //             var id = $("#workshop_change_oee > div > div")[i].id;
    //             line(id);
    //         }
    //         layerFunction('workshop_change_oee')
    //     }
    // });

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // 获取已激活的标签页的名称
        var activeTab = $(e.target).text();
        // 获取前一个激活的标签页的名称
        var previousTab = $(e.relatedTarget).text();
        if(activeTab=="人员KPI"){
            for (var i = 0; i < ajaxData.person.length; i++) {
                /*setInterval(function () {
                    data0 = Math.floor(Math.random()*10);
                },3000);*/
                if (ajaxData.person[i].seriesType == "line") {
                    line(ajaxData.person[i].id, ajaxData.person[i].name, ajaxData.person[i].color);
                }
                else if(ajaxData.person[i].seriesType=="gauge"){
                    gauge(ajaxData.person[i].id,ajaxData.person[i].name, ajaxData.person[i].color);
                }
                else if(ajaxData.person[i].seriesType=="radar"){
                    radar(ajaxData.person[i].id,ajaxData.person[i].name);
                }
                else if(ajaxData.person[i].seriesType=="barH"){
                    barH(ajaxData.person[i].id,ajaxData.person[i].name);
                }
                else if(ajaxData.person[i].seriesType=="bar"){
                    bar(ajaxData.person[i].id);
                }
                else if(ajaxData.person[i].seriesType=="pie"){
                    pie(ajaxData.person[i].id);
                }
            }
        } else if(activeTab=="设备KPI") {
            for (var i = 0; i < ajaxData.equipment.length; i++) {
                //line(ajaxData.equipment[i].id, ajaxData.equipment[i].name, ajaxData.equipment[i].color);
                if (ajaxData.equipment[i].seriesType == "line") {
                    line(ajaxData.equipment[i].id, ajaxData.equipment[i].name, ajaxData.equipment[i].color);
                }
                else if(ajaxData.equipment[i].seriesType=="gauge"){
                    gauge(ajaxData.equipment[i].id,ajaxData.equipment[i].name, ajaxData.equipment[i].color);
                }
                else if(ajaxData.equipment[i].seriesType=="radar"){
                    radar(ajaxData.equipment[i].id,ajaxData.equipment[i].name);
                }
                else if(ajaxData.equipment[i].seriesType=="barH"){
                    barH(ajaxData.equipment[i].id,ajaxData.equipment[i].name);
                }
                else if(ajaxData.equipment[i].seriesType=="bar"){
                    bar(ajaxData.equipment[i].id);
                }
                else if(ajaxData.equipment[i].seriesType=="pie"){
                    pie(ajaxData.equipment[i].id);
                }
            }
        } else if(activeTab=="过程KPI") {
            for (var i = 0; i < ajaxData.process.length; i++) {
                //line(ajaxData.process[i].id, ajaxData.process[i].name, ajaxData.process[i].color);
                if (ajaxData.process[i].seriesType == "line") {
                    line(ajaxData.process[i].id, ajaxData.process[i].name, ajaxData.process[i].color);
                }
                else if(ajaxData.process[i].seriesType=="gauge"){
                    gauge(ajaxData.process[i].id,ajaxData.process[i].name, ajaxData.process[i].color);
                }
                else if(ajaxData.process[i].seriesType=="radar"){
                    radar(ajaxData.process[i].id,ajaxData.process[i].name);
                }
                else if(ajaxData.process[i].seriesType=="barH"){
                    barH(ajaxData.process[i].id,ajaxData.process[i].name);
                }
                else if(ajaxData.process[i].seriesType=="bar"){
                    bar(ajaxData.process[i].id);
                }
                else if(ajaxData.process[i].seriesType=="pie"){
                    pie(ajaxData.process[i].id);
                }
            }
        } else if(activeTab=="质量KPI") {
            for (var i = 0; i < ajaxData.quality.length; i++) {
                //line(ajaxData.quality[i].id, ajaxData.quality[i].name, ajaxData.quality[i].color);
                if (ajaxData.quality[i].seriesType == "line") {
                    line(ajaxData.quality[i].id, ajaxData.quality[i].name, ajaxData.quality[i].color);
                }
                else if(ajaxData.quality[i].seriesType=="gauge"){
                    gauge(ajaxData.quality[i].id,ajaxData.quality[i].name, ajaxData.quality[i].color);
                }
                else if(ajaxData.quality[i].seriesType=="radar"){
                    radar(ajaxData.quality[i].id,ajaxData.quality[i].name);
                }
                else if(ajaxData.quality[i].seriesType=="barH"){
                    barH(ajaxData.quality[i].id,ajaxData.quality[i].name);
                }
                else if(ajaxData.quality[i].seriesType=="bar"){
                    bar(ajaxData.quality[i].id);
                }
                else if(ajaxData.quality[i].seriesType=="pie"){
                    pie(ajaxData.quality[i].id);
                }
            }
        } else if(activeTab=="物流KPI") {
            for (var i = 0; i < ajaxData.logistics.length; i++) {
                //line(ajaxData.logistics[i].id, ajaxData.logistics[i].name, ajaxData.logistics[i].color);
                if (ajaxData.logistics[i].seriesType == "line") {
                    line(ajaxData.logistics[i].id, ajaxData.logistics[i].name, ajaxData.logistics[i].color);
                }
                else if(ajaxData.logistics[i].seriesType=="gauge"){
                    gauge(ajaxData.logistics[i].id,ajaxData.logistics[i].name, ajaxData.logistics[i].color);
                }
                else if(ajaxData.logistics[i].seriesType=="radar"){
                    radar(ajaxData.logistics[i].id,ajaxData.logistics[i].name);
                }
                else if(ajaxData.logistics[i].seriesType=="barH"){
                    barH(ajaxData.logistics[i].id,ajaxData.logistics[i].name);
                }
                else if(ajaxData.logistics[i].seriesType=="bar"){
                    bar(ajaxData.logistics[i].id);
                }
                else if(ajaxData.logistics[i].seriesType=="pie"){
                    pie(ajaxData.logistics[i].id);
                }
            }
        } else if(activeTab=="总览") {
            //zonglan_workshop();
            for (var i = 0; i < ajaxData.change.length; i++) {
                line(ajaxData.change[i].id, ajaxData.change[i].name, ajaxData.change[i].color);
            }
        }
    })


    });



