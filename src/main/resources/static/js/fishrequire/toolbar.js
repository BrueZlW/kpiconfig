function showJTopoToobar(stage,t) {
    var toobarDiv = $('<div style="padding-left:10px; width: 832px; height: 28px;margin-top: 25px;font-family:微软雅黑 "">').html(''
        + '<input style="margin:0" type="button" id="zoomOutButton" value=" 放 大 " /><input type="button" id="zoomInButton" value=" 缩 小 " style="margin:0;"/>' +
        '<input style="margin:0" type="button" id="centerButton" value=" 居 中 " />');

    t.prepend(toobarDiv);

    $('#centerButton').click(function () {
       stage.centerAndZoom();
    });
    $('#zoomOutButton').click(function () {
        stage.zoomOut();
    });
    $('#zoomInButton').click(function () {
        stage.zoomIn();
    });
}

