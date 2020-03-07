var Hero = new Object();
Hero["Name"] = "勇士";
Hero["HP"] = 1000;
Hero["ATK"] = 100;
Hero["DEF"] = 100;
Hero["Gold"] = 0;
Hero["YellowKey"] = 0;
Hero["BlueKey"] = 0;
Hero["RedKey"] = 0;
Hero["Num"] = 1;
Hero["TheMap"] = 1;
Hero["Shield"] = 0;
Hero["View"] = 0;

var childnum = 1;
var talknum = 0;
var womannum = 0;
var map;
var pic = 0;
var d = 4;

var m = document.getElementById("map");
var mtx = m.getContext("2d")
m.height = 416;
m.width = 416;

var g = document.getElementById("goods");
var gtx = g.getContext("2d")
g.height = 416;
g.width = 160;

var a = document.getElementById("arms");
var atx = a.getContext("2d")
a.height = 416;
a.width = 160;
var aleft = a.offsetLeft;
var atop = a.offsetTop;
var img = new Image();
img.src = "/Image/hero/b.png"


//触发事件
var eventHappened =
    [
        0,//2层卫兵（0
        0,//3层魔王（1
        0,//8层卫兵（2
        0,//10层骷髅（3
        0,//11层银盾门（4
        0,//14层红钥匙（5
        0,//15层大乌贼（6
        0,//17层左下（7
        0,//17层左上（8
        0,//17层右下（9
        0,//17层右上（10
        0,//20层吸血鬼（11
        0,//25层大法师（12
        0,//30层史莱姆（13
        0,//32层骑士队长（14
        0,//33层红钥匙（15
        0,//34层关门（16
        0,//34层开门（17
        0,//35层魔龙（18
        0,//38层骑士盾（19
        0,//39层中心对称飞行器（20
        0,//40层自动战斗（21
        0,//41层下楼飞行器（22
        0,//44层神圣盾（23
        0,//45层右（24
        0,//45层左（25
        0,//48层圣剑（26
        0,//49层巫师（27
        0,//49层黑暗骑士（28
        0,//49层关门（29
        0,//49层改攻击（30
        0,//49层假魔王（31
    ];
//中间地图
var map0 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 38, 40, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 37, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map1 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 38, 36, 1, 2, 1, 36, 36, 36, 36, 36, 36, 71],
    [71, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 36, 71],
    [71, 41, 36, 36, 42, 36, 35, 44, 43, 36, 35, 36, 71],
    [71, 36, 5, 36, 35, 36, 35, 45, 41, 36, 35, 36, 71],
    [71, 35, 42, 35, 35, 36, 35, 35, 35, 42, 35, 36, 71],
    [71, 43, 36, 36, 35, 36, 42, 3, 4, 3, 35, 36, 71],
    [71, 36, 6, 36, 35, 36, 35, 35, 35, 35, 35, 36, 71],
    [71, 35, 42, 35, 35, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 36, 36, 36, 35, 35, 42, 35, 35, 35, 42, 35, 71],
    [71, 41, 36, 43, 35, 43, 36, 36, 35, 36, 3, 36, 71],
    [71, 41, 47, 43, 35, 36, 40, 36, 35, 1, 46, 1, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map2 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 39, 36, 48, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 40, 36, 35, 35, 36, 21, 36, 21, 36, 35, 35, 71],
    [71, 36, 35, 35, 35, 35, 35, 36, 35, 35, 35, 35, 71],
    [71, 36, 35, 43, 43, 35, 36, 36, 36, 35, 36, 54, 71],
    [71, 36, 35, 43, 36, 52, 36, 36, 36, 52, 36, 36, 71],
    [71, 36, 35, 35, 35, 35, 36, 36, 36, 35, 35, 35, 71],
    [71, 36, 35, 53, 36, 35, 36, 36, 36, 35, 36, 55, 71],
    [71, 36, 35, 36, 36, 52, 36, 36, 36, 52, 36, 36, 71],
    [71, 36, 35, 35, 35, 35, 36, 36, 36, 35, 35, 35, 71],
    [71, 36, 35, 46, 46, 35, 36, 36, 36, 35, 36, 36, 71],
    [71, 38, 35, 46, 36, 52, 36, 36, 36, 52, 36, 36, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map3 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 43, 45, 35, 43, 46, 43, 35, 36, 35, 36, 41, 71],
    [71, 36, 41, 35, 46, 43, 46, 35, 36, 42, 3, 36, 71],
    [71, 4, 36, 35, 43, 49, 43, 35, 36, 35, 35, 35, 71],
    [71, 42, 35, 35, 35, 36, 35, 35, 36, 35, 36, 54, 71],
    [71, 36, 36, 3, 36, 36, 36, 1, 36, 36, 36, 36, 71],
    [71, 42, 35, 35, 36, 36, 36, 35, 36, 35, 35, 35, 71],
    [71, 5, 36, 35, 35, 36, 35, 35, 36, 35, 36, 41, 71],
    [71, 36, 43, 35, 36, 36, 36, 35, 36, 42, 4, 43, 71],
    [71, 41, 44, 35, 36, 36, 36, 35, 36, 35, 35, 35, 71],
    [71, 35, 35, 35, 35, 36, 35, 35, 2, 35, 36, 36, 71],
    [71, 39, 40, 36, 36, 36, 36, 35, 36, 42, 36, 38, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map4 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 36, 49, 36, 35, null, 56, null, 35, 36, 54, 36, 71],
    [71, 41, 36, 43, 35, 36, 36, 36, 35, 43, 36, 46, 71],
    [71, 36, 36, 36, 35, 36, 36, 36, 35, 36, 6, 36, 71],
    [71, 35, 42, 35, 35, 35, 48, 35, 35, 35, 42, 35, 71],
    [71, 36, 4, 36, 42, 36, 2, 36, 36, 5, 36, 36, 71],
    [71, 36, 36, 36, 35, 35, 35, 35, 35, 35, 35, 35, 71],
    [71, 2, 36, 1, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 42, 35, 35, 42, 35, 35, 35, 42, 35, 35, 42, 71],
    [71, 36, 35, 36, 3, 36, 35, 36, 4, 36, 35, 36, 71],
    [71, 36, 35, 1, 36, 43, 35, 44, 36, 41, 35, 40, 71],
    [71, 38, 35, 43, 1, 43, 35, 36, 1, 36, 35, 39, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map5 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 38, 35, 36, 2, 42, 36, 35, 36, 36, 42, 36, 71],
    [71, 36, 35, 36, 36, 35, 36, 35, 1, 1, 35, 2, 71],
    [71, 36, 42, 3, 36, 35, 36, 35, 43, 43, 35, 36, 71],
    [71, 35, 35, 35, 42, 35, 3, 35, 43, 43, 35, 36, 71],
    [71, 43, 36, 4, 36, 35, 36, 35, 35, 35, 35, 36, 71],
    [71, 43, 36, 36, 3, 35, 36, 1, 36, 36, 36, 36, 71],
    [71, 35, 6, 35, 35, 35, 36, 35, 35, 35, 35, 2, 71],
    [71, 36, 36, 36, 36, 35, 1, 35, 36, 36, 36, 36, 71],
    [71, 45, 43, 41, 67, 35, 36, 35, 42, 35, 35, 35, 71],
    [71, 35, 35, 35, 35, 35, 36, 35, 36, 35, 36, 36, 71],
    [71, 39, 40, 36, 36, 36, 36, 35, 36, 35, 36, 57, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map6 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 39, 35, 43, 43, 35, 36, 4, 36, 43, 1, 36, 71],
    [71, 40, 35, 43, 43, 35, 36, 35, 35, 35, 35, 42, 71],
    [71, 36, 35, 35, 2, 35, 36, 35, 41, 36, 5, 36, 71],
    [71, 36, 42, 42, 36, 42, 36, 35, 55, 36, 36, 3, 71],
    [71, 36, 35, 35, 35, 35, 36, 35, 35, 35, 35, 35, 71],
    [71, 36, 36, 2, 4, 36, 43, 36, 5, 6, 36, 36, 71],
    [71, 35, 35, 35, 35, 35, 36, 35, 35, 35, 35, 36, 71],
    [71, 4, 36, 36, 54, 35, 36, 42, 42, 36, 42, 36, 71],
    [71, 36, 3, 36, 45, 35, 36, 35, 35, 2, 35, 2, 71],
    [71, 42, 35, 35, 35, 35, 36, 35, 36, 36, 35, 36, 71],
    [71, 36, 1, 36, 36, 5, 36, 35, 41, 41, 35, 38, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map7 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 38, 35, 44, 35, 36, 55, 36, 35, 43, 35, 1, 71],
    [71, 36, 35, 41, 35, 36, 36, 36, 35, 43, 35, 2, 71],
    [71, 36, 35, 3, 35, 2, 35, 6, 35, 41, 35, 1, 71],
    [71, 36, 35, 36, 35, 36, 35, 36, 35, 36, 35, 36, 71],
    [71, 42, 35, 42, 35, 48, 35, 42, 35, 5, 35, 42, 71],
    [71, 36, 6, 36, 4, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 42, 35, 42, 35, 42, 35, 42, 35, 6, 35, 42, 71],
    [71, 36, 35, 36, 35, 36, 35, 36, 35, 36, 35, 36, 71],
    [71, 36, 35, 36, 35, 3, 35, 2, 35, 46, 35, 36, 71],
    [71, 1, 35, 1, 35, 43, 35, 4, 35, 43, 35, 40, 71],
    [71, 36, 2, 36, 35, 43, 35, 46, 35, 43, 35, 39, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map8 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 39, 36, 42, 42, 36, 38, 36, 35, 43, 36, 43, 71],
    [71, 40, 36, 35, 35, 36, 36, 1, 35, 36, 51, 36, 71],
    [71, 42, 35, 35, 35, 35, 42, 35, 35, 46, 36, 41, 71],
    [71, 36, 35, 43, 43, 43, 36, 36, 35, 35, 72, 35, 71],
    [71, 41, 35, 35, 35, 35, 35, 4, 35, 7, 36, 7, 71],
    [71, 36, 2, 1, 2, 36, 35, 36, 35, 36, 36, 36, 71],
    [71, 35, 35, 35, 35, 42, 35, 3, 35, 35, 42, 35, 71],
    [71, 36, 36, 36, 3, 36, 5, 36, 4, 36, 36, 36, 71],
    [71, 42, 35, 35, 35, 35, 35, 35, 35, 35, 35, 42, 71],
    [71, 1, 36, 35, 44, 43, 35, 49, 41, 35, 36, 5, 71],
    [71, 36, 3, 48, 43, 45, 35, 43, 36, 42, 6, 36, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map9 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 36, 36, 5, 42, 36, 39, 36, 42, 1, 36, 41, 71],
    [71, 36, 43, 36, 35, 36, 40, 36, 35, 36, 1, 36, 71],
    [71, 6, 35, 35, 35, 35, 48, 35, 35, 35, 35, 36, 71],
    [71, 36, 43, 36, 35, 43, 36, 43, 42, 42, 36, 36, 71],
    [71, 45, 36, 3, 42, 36, 44, 36, 35, 35, 35, 35, 71],
    [71, 35, 35, 35, 35, 35, 35, 2, 35, 36, 36, 6, 71],
    [71, 43, 36, 42, 6, 43, 35, 36, 35, 62, 35, 36, 71],
    [71, 6, 36, 35, 36, 36, 35, 36, 35, 35, 35, 42, 71],
    [71, 42, 35, 35, 35, 42, 35, 36, 35, 43, 36, 4, 71],
    [71, 36, 41, 35, 36, 5, 35, 3, 35, 36, 5, 36, 71],
    [71, 38, 36, 48, 36, 36, 42, 36, 42, 4, 36, 41, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map10 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 36, 71],
    [71, 35, 35, 35, 35, 36, 36, 36, 35, 35, 35, 35, 71],
    [71, 5, 5, 5, 35, 35, 36, 35, 35, 5, 5, 5, 71],
    [71, 36, 6, 36, 72, 36, 8, 36, 72, 36, 6, 36, 71],
    [71, 35, 35, 35, 35, 36, 36, 36, 35, 35, 35, 35, 71],
    [71, 5, 45, 5, 35, 35, 36, 35, 35, 5, 44, 5, 71],
    [71, 36, 6, 36, 35, 35, 36, 35, 35, 36, 6, 36, 71],
    [71, 36, 36, 36, 35, 35, 36, 35, 35, 36, 36, 36, 71],
    [71, 42, 35, 42, 35, 35, 50, 35, 35, 42, 35, 42, 71],
    [71, 40, 35, 36, 35, 36, 36, 36, 35, 36, 35, 36, 71],
    [71, 39, 35, 36, 4, 36, 36, 36, 4, 36, 35, 46, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map11 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 36, 36, 36, 35, 44, 36, 42, 36, 35, 41, 43, 71],
    [71, 36, 63, 36, 35, 36, 3, 35, 12, 35, 36, 36, 71],
    [71, 36, 36, 36, 35, 42, 35, 35, 36, 42, 36, 36, 71],
    [71, 35, 72, 35, 35, 36, 10, 35, 35, 35, 35, 9, 71],
    [71, 11, 36, 11, 35, 12, 36, 42, 11, 36, 35, 36, 71],
    [71, 36, 36, 36, 35, 35, 35, 35, 36, 41, 35, 36, 71],
    [71, 46, 36, 36, 10, 36, 36, 42, 9, 36, 35, 36, 71],
    [71, 35, 48, 35, 35, 35, 35, 35, 35, 35, 35, 10, 71],
    [71, 36, 10, 36, 9, 42, 36, 36, 36, 36, 3, 36, 71],
    [71, 43, 36, 36, 36, 35, 40, 35, 35, 42, 35, 36, 71],
    [71, 43, 43, 43, 43, 35, 39, 35, 46, 10, 35, 38, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map12 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 55, 35, 36, 35, 43, 44, 43, 35, 36, 35, 35, 71],
    [71, 35, 35, 10, 35, 36, 35, 36, 35, 36, 35, 35, 71],
    [71, 36, 36, 36, 35, 11, 36, 11, 35, 36, 12, 36, 71],
    [71, 42, 35, 35, 35, 35, 42, 35, 35, 35, 35, 36, 71],
    [71, 36, 11, 36, 42, 36, 12, 36, 35, 41, 36, 10, 71],
    [71, 35, 35, 35, 35, 36, 36, 11, 42, 36, 45, 36, 71],
    [71, 43, 43, 36, 35, 36, 46, 36, 35, 43, 36, 9, 71],
    [71, 43, 49, 36, 35, 35, 35, 35, 35, 48, 35, 42, 71],
    [71, 36, 36, 12, 35, null, 56, null, 35, 9, 36, 12, 71],
    [71, 35, 35, 42, 35, 41, 36, 41, 35, 35, 36, 35, 71],
    [71, 38, 36, 36, 3, 36, 36, 36, 3, 36, 40, 39, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map13 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 71],
    [71, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 71],
    [71, 70, 70, 70, 70, 35, 35, 35, 70, 70, 70, 70, 71],
    [71, 70, 70, 70, 35, 35, 35, 35, 35, 70, 70, 70, 71],
    [71, 70, 70, 70, 35, 35, 61, 35, 35, 70, 70, 70, 71],
    [71, 70, 70, 70, 35, 35, 70, 35, 35, 70, 70, 70, 71],
    [71, 70, 70, 70, 70, 35, 70, 35, 70, 70, 70, 70, 71],
    [71, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 71],
    [71, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 70, 71],
    [71, 35, 35, 35, 35, 35, 42, 35, 35, 35, 35, 35, 71],
    [71, 39, 40, 36, 36, 36, 36, 36, 36, 36, 36, 38, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
var map14 = [
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71],
    [71, 13, 36, 13, 35, 45, 43, 41, 35, 43, 43, 43, 71],
    [71, 36, 13, 36, 35, 9, 35, 13, 35, 36, 36, 43, 71],
    [71, 35, 36, 36, 35, 36, 35, 36, 35, 35, 42, 35, 71],
    [71, 35, 48, 35, 35, 48, 35, 42, 35, 36, 13, 36, 71],
    [71, 41, 36, 36, 10, 36, 14, 36, 10, 36, 36, 36, 71],
    [71, 36, 9, 36, 35, 35, 42, 35, 35, 41, 36, 12, 71],
    [71, 42, 35, 42, 35, 36, 36, 36, 35, 35, 35, 42, 71],
    [71, 36, 35, 36, 12, 36, 42, 36, 9, 36, 9, 36, 71],
    [71, 11, 35, 11, 35, 35, 35, 35, 35, 42, 35, 35, 71],
    [71, 36, 35, 36, 35, 41, 36, 36, 35, 36, 36, 40, 71],
    [71, 49, 35, 36, 42, 36, 38, 36, 35, 36, 36, 39, 71],
    [71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71, 71]
];
//左地图
var goods = [
    [77, 77, 77, 77, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 43, 36, 36, 77],
    [77, 49, 36, 36, 77],
    [77, 51, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 77, 77, 77, 77]
];
//右地图
var arms = [
    [77, 77, 77, 77, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 61, 77],
    [77, 36, 36, 66, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 36, 36, 36, 77],
    [77, 77, 77, 77, 77]
];
//怪物属性
var e1 = {
    name: "绿色史莱姆",
    id: 1,
    hp: 35,
    att: 18,
    def: 1,
    coin: 1
};
var e2 = {
    name: "红色史莱姆",
    id: 2,
    hp: 45,
    att: 20,
    def: 2,
    coin: 2
};
var e3 = {
    name: "小蝙蝠",
    id: 3,
    hp: 35,
    att: 38,
    def: 3,
    coin: 3
};
var e4 = {
    name: "初级法师",
    id: 4,
    hp: 60,
    att: 32,
    def: 8,
    coin: 5
};
var e5 = {
    name: "骷髅人",
    id: 5,
    hp: 50,
    att: 42,
    def: 6,
    coin: 6
};
var e6 = {
    name: "骷髅士兵",
    id: 6,
    hp: 55,
    att: 52,
    def: 12,
    coin: 8
};
var e7 = {
    name: "初级卫兵",
    id: 7,
    hp: 50,
    att: 48,
    def: 22,
    coin: 12
};
var e8 = {
    name: "骷髅队长",
    id: 8,
    hp: 100,
    att: 65,
    def: 15,
    coin: 30
};
var e9 = {
    name: "大史莱姆",
    id: 9,
    hp: 130,
    att: 60,
    def: 3,
    coin: 8
};
var e10 = {
    name: "大蝙蝠",
    id: 10,
    hp: 60,
    att: 100,
    def: 8,
    coin: 12
};
var e11 = {
    name: "高级法师",
    id: 11,
    hp: 100,
    att: 95,
    def: 30,
    coin: 18
};
var e12 = {
    name: "兽人",
    id: 12,
    hp: 260,
    att: 85,
    def: 5,
    coin: 22
};
var e13 = {
    name: "兽人武士",
    id: 13,
    hp: 320,
    att: 120,
    def: 15,
    coin: 30
};
var e14 = {
    name: "石头人",
    id: 14,
    hp: 20,
    att: 100,
    def: 68,
    coin: 28
};
var e15 = {
    name: "大乌贼",
    id: 15,
    hp: 1200,
    att: 180,
    def: 20,
    coin: 100
};
var e16 = {
    name: "吸血鬼",
    id: 16,
    hp: 444,
    att: 199,
    def: 66,
    coin: 144
};
var e17 = {
    name: "大法师",
    id: 17,
    hp: 4500,
    att: 560,
    def: 310,
    coin: 1000
};
var e18 = {
    name: "鬼战士",
    id: 18,
    hp: 220,
    att: 180,
    def: 30,
    coin: 35
};
var e19 = {
    name: "战士",
    id: 19,
    hp: 210,
    att: 200,
    def: 65,
    coin: 45
};
var e20 = {
    name: "幽灵",
    id: 20,
    hp: 320,
    att: 140,
    def: 20,
    coin: 30
};
var e21 = {
    name: "中级卫兵",
    id: 21,
    hp: 100,
    att: 180,
    def: 110,
    coin: 50
};
var e22 = {
    name: "双手剑士",
    id: 22,
    hp: 100,
    att: 680,
    def: 50,
    coin: 55
};
var e23 = {
    name: "魔龙",
    id: 23,
    hp: 1500,
    att: 600,
    def: 250,
    coin: 800
};
var e24 = {
    name: "骑士",
    id: 24,
    hp: 160,
    att: 230,
    def: 105,
    coin: 65
};
var e25 = {
    name: "骑士队长",
    id: 25,
    hp: 120,
    att: 150,
    def: 50,
    coin: 100
};
var e26 = {
    name: "初级巫师",
    id: 26,
    hp: 220,
    att: 370,
    def: 110,
    coin: 80
};
var e27 = {
    name: "高级巫师",
    id: 27,
    hp: 200,
    att: 380,
    def: 130,
    coin: 90
};
var e28 = {
    name: "史莱姆王",
    id: 28,
    hp: 360,
    att: 310,
    def: 20,
    coin: 40
};
var e29 = {
    name: "吸血蝙蝠",
    id: 29,
    hp: 200,
    att: 390,
    def: 90,
    coin: 50
};
var e30 = {
    name: "黑暗骑士",
    id: 30,
    hp: 180,
    att: 430,
    def: 210,
    coin: 120
};
var e31 = {
    name: "魔法警卫",
    id: 31,
    hp: 230,
    att: 450,
    def: 100,
    coin: 100
};
var e32 = {
    name: "高级卫兵",
    id: 32,
    hp: 180,
    att: 460,
    def: 360,
    coin: 200
};
var e33 = {
    name: "魔王",
    id: 33,
    hp: 8000,
    att: 5000,
    def: 1000,
    coin: 500
};
var e34 = {
    name: "二周目魔王",
    id: 34,
    hp: 44000,
    att: 27500,
    def: 5500,
    coin: 0
};
//主程序
img.onload = function () {
    changemap();
    draw();
    drawhero();
    drawtext();
    document.onkeydown = function (e) {
        if (Hero["View"] == 0) {
            if (document.getElementById("child").style.display == "none" && document.getElementById("man").style.display == "none" && document.getElementById("woman").style.display == "none" && document.getElementById("store").style.display == "none" && document.getElementById("talk").style.display == "none" && document.getElementById("boss").style.display == "none") {
                onkey(e.keyCode);
            }
            else if (document.getElementById("store").style.display == "block") {
                storeOnkey(e);
            }
            else if (document.getElementById("man").style.display == "block") {
                manOnkey(e);
            }
            else if (document.getElementById("woman").style.display == "block") {
                womanOnkey(e);
            }
            else if (document.getElementById("child").style.display == "block") {
                childOnkey(e);
            }
            else if (document.getElementById("talk").style.display == "block") {
                talkOnkey(e);
            }
        }

    }
    a.addEventListener("click", function (ClickEvent) {
        var x = ClickEvent.clientX - a.offsetParent.offsetParent.offsetLeft - a.offsetParent.offsetLeft;
        var y = ClickEvent.clientY - a.offsetParent.offsetTop - a.offsetParent.offsetParent.offsetTop;
        if (arms[parseInt(y / 32)][parseInt(x / 32)] != 36 && arms[parseInt(y / 32)][parseInt(x / 32)] != 77) {
            aclick(parseInt(y / 16), parseInt(x / 32));
        }
    });
    a.addEventListener("mousemove", function (MoveEvent) {
        drawtext();
        var x = MoveEvent.pageX - a.offsetParent.offsetParent.offsetLeft - a.offsetParent.offsetLeft;
        var y = MoveEvent.pageY - a.offsetParent.offsetTop - a.offsetParent.offsetParent.offsetTop;
        if (arms[parseInt(y / 32)][parseInt(x / 32)] != 36 && arms[parseInt(y / 32)][parseInt(x / 32)] != 77) {
            amove(parseInt(y / 16), parseInt(x / 32));
        }
    });

    setInterval(function () {
        if (pic == 1) {
            pic = 0;
            draw();
        }
        else {
            pic++;
            draw();
        }
    }, 500);
}
//中间地图选择
function changemap() {
    switch (Hero["TheMap"]) {
        case (0): map = map0;
            break;
        case (1): map = map1;
            break;
        case (2): map = map2;
            break;
        case (3): map = map3;
            break;
        case (4): map = map4;
            break;
        case (5): map = map5;
            break;
        case (6): map = map6;
            break;
        case (7): map = map7;
            break;
        case (8): map = map8;
            break;
        case (9): map = map9;
            break;
        case (10): map = map10;
            break;
        case (11): map = map11;
            break;
        case (12): map = map12;
            break;
        case (13): map = map13;
            break;
        case (14): map = map14;
    }
}
//怪物选择
function themonster(a) {
    var monster;
    switch (a) {
        case (1): monster = e1;
            break;
        case (2): monster = e2;
            break;
        case (3): monster = e3;
            break;
        case (4): monster = e4;
            break;
        case (5): monster = e5;
            break;
        case (6): monster = e6;
            break;
        case (7): monster = e7;
            break;
        case (8): monster = e8;
            break;
        case (9): monster = e9;
            break;
        case (10): monster = e10;
            break;
        case (11): monster = e11;
            break;
        case (12): monster = e12;
            break;
        case (13): monster = e13;
            break;
        case (14): monster = e14;
            break;
        case (15): monster = e15;
            break;
        case (16): monster = e16;
            break;
        case (17): monster = e17;
            break;
        case (18): monster = e18;
            break;
        case (19): monster = e19;
            break;
        case (20): monster = e20;
            break;
        case (21): monster = e21;
            break;
        case (22): monster = e22;
            break;
        case (23): monster = e23;
            break;
        case (24): monster = e24;
            break;
        case (25): monster = e25;
            break;
        case (26): monster = e26;
            break;
        case (27): monster = e27;
            break;
        case (28): monster = e28;
            break;
        case (29): monster = e29;
            break;
        case (30): monster = e30;
            break;
        case (31): monster = e31;
            break;
        case (32): monster = e32;
            break;
        case (33): monster = e33;
            break;
        case (34): monster = e34;
            break;
    }
    return monster;
}
//鼠标点击
function aclick(x, y) {
    if (x >= 10 && x <= 11 && y == 1) {//红色怪物书
        var monsterSet = new Set();
        for (var a = 0; a < 13; a++) {
            for (var b = 0; b < 13; b++) {
                if (map[a][b] < 35) {
                    monsterSet.add(map[a][b]);
                }
            }
        }
        var monsterList = Array.from(monsterSet);
        for (var i = 0; i < monsterList.length; i++) {
            for (var j = 0; j < monsterList.length - i - 1; j++) {
                if (monsterList[j + 1] < monsterList[j]) {
                    var temp = monsterList[j];
                    monsterList[j] = monsterList[j + 1];
                    monsterList[j + 1] = temp;
                }
            }
        }
        var _hp;
        for (var c = 0; c < monsterList.length; c++) {
            switch (monsterList[c])
            {
                case 1: {
                    
                }
                    break;
                case 2: {

                }
                    break;
                case 3: {

                }
                    break;
                case 4: {
                    
                }
                    break;
                case 5: {
                    
                }
                    break;
                case 6: {
                    
                }
                    break;
                case 7: {

                }
                    break;
                case 8: {

                }
                    break;
                case 9: {

                }
                    break;
                case 10: {

                }
                    break;
                case 11: {

                }
                    break;
                case 12: {

                }
                    break;
                case 13: {

                }
                    break;
                case 14: {

                }
                    break;
                case 15: {

                }
                    break;
                case 16: {

                }
                    break;
                case 17: {

                }
                    break;
                case 18: {

                }
                    break;
                case 19: {

                }
                    break;
                case 20: {

                }
                    break;
                case 21: {

                }
                    break;
                case 22: {

                }
                    break;
                case 23: {

                }
                    break;
                case 24: {

                }
                    break;
                case 25: {

                }
                    break;
                case 26: {

                }
                    break;
                case 27: {

                }
                    break;
                case 28: {

                }
                    break;
                case 29: {

                }
                    break;
                case 30: {

                }
                    break;
                case 31: {

                }
                    break;
                case 32: {

                }
                    break;
                case 33: {

                }
                    break;
                case 34: {

                }
                    break;
            }
        }     

    }
    else if (x == 10 && y == 2) {//蓝色传送器上楼

    }
    else if (x == 11 && y == 2) {//蓝色传送器下楼

    }
    else if (x >= 10 && x <= 11 && y == 3) {//绿色记事本

    }
    else if (x >= 12 && x <= 13 && y == 3) {//冰冻徽章

    }
    else if (x >= 18 && x <= 19 && y == 1) {//圣水

    }
    else if (x >= 18 && x <= 19 && y == 2) {//镐

    }
    else if (x >= 18 && x <= 19 && y == 3) {//红色上楼飞行器

    }
    else if (x >= 20 && x <= 21 && y == 1) {//蓝色上楼飞行器

    }
    else if (x >= 20 && x <= 21 && y == 2) {//白色对称飞行器

    }
    else if (x >= 20 && x <= 21 && y == 3) {//魔法钥匙

    }
    else if (x >= 22 && x <= 23 && y == 1) {//地震卷轴

    }
    else if (x >= 22 && x <= 23 && y == 2) {//炸弹

    }
}
//鼠标移动
function amove(x, y) {
    if (x >= 10 && x <= 11 && y == 1) {//红色怪物书
        atx.fillStyle = "#CCE8CF";
        atx.fillRect(32, 160, 32, 32);
        atx.fillStyle = "#000000";
        atx.font = "32px Microsoft KaiTi"
        atx.fillText("H", 40, 188);
    }
    else if (x == 10 && y == 2) {//蓝色传送器上楼
        atx.fillStyle = "#CCE8CF";
        atx.fillRect(64, 160, 32, 16);
        atx.fillStyle = "#000000";
        atx.font = "14px Microsoft KaiTi"
        atx.fillText("PgUp", 66, 172);
    }
    else if (x == 11 && y == 2) {//蓝色传送器下楼
        atx.fillStyle = "#CCE8CF";
        atx.fillRect(64, 176, 32, 16);
        atx.fillStyle = "#000000";
        atx.font = "14px Microsoft KaiTi"
        atx.fillText("PgDn", 66, 188);

    }
    else if (x >= 10 && x <= 11 && y == 3) {//绿色记事本
        atx.fillStyle = "#CCE8CF";
        atx.fillRect(32, 160, 32, 32);
        atx.fillStyle = "#000000";
        atx.font = "32px Microsoft KaiTi"
        atx.fillText("N", 40, 188);
    }
    else if (x >= 12 && x <= 13 && y == 3) {//冰冻徽章

    }
    else if (x >= 18 && x <= 19 && y == 1) {//圣水
        atx.fillStyle = "#CCE8CF";
        atx.fillRect(32, 160, 32, 32);
        atx.fillStyle = "#000000";
        atx.font = "32px Microsoft KaiTi"
        atx.fillText("W", 40, 188);
    }
    else if (x >= 18 && x <= 19 && y == 2) {//镐
        atx.fillStyle = "#CCE8CF";
        atx.fillRect(32, 160, 32, 32);
        atx.fillStyle = "#000000";
        atx.font = "32px Microsoft KaiTi"
        atx.fillText("P", 40, 188);
    }
    else if (x >= 18 && x <= 19 && y == 3) {//红色上楼飞行器

    }
    else if (x >= 20 && x <= 21 && y == 1) {//蓝色上楼飞行器

    }
    else if (x >= 20 && x <= 21 && y == 2) {//白色对称飞行器
        atx.fillStyle = "#CCE8CF";
        atx.fillRect(32, 160, 32, 32);
        atx.fillStyle = "#000000";
        atx.font = "32px Microsoft KaiTi"
        atx.fillText("J", 40, 188);
    }
    else if (x >= 20 && x <= 21 && y == 3) {//魔法钥匙

    }
    else if (x >= 22 && x <= 23 && y == 1) {//地震卷轴

    }
    else if (x >= 22 && x <= 23 && y == 2) {//炸弹

    }
}
//绘制左地图
function drawgoods() {
    for (var a = 0; a < 13; a++) {
        for (var b = 0; b < 5; b++) {
            var x = 32 * b;
            var y = 32 * a;
            switch (goods[a][b]) {
                case (36): gtx.drawImage(img, 320, 512, 32, 32, x, y, 32, 32);//地（320,512）
                    break;
                case (43): gtx.drawImage(img, 96, 448, 32, 32, x, y, 32, 32);//黄钥匙(96,448)
                    break;
                case (49): gtx.drawImage(img, 128, 448, 32, 32, x, y, 32, 32);//蓝钥匙(128,448)
                    break;
                case (51): gtx.drawImage(img, 160, 448, 32, 32, x, y, 32, 32);//红钥匙(160,448)
                    break;
                case (77): gtx.drawImage(img, 192, 512, 32, 32, x, y, 32, 32);//星空(192,512)
                    break;
            }
        }
    }
}
//绘制右地图
function drawarms() {
    for (var a = 0; a < 13; a++) {
        for (var b = 0; b < 5; b++) {
            var x = 32 * b;
            var y = 32 * a;
            switch (arms[a][b]) {
                case (1): atx.drawImage(img, 0, 0, 32, 32, x, y, 32, 32);//绿色史莱姆（0,0）
                    break;
                case (2): atx.drawImage(img, 64, 0, 32, 32, x, y, 32, 32);//红色史莱姆（64，0）
                    break;
                case (3): atx.drawImage(img, 192, 0, 32, 32, x, y, 32, 32);//小蝙蝠（192,0)
                    break;
                case (4): atx.drawImage(img, 192, 32, 32, 32, x, y, 32, 32);//初级法师(192,32)
                    break;
                case (5): atx.drawImage(img, 0, 32, 32, 32, x, y, 32, 32);//骷髅人(0,32)
                    break;
                case (6): atx.drawImage(img, 64, 32, 32, 32, x, y, 32, 32);//骷髅士兵(64,32)
                    break;
                case (7): atx.drawImage(img, 128, 96, 32, 32, x, y, 32, 32);//初级卫兵（128,96）
                    break;
                case (8): atx.drawImage(img, 128, 32, 32, 32, x, y, 32, 32);//骷髅队长(128,32)
                    break;
                case (9): atx.drawImage(img, 128, 0, 32, 32, x, y, 32, 32);//大史莱姆(128,0)
                    break;
                case (10): atx.drawImage(img, 256, 0, 32, 32, x, y, 32, 32);//大蝙蝠(256,0)
                    break;
                case (11): atx.drawImage(img, 256, 32, 32, 32, x, y, 32, 32);//高级法师(256,32)
                    break;
                case (12): atx.drawImage(img, 0, 64, 32, 32, x, y, 32, 32);//兽人(0,64)
                    break;
                case (13): atx.drawImage(img, 64, 64, 32, 32, x, y, 32, 32);//兽人武士(64,64)
                    break;
                case (14): atx.drawImage(img, 128, 64, 32, 32, x, y, 32, 32);//石头人(128,64)
                    break;
                case (15): atx.drawImage(img, 288, 0, 96, 96, x, y, 96, 96);//大乌贼(288,0)
                    break;
                case (16): atx.drawImage(img, 320, 96, 32, 32, x, y, 32, 32);//吸血鬼(320,96)
                    break;
                case (17): atx.drawImage(img, 128, 160, 32, 32, x, y, 32, 32);//大法师(128,160)
                    break;
                case (18): atx.drawImage(img, 0, 160, 32, 32, x, y, 32, 32);//鬼战士(0,160)
                    break;
                case (19): atx.drawImage(img, 256, 128, 32, 32, x, y, 32, 32);//战士(256,128)
                    break;
                case (20): atx.drawImage(img, 192, 64, 32, 32, x, y, 32, 32);//幽灵(192,64)
                    break;
                case (21): atx.drawImage(img, 192, 96, 32, 32, x, y, 32, 32);//中级卫兵(192,96)
                    break;
                case (22): atx.drawImage(img, 192, 128, 32, 32, x, y, 32, 32);//双手剑士(192,128)
                    break;
                case (23): atx.drawImage(img, 0, 192, 96, 96, x, y, 96, 96);//魔龙(0,192)
                    break;
                case (24): atx.drawImage(img, 128, 128, 32, 32, x, y, 32, 32);//骑士(128,128)
                    break;
                case (25): atx.drawImage(img, 64, 128, 32, 32, x, y, 32, 32);//骑士队长(64,128)
                    break;
                case (26): atx.drawImage(img, 0, 96, 32, 32, x, y, 32, 32);//初级巫师(0,96)
                    break;
                case (27): atx.drawImage(img, 64, 96, 32, 32, x, y, 32, 32);//高级巫师(64,96)
                    break;
                case (28): atx.drawImage(img, 256, 64, 32, 32, x, y, 32, 32);//史莱姆王(256,64)
                    break;
                case (29): atx.drawImage(img, 0, 128, 32, 32, x, y, 32, 32);//吸血蝙蝠(0,128)
                    break;
                case (30): atx.drawImage(img, 64, 160, 32, 32, x, y, 32, 32);//黑暗骑士(64,160)
                    break;
                case (31): atx.drawImage(img, 192, 160, 32, 32, x, y, 32, 32);//魔法警卫(192,160)
                    break;
                case (32): atx.drawImage(img, 256, 96, 32, 32, x, y, 32, 32);//高级卫兵(256,96)
                    break;
                case (33): atx.drawImage(img, 256, 160, 32, 32, x, y, 32, 32);//魔王(256,160)
                    break;
                case (34): atx.drawImage(img, 256, 160, 32, 32, x, y, 32, 32);//魔王(256,160)
                    break;
                case (36): {
                    atx.drawImage(img, 320, 512, 32, 32, x, y, 32, 32);//地（320,512）
                }
                    break;
                case (37): atx.drawImage(img, 96, 480, 32, 32, x, y, 32, 32);//幸运币（96,480)
                    break;
                case (47): atx.drawImage(img, 0, 384, 32, 32, x, y, 32, 32);//传送器蓝法杖(0,384)
                    break;
                case (57): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#FFF";
                    atx.fillText("铁剑", 42, 92);
                    atx.drawImage(img, 192, 384, 32, 32, x, y, 32, 32);//铁剑(192,384)
                }
                    break;
                case (58): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#7FFF00";
                    atx.fillText("银剑", 42, 92);
                    atx.drawImage(img, 224, 384, 32, 32, x, y, 32, 32);//银剑(224,384)
                }
                    break;
                case (59): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#3299CC";
                    atx.fillText("骑士剑", 36, 92);
                    atx.drawImage(img, 256, 384, 32, 32, x, y, 32, 32);//骑士剑(256,384)
                }
                    break;
                case (60): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#DB70DB";
                    atx.fillText("圣剑", 42, 92);
                    atx.drawImage(img, 288, 384, 32, 32, x, y, 32, 32);//圣剑(288,384)
                }
                    break;
                case (61): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#FF7F00";
                    atx.fillText("神圣剑", 36, 94);
                    atx.drawImage(img, 224, 448, 32, 32, x, y, 32, 32);//神圣剑(224,448)
                }
                    break;
                case (62): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#FFF";
                    atx.fillText("铁盾", 42, 126);
                    atx.drawImage(img, 192, 416, 32, 32, x, y, 32, 32);//铁盾(192,416)
                }
                    break;
                case (63): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#7FFF00";
                    atx.fillText("银盾", 42, 126);
                    atx.drawImage(img, 224, 416, 32, 32, x, y, 32, 32);//银盾(224,416)
                }
                    break;
                case (64): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#3299CC";
                    atx.fillText("骑士盾", 36, 126);
                    atx.drawImage(img, 256, 416, 32, 32, x, y, 32, 32);//骑士盾(256,416)
                }
                    break;
                case (65): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#DB70DB";
                    atx.fillText("圣盾", 42, 126);
                    atx.drawImage(img, 288, 416, 32, 32, x, y, 32, 32);//圣盾(288,416)
                }
                    break;
                case (66): {
                    atx.font = "14px Microsoft KaiTi";
                    atx.fillStyle = "#FF7F00";
                    atx.fillText("神圣盾", 36, 126);
                    atx.drawImage(img, 256, 448, 32, 32, x, y, 32, 32);//神圣盾(256,448)
                }
                    break;
                case (67): atx.drawImage(img, 64, 384, 32, 32, x, y, 32, 32);//记事本绿法杖(64,384)
                    break;
                case (68): atx.drawImage(img, 0, 480, 32, 32, x, y, 32, 32);//十字架(0,480)
                    break;
                case (69): atx.drawImage(img, 64, 448, 32, 32, x, y, 32, 32);//圣水(64,448)
                    break;
                case (73): atx.drawImage(img, 0, 448, 32, 32, x, y, 32, 32);//冰冻徽章(0,448)
                    break;
                case (74): atx.drawImage(img, 32, 480, 32, 32, x, y, 32, 32);//屠龙匕首(32,480)
                    break;
                case (75): atx.drawImage(img, 32, 448, 32, 32, x, y, 32, 32);//镐(32,448)
                    break;
                case (76): atx.drawImage(img, 384, 448, 32, 32, x, y, 32, 32);//地震卷轴(384,448)
                    break;
                case (77): atx.drawImage(img, 224, 512, 32, 32, x, y, 32, 32);//星空(192,512)
                    break;
                case (78): atx.drawImage(img, 32, 384, 32, 32, x, y, 32, 32);//怪物书红法杖(32,384)
                    break;
                case (79): atx.drawImage(img, 320, 448, 32, 32, x, y, 32, 32);//红色上楼飞行器(320,448)
                    break;
                case (80): atx.drawImage(img, 352, 448, 32, 32, x, y, 32, 32);//蓝色下楼飞行器(352,448)
                    break;
                case (81): atx.drawImage(img, 64, 416, 32, 32, x, y, 32, 32);//白色对称飞行器(64,416)
                    break;
                case (82): atx.drawImage(img, 64, 480, 32, 32, x, y, 32, 32);//魔法钥匙(64,480)
                    break;
                case (83): atx.drawImage(img, 128, 480, 32, 32, x, y, 32, 32);//炸弹(128,480)
                    break;

            }
        }
    }
}
//绘制文本
function drawtext() {
    g.width = g.width;
    a.width = a.width;
    drawarms();
    drawgoods();
    gtx.font = "17px Microsoft KaiTi";
    atx.font = "16px Microsoft KaiTi";
    gtx.fillStyle = "#FFF";
    atx.fillStyle = "#D9D9F3";
    atx.fillText("武器", 40, 80);
    atx.fillStyle = "#00FFFF";
    atx.fillText("防具", 40, 112);
    atx.fillStyle = "#FFF";
    atx.fillText("永久性宝物", 37, 150);
    atx.fillText("一次性宝物", 37, 278);
    gtx.fillText("魔塔第" + Hero["TheMap"] + "层", 38, 64);
    gtx.fillText("生命:" + Hero["HP"], 32, 128);
    gtx.fillText("攻击:" + Hero["ATK"], 32, 160);
    gtx.fillText("防御:" + Hero["DEF"], 32, 192);
    gtx.fillText("金币:" + Hero["Gold"], 32, 224);
    gtx.fillStyle = "#FFFF00";
    gtx.fillText(":" + Hero["YellowKey"] + "把", 70, 283);
    gtx.fillStyle = "#3299CC";
    gtx.fillText(":" + Hero["BlueKey"] + "把", 70, 315);
    gtx.fillStyle = "#FF1CAE";
    gtx.fillText(":" + Hero["RedKey"] + "把", 70, 347);
    gtx.fillStyle = "#EAADEA";
    gtx.fillText("勇士", 55, 96);
}
//绘制中间地图
function draw() {
    checkEvent();
    for (var a = 0; a < 13; a++) {
        for (var b = 0; b < 13; b++) {
            var x = 32 * b;
            var y = 32 * a;
            var z = 32 * pic;
            switch (map[a][b]) {
                case (1): mtx.drawImage(img, 0 + z, 0, 32, 32, x, y, 32, 32);//绿色史莱姆（0,0）
                    break;
                case (2): mtx.drawImage(img, 64 + z, 0, 32, 32, x, y, 32, 32);//红色史莱姆（64，0）
                    break;
                case (3): mtx.drawImage(img, 192 + z, 0, 32, 32, x, y, 32, 32);//小蝙蝠（192,0)
                    break;
                case (4): mtx.drawImage(img, 192 + z, 32, 32, 32, x, y, 32, 32);//初级法师(192,32)
                    break;
                case (5): mtx.drawImage(img, 0 + z, 32, 32, 32, x, y, 32, 32);//骷髅人(0,32)
                    break;
                case (6): mtx.drawImage(img, 64 + z, 32, 32, 32, x, y, 32, 32);//骷髅士兵(64,32)
                    break;
                case (7): mtx.drawImage(img, 128 + z, 96, 32, 32, x, y, 32, 32);//初级卫兵（128,96）
                    break;
                case (8): mtx.drawImage(img, 128 + z, 32, 32, 32, x, y, 32, 32);//骷髅队长(128,32)
                    break;
                case (9): mtx.drawImage(img, 128 + z, 0, 32, 32, x, y, 32, 32);//大史莱姆(128,0)
                    break;
                case (10): mtx.drawImage(img, 256 + z, 0, 32, 32, x, y, 32, 32);//大蝙蝠(256,0)
                    break;
                case (11): mtx.drawImage(img, 256 + z, 32, 32, 32, x, y, 32, 32);//高级法师(256,32)
                    break;
                case (12): mtx.drawImage(img, 0 + z, 64, 32, 32, x, y, 32, 32);//兽人(0,64)
                    break;
                case (13): mtx.drawImage(img, 64 + z, 64, 32, 32, x, y, 32, 32);//兽人武士(64,64)
                    break;
                case (14): mtx.drawImage(img, 128 + z, 64, 32, 32, x, y, 32, 32);//石头人(128,64)
                    break;
                case (15): mtx.drawImage(img, 288 + z * 3, 0, 96, 96, x, y, 96, 96);//大乌贼(288,0)
                    break;
                case (16): mtx.drawImage(img, 320 + z, 96, 32, 32, x, y, 32, 32);//吸血鬼(320,96)
                    break;
                case (17): mtx.drawImage(img, 128 + z, 160, 32, 32, x, y, 32, 32);//大法师(128,160)
                    break;
                case (18): mtx.drawImage(img, 0 + z, 160, 32, 32, x, y, 32, 32);//鬼战士(0,160)
                    break;
                case (19): mtx.drawImage(img, 256 + z, 128, 32, 32, x, y, 32, 32);//战士(256,128)
                    break;
                case (20): mtx.drawImage(img, 192 + z, 64, 32, 32, x, y, 32, 32);//幽灵(192,64)
                    break;
                case (21): mtx.drawImage(img, 192 + z, 96, 32, 32, x, y, 32, 32);//中级卫兵(192,96)
                    break;
                case (22): mtx.drawImage(img, 192 + z, 128, 32, 32, x, y, 32, 32);//双手剑士(192,128)
                    break;
                case (23): mtx.drawImage(img, 0 + z * 3, 192, 96, 96, x, y, 96, 96);//魔龙(0,192)
                    break;
                case (24): mtx.drawImage(img, 128 + z, 128, 32, 32, x, y, 32, 32);//骑士(128,128)
                    break;
                case (25): mtx.drawImage(img, 64 + z, 128, 32, 32, x, y, 32, 32);//骑士队长(64,128)
                    break;
                case (26): mtx.drawImage(img, 0 + z, 96, 32, 32, x, y, 32, 32);//初级巫师(0,96)
                    break;
                case (27): mtx.drawImage(img, 64 + z, 96, 32, 32, x, y, 32, 32);//高级巫师(64,96)
                    break;
                case (28): mtx.drawImage(img, 256 + z, 64, 32, 32, x, y, 32, 32);//史莱姆王(256,64)
                    break;
                case (29): mtx.drawImage(img, 0 + z, 128, 32, 32, x, y, 32, 32);//吸血蝙蝠(0,128)
                    break;
                case (30): mtx.drawImage(img, 64 + z, 160, 32, 32, x, y, 32, 32);//黑暗骑士(64,160)
                    break;
                case (31): mtx.drawImage(img, 192 + z, 160, 32, 32, x, y, 32, 32);//魔法警卫(192,160)
                    break;
                case (32): mtx.drawImage(img, 256 + z, 96, 32, 32, x, y, 32, 32);//高级卫兵(256,96)
                    break;
                case (33): mtx.drawImage(img, 256 + z, 160, 32, 32, x, y, 32, 32);//魔王(256,160)
                    break;
                case (34): mtx.drawImage(img, 256 + z, 160, 32, 32, x, y, 32, 32);//魔王(256,160)
                    break;
                case (35): mtx.drawImage(img, 0, 512, 32, 32, x, y, 32, 32);//墙（0,512）
                    break;
                case (36): mtx.drawImage(img, 320, 512, 32, 32, x, y, 32, 32);//地（320,512）
                    break;
                case (37): mtx.drawImage(img, 96, 480, 32, 32, x, y, 32, 32);//幸运币（96,480)
                    break;
                case (38): mtx.drawImage(img, 96, 512, 32, 32, x, y, 32, 32);//上楼（96,512）
                    break;
                case (39): mtx.drawImage(img, 64, 512, 32, 32, x, y, 32, 32);//下楼(64,512)
                    break;
                case (41): mtx.drawImage(img, 96, 416, 32, 32, x, y, 32, 32);//红药瓶(96,416)
                    break;
                case (42): mtx.drawImage(img, 192, 480, 32, 32, x, y, 32, 32);//黄门(192,480)
                    break;
                case (43): mtx.drawImage(img, 96, 448, 32, 32, x, y, 32, 32);//黄钥匙(96,448)
                    break;
                case (44): mtx.drawImage(img, 96, 384, 32, 32, x, y, 32, 32);//红宝石(96,384)
                    break;
                case (45): mtx.drawImage(img, 128, 384, 32, 32, x, y, 32, 32);//蓝宝石(128,384)
                    break;
                case (46): mtx.drawImage(img, 128, 416, 32, 32, x, y, 32, 32);//蓝药瓶(128,416)
                    break;
                case (47): mtx.drawImage(img, 0, 384, 32, 32, x, y, 32, 32);//传送器蓝法杖(0,384)
                    break;
                case (48): mtx.drawImage(img, 224, 480, 32, 32, x, y, 32, 32);//蓝门(224,480)
                    break;
                case (49): mtx.drawImage(img, 128, 448, 32, 32, x, y, 32, 32);//蓝钥匙(128,448)
                    break;
                case (50): mtx.drawImage(img, 256, 480, 32, 32, x, y, 32, 32);//红门(256,480)
                    break;
                case (51): mtx.drawImage(img, 160, 448, 32, 32, x, y, 32, 32);//红钥匙(160,448)
                    break;
                case (52): mtx.drawImage(img, 288, 480, 32, 32, x, y, 32, 32);//监狱门(288,480)
                    break;
                case (53): mtx.drawImage(img, 192 + z, 320, 32, 32, x, y, 32, 32);//小偷(192,320)
                    break;
                case (54): mtx.drawImage(img, 256 + z, 288, 32, 32, x, y, 32, 32);//老爷爷(256,288)
                    break;
                case (55): mtx.drawImage(img, 256, 320, 32, 32, x, y, 32, 32);//老奶奶(256,320)
                    break;
                case (56): mtx.drawImage(img, 192 + z * 3, 352, 96 - z * 2, 32, x - 32 + z, y, 96 - z * 2, 32);//商店(192,352)
                    break;
                case (57): mtx.drawImage(img, 192, 384, 32, 32, x, y, 32, 32);//铁剑(192,384)
                    break;
                case (58): mtx.drawImage(img, 224, 384, 32, 32, x, y, 32, 32);//银剑(224,384)
                    break;
                case (59): mtx.drawImage(img, 256, 384, 32, 32, x, y, 32, 32);//骑士剑(256,384)
                    break;
                case (60): mtx.drawImage(img, 288, 384, 32, 32, x, y, 32, 32);//圣剑(288,384)
                    break;
                case (61): mtx.drawImage(img, 224, 448, 32, 32, x, y, 32, 32);//神圣剑(224,448)
                    break;
                case (62): mtx.drawImage(img, 192, 416, 32, 32, x, y, 32, 32);//铁盾(192,416)
                    break;
                case (63): mtx.drawImage(img, 224, 416, 32, 32, x, y, 32, 32);//银盾(224,416)
                    break;
                case (64): mtx.drawImage(img, 256, 416, 32, 32, x, y, 32, 32);//骑士盾(256,416)
                    break;
                case (65): mtx.drawImage(img, 288, 416, 32, 32, x, y, 32, 32);//圣盾(288,416)
                    break;
                case (66): mtx.drawImage(img, 256, 448, 32, 32, x, y, 32, 32);//神圣盾(256,448)
                    break;
                case (67): mtx.drawImage(img, 64, 384, 32, 32, x, y, 32, 32);//绿法杖记事本(64,384)
                    break;
                case (68): mtx.drawImage(img, 0, 480, 32, 32, x, y, 32, 32);//十字架(0,480)
                    break;
                case (69): mtx.drawImage(img, 64, 448, 32, 32, x, y, 32, 32);//圣水(64,448)
                    break;
                case (70): mtx.drawImage(img, 128 + z, 512, 32, 32, x, y, 32, 32);//岩浆(128,512)
                    break;
                case (71): mtx.drawImage(img, 192 + z, 512, 32, 32, x, y, 32, 32);//星空(192,512)
                    break;
                case (72): mtx.drawImage(img, 160, 480, 32, 32, x, y, 32, 32);//绿门(160,480)
                    break;
                case (73): mtx.drawImage(img, 0, 448, 32, 32, x, y, 32, 32);//冰冻徽章(0,448)
                    break;
                case (74): mtx.drawImage(img, 32, 480, 32, 32, x, y, 32, 32);//屠龙匕首(32,480)
                    break;
                case (75): mtx.drawImage(img, 32, 448, 32, 32, x, y, 32, 32);//镐(32,448)
                    break;
                case (76): mtx.drawImage(img, 384, 448, 32, 32, x, y, 32, 32);//地震卷轴(384,448)
                    break;
                case (77): mtx.drawImage(img, 32, 512, 32, 32, x, y, 32, 32);//蓝墙(32,512)
                    break;
                case (79): mtx.drawImage(img, 320, 448, 32, 32, x, y, 32, 32);//红色上楼飞行器(320,448)
                    break;
                case (80): mtx.drawImage(img, 352, 448, 32, 32, x, y, 32, 32);//蓝色下楼飞行器(352,448)
                    break;
                case (81): mtx.drawImage(img, 64, 416, 32, 32, x, y, 32, 32);//白色对称飞行器(64,416)
                    break;
                case (82): mtx.drawImage(img, 64, 480, 32, 32, x, y, 32, 32);//魔法钥匙(64,480)
                    break;
                case (83): mtx.drawImage(img, 128, 480, 32, 32, x, y, 32, 32);//炸弹(128,480)
                    break;
                case (84): mtx.drawImage(img, 288, 448, 32, 32, x, y, 32, 32);//对战(288,448)
                    break;
            }
        }
    }
}
//绘制勇士
function drawhero() {
    for (var a = 0; a < 13; a++) {
        for (var b = 0; b < 13; b++) {
            var x = 32 * b;
            var y = 32 * a;
            switch (map[a][b]) {
                case (40): {
                    switch (d) {
                        case (1): mtx.drawImage(img, 256, 224, 32, 32, x, y, 32, 32);//勇士左(256,224)
                            break;
                        case (2): mtx.drawImage(img, 288, 192, 32, 32, x, y, 32, 32);//勇士背(288,192)
                            break;
                        case (3): mtx.drawImage(img, 224, 256, 32, 32, x, y, 32, 32);//勇士右(224,256)
                            break;
                        case (4): mtx.drawImage(img, 192, 192, 32, 32, x, y, 32, 32);//勇士正(192,192)
                            break;
                    }

                }
                    break;
            }
        }
    }
}
//按键
function onkey(e) {
    loop1: for (var a = 0; a < 13; a++) {
        loop2: for (var b = 0; b < 13; b++) {
            if (map[a][b] == 40) {
                break loop1;
            }
        }
    }
    arms[0][0] = 77;
    switch (e) {
        case 37://左
            {
                d = 1;
                drawhero();
                if (b > 0) {
                    execute(a, b - 1,a,b);
                }

            }
            break;
        case 38://上
            {
                d = 2;
                drawhero();
                if (a > 0) {
                    execute(a - 1, b,a,b);
                }
            }
            break;
        case 39://右
            {
                d = 3;
                drawhero();
                if (b < 12) {
                    execute(a, b + 1, a, b);
                }
            }


            
            break;
        case 40://下
            {
                d = 4;
                drawhero();
                if (a < 12) {
                    execute(a + 1, b,a,b); 
                }
            }
            break;
        
    }
    draw();
    drawhero();
}
//商店按键
function storeOnkey(e) {
    switch (e.keyCode) {
        case 49://1键
        case 97: {
            if (document.getElementById("store").style.display == "block") {
                document.getElementById("buyhp").click();
            }

        }

            break;
        case 50://2键
        case 98: {
            if (document.getElementById("store").style.display == "block") {
                document.getElementById("buyatt").click();
            }
        }
            break;
        case 51://3键
        case 99: {
            if (document.getElementById("store").style.display == "block") {
                document.getElementById("buydef").click();
            }

        }
            break;
        case 81://Q键
            {
                close();
            }
            break;
    }
}
//老人按键
function manOnkey(e) {
    switch (e.keyCode) {
        case 13://回车
            {
                close();
            }
            break;
    }
}
//商人按键
function womanOnkey(e) {
    switch (e.keyCode) {
        case 89: {//Y
            document.getElementById("yes").click();
        }
            break;
        case 78: {//N
            document.getElementById("no").click();
        }
            break;
    }
}
//小偷按键
function childOnkey(e) {
    switch (e.keyCode) {
        case 13://回车
            {
                document.getElementById("pass").click();
            }
            break;
    }
}
//对话按键
function talkOnkey(e) {
    switch (e.keyCode) {
        case 13://回车
            {
                if (Hero["TheMap"] == 2 && talknum == 0) {
                    document.getElementById("talktext").innerText = "------喂!"
                    talknum++;
                }
                else if (Hero["TheMap"] == 2 && talknum == 1) {
                    document.getElementById("talktext").innerText = "------喂!醒醒！"
                    talknum++;
                }
                else if (Hero["TheMap"] == 2 && talknum == 2) {
                    document.getElementById("talk").style.display = "none";
                    document.getElementById("back").style.display = "none";
                    talknum = 0;
                }
            }
            break;
    }
}
//行走事件触发
function execute(x1,y1,x,y) {
    var a = 0;//楼层倍数返回值
    var monster;//怪物
    switch (map[x1][y1]) {
        case (1):
            {
                monster = themonster(1);
                pk(monster, x1, y1, x, y);
                
            }
            break;
        case (2):
            {
                monster = themonster(2);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (3):
            {
                monster = themonster(3);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (4):
            {
                monster = themonster(4);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (5):
            {
                monster = themonster(5);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (6):
            {
                monster = themonster(6);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (7):
            {
                monster = themonster(7);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (8):
            {
                monster = themonster(8);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (9):
            {
                monster = themonster(9);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (10):
            {
                monster = themonster(10);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (11):
            {
                monster = themonster(11);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (12):
            {
                monster = themonster(12);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (13):
            {
                monster = themonster(13);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (14):
            {
                monster = themonster(14);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (15):
            {
                monster = themonster(15);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (16):
            {
                monster = themonster(16);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (17):
            {
                monster = themonster(17);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (18):
            {
                monster = themonster(18);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (19):
            {
                monster = themonster(19);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (20):
            {
                monster = themonster(20);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (21):
            {
                monster = themonster(21);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (22):
            {
                monster = themonster(22);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (23):
            {
                monster = themonster(23);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (24):
            {
                monster = themonster(24);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (25):
            {
                monster = themonster(25);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (26):
            {
                monster = themonster(26);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (27):
            {
                monster = themonster(27);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (28):
            {
                monster = themonster(28);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (29):
            {
                monster = themonster(29);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (30):
            {
                monster = themonster(30);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (31):
            {
                monster = themonster(31);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (32):
            {
                monster = themonster(32);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (33):
            {
                monster = themonster(33);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (34):
            {
                monster = themonster(34);
                pk(monster, x1, y1, x, y);
            }
            break;
        case (35)://墙
            {
                if (x1 == 11 && y1 == 9 && Hero["TheMap"] == 5) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 5 && y1 == 10 && Hero["TheMap"] == 9) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 1 && y1 == 2 && Hero["TheMap"] == 12) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 1 && y1 == 10 && Hero["TheMap"] == 12) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 1 && y1 == 11 && Hero["TheMap"] == 12) {
                    map[x1][y1] = 55;
                }
                else if (x1 == 9 && y1 == 6 && Hero["TheMap"] == 14) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 11 && y1 == 10 && Hero["TheMap"] == 16) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 11 && y1 == 11 && Hero["TheMap"] == 16) {
                    map[x1][y1] = 54;
                }
                else if (x1 == 8 && y1 == 2 && Hero["TheMap"] == 16) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 3 && y1== 6 && Hero["TheMap"] == 18) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 4 && y1 == 6 && Hero["TheMap"] == 19) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 3 && y1 == 6 && Hero["TheMap"] == 19) {
                    map[x1][y1] = 68;
                }
                else if (x1 == 9 && y1 == 3 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 8 && y1 == 3 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 7 && y1 == 3 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 6 && y1 == 3 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 5 && y1 == 3 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 4 && y1 == 3 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 10 && y1 == 3 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 11 && y1 == 3 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 11 && y1 == 2 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 11 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 10 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 9 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 8 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 7 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 6 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 5 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1== 4 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 3 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 2 && y1 == 1 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 2 && y1 == 2 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 2 && y1 == 3 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 2 && y1 == 4 && Hero["TheMap"] == 35) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 2 && y1 == 4 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 3 && y1 == 4 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 4 && y1 == 4 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 4 && y1 == 3 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 4 && y1 == 2 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 2 && y1 == 8 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 3 && y1 == 8 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 4 && y1 == 8 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 4 && y1 == 9 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 4 && y1 == 10 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 10 && y1== 4 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 9 && y1 == 4 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 8 && y1 == 4 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 8 && y1 == 3 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 8 && y1 == 2 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 10 && y1 == 8 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 9 && y1 == 8 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 8 && y1 == 8 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 8 && y1 == 9 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 8 && y1 == 10 && Hero["TheMap"] == 36) {
                    map[x1][y1] = 36;
                }
                else if (x1 == 2 && y1 == 10 && Hero["TheMap"] == 41) {
                    map[x1][y1] = 36;
                }
            }
            break;
        case (36)://地
            {
                if (Hero["Shield"] == 0) {
                    if (map[x - 1][y] == 26 || map[x][y - 1] == 26 || map[x + 1][y] == 26 || map[x][y + 1] == 26) {
                        if (Hero["HP"] > 100) {
                            map[x1][y1] = 40;
                            map[x][y] = 36;
                            Hero["HP"] = Hero["HP"] - 100;
                            drawtext();
                        }
                        else {
                            break;
                        }
                    }
                    if (map[x - 1][y] == 27) {
                        if (Hero["HP"] > 200) {
                            map[x1][y1] = 40;
                            map[x][y] = 36;
                            Hero["HP"] = Hero["HP"] - 200;
                            drawtext();
                            if (map[x - 2][y] == 36) {
                                map[x - 2][y] = 27;
                                map[x - 1][y] = 36;
                            }
                        }
                        else {
                            break;
                        }
                    }
                    if (map[x + 1][y] == 27) {
                        if (Hero["HP"] > 200) {
                            map[x1][y1] = 40;
                            map[x][y] = 36;
                            Hero["HP"] = Hero["HP"] - 200;
                            drawtext();
                            if (map[x + 2][y] == 36) {
                                map[x + 2][y] = 27;
                                map[x + 1][y] = 36;
                            }
                        }
                        else {
                            break;
                        }
                    }
                    if (map[x][y - 1] == 27) {
                        if (Hero["HP"] > 200) {
                            map[x1][y1] = 40;
                            map[x][y] = 36;
                            Hero["HP"] = Hero["HP"] - 200;
                            drawtext();
                            if (map[x][y - 2] == 36) {
                                map[x][y - 2] = 27;
                                map[x][y - 1] = 36;
                            }
                        }
                        else {
                            break;
                        }
                    }
                    if (map[x][y + 1] == 27) {
                        if (Hero["HP"] > 200) {
                            map[x1][y1] = 40;
                            map[x][y] = 36;
                            Hero["HP"] = Hero["HP"] - 200;
                            drawtext();
                            if (map[x][y + 2] == 36) {
                                map[x][y + 2] = 27;
                                map[x][y + 1] = 36;
                            }
                        }
                        else {
                            break;
                        }
                    }
                    if (map[x][y + 1] == 31 && map[x][y - 1] == 31) {
                        if (Hero["HP"] > 1) {
                            map[x1][y1] = 40;
                            map[x][y] = 36;
                            Hero["HP"] = parseInt(Hero["HP"] / 2);
                            drawtext();
                        }
                        else {
                            break;
                        }
                    }
                    if (map[x + 1][y] == 31 && map[x - 1][y] == 31) {
                        if (Hero["HP"] > 1) {
                            map[x1][y1] = 40;
                            map[x][y] = 36;
                            Hero["HP"] = parseInt(Hero["HP"] / 2);
                            drawtext();
                        }
                        else {
                            break;
                        }
                    }
                    else {
                        map[x1][y1] = 40;
                        map[x][y] = 36;
                    }
                }
                else {
                    map[x1][y1] = 40;
                    map[x][y] = 36;
                }
                
            }
            break;
        case (37)://幸运币
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[7][1] = 37;
                drawtext();
            }
            break;
        case (38)://上楼
            {
                Hero["TheMap"]++;
                changemap();
                drawtext();
            }
            break;
        case (39)://下楼
            {
                Hero["TheMap"]--;
                changemap();
                drawtext();
            }
            break;
        case (41)://红药瓶
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                a = times();
                Hero["HP"] = Hero["HP"] + 50 * a;
                drawtext();

            }
            break;
        case (42)://黄门
            {
                if (Hero["YellowKey"] > 0) {
                    map[x1][y1] = 40;
                    map[x][y] = 36;
                    Hero["YellowKey"]--;
                    drawtext();
                }
            }
            break;
        case (43)://黄钥匙
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                Hero["YellowKey"]++;
                drawtext();
            }
            break;
        case (44)://红宝石
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                a = times();
                Hero["ATK"] = Hero["ATK"] + a;
                drawtext();
            }
            break;
        case (45)://蓝宝石
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                a = times();
                Hero["DEF"] = Hero["DEF"] + a;
                drawtext();
            }
            break;
        case (46)://蓝药瓶
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                a = times();
                Hero["HP"] = Hero["HP"] + 200 * a;
                drawtext();

            }
            break;
        case (47)://传送器蓝法杖
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[5][2] = 47;
                drawtext();
            }
            break;
        case (48)://蓝门
            {
                if (Hero["BlueKey"] > 0) {
                    map[x1][y1] = 40;
                    map[x][y] = 36;
                    Hero["BlueKey"]--;
                    drawtext();
                }
            }
            break;
        case (49)://蓝钥匙
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                Hero["BlueKey"]++;
                drawtext();
            }
            break;
        case (50)://红门
            {
                if (Hero["RedKey"] > 0) {
                    map[x1][y1] = 40;
                    map[x][y] = 36;
                    Hero["RedKey"]--;
                    drawtext();
                }
            }
            break;
        case (51)://红钥匙
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                Hero["RedKey"]++;
                drawtext();
            }
            break;
        case (52)://监狱门
            break;
        case (53)://小偷
            {
                if (Hero["TheMap"] == 2) {
                    if (childnum == 1) {
                        document.getElementById("child").style.display = "block";
                        document.getElementById("childtext").innerHTML = "你清醒了吗？你到监狱时还处在昏迷中，魔法警卫把你扔到我这个房间。但你很幸运，我刚完成逃跑的暗道你就醒了，我们一起越狱吧。"
                        document.getElementById("pass").onclick = function () {
                            document.getElementById("child").style.display = "none";
                            map[7][2] = 36;
                            Hero["View"] = 1;
                            setTimeout(function () {
                                map[7][3] = 36;
                                map[7][2] = 53;
                            }, 1000);
                            setTimeout(function () {
                                map[7][2] = 36;
                                map[7][1] = 53;
                            }, 1500);
                            setTimeout(function () {
                                map[7][1] = 36;
                                map[8][1] = 53;
                                Hero["View"] = 0;
                                childnum = 2;
                            }, 2000);
                        }

                    }
                    if (childnum == 2) {
                        document.getElementById("child").style.display = "block";
                        document.getElementById("childtext").innerHTML = "我们终于逃出来了。你的剑和盾被警卫拿走了，你必须先找到武器。我知道铁剑在5楼，铁盾在9楼，你最好先取到它们。我现在有事要做没法帮你，再见。";
                        document.getElementById("pass").onclick = function () {
                            Hero["View"] = 1;
                            document.getElementById("child").style.display = "none";
                            setTimeout(function () {
                                map[8][1] = 36;
                                map[9][1] = 53;
                            }, 500);
                            setTimeout(function () {
                                map[9][1] = 36;
                                map[10][1] = 53;
                            }, 1000);
                            setTimeout(function () {
                                map[10][1] = 36;
                                Hero["View"] = 0;
                            }, 1500);
                        }
                    }
                }
            }
            break;
        case (54)://老爷爷
            {
                switch (Hero["TheMap"]) {
                    case (2): {

                    }
                        break;
                    case (3): {//红法杖怪物书
                        map[x1][y1] = 40;
                        map[x][y] = 36;
                        arms[5][1] = 78;
                        drawtext();
                        document.getElementById("man").style.display = "block";
                        document.getElementById("mantext").innerHTML = "我可以给你怪物手册。你可以用快捷键[H]去使用它。它能预测出当前楼层各类怪物对你的伤害。";
                    }
                        break;
                    case (4): {
                        map[x1][y1] = 40;
                        map[x][y] = 36;
                        document.getElementById("man").style.display = "block";
                        document.getElementById("mantext").innerHTML = "有些门不能用钥匙打开，只有当你打败它的守卫后才会自动打开。";

                    }
                        break;
                    case (6): {
                        map[x1][y1] = 40;
                        map[x][y] = 36;
                        document.getElementById("man").style.display = "block";
                        document.getElementById("mantext").innerHTML = "你购买了礼物后再与商人对话，他会告诉你一些重要的消息。";

                    }
                        break;

                }
            }
            break;
        case (55)://老奶奶
            {
                var num;
                var color;
                var gold;

                switch (Hero["TheMap"]) {
                    case 2: {

                    }
                        break;
                    case 6: {
                        if (womannum == 0) {
                            num = 1;
                            color = "蓝钥匙"
                            gold = 50;
                            document.getElementById("woman").style.display = "block";
                            document.getElementById("womantext").value = "我有" + num + "个" + color + "你出" + gold + "个金币就卖给你。";
                        }
                        else if (womannum == 1) {
                            map[x1][y1] = 40;
                            map[x][y] = 36;
                            document.getElementById("man").style.display = "block";
                            document.getElementById("mantext").innerHTML = "魔塔一共50层，每10层为一个区域。如果不打败此区域的头目就不能到更高的地方。"
                            womannum = 0;
                        }
                    }
                        break;
                }
                document.getElementById("yes").onclick = function () {
                    if (Hero["Gold"] >= gold && womannum == 0) {
                        Hero["Gold"] = Hero["Gold"] - gold;
                        womannum = 1;
                        if (color == "黄钥匙") {
                            Hero["YellowKey"] = Hero["YellowKey"] + num;
                        }
                        else if (color == "蓝钥匙") {
                            Hero["BlueKey"] = Hero["BlueKey"] + num;
                        }
                        else if (color == "红钥匙") {
                            Hero["RedKey"] = Hero["RedKey"] + num;
                        }
                        drawtext();
                        close();
                        womannum = 1;
                    }
                    else if (womannum == 1) {
                        map[x1][y1] = 40;
                        map[x][y] = 36;
                        document.getElementById("man").style.display = "block";
                        document.getElementById("mantext").innerHTML = "魔塔一共50层，每10层为一个区域。如果不打败此区域的头目就不能到更高的地方。"
                        womannum = 0;
                    }
                    else {
                        document.getElementById("womantext").value = "金币不足，下次再来";
                    }
                }
                document.getElementById("no").onclick = function () {
                    close();
                }
            }
            break;
        case (56)://商店
            {
                document.getElementById("store").style.display = "block";
                var hero = storetext();
                document.getElementById("buyhp").onclick = function () {
                    hero = storetext();
                    if (Hero["Gold"] >= hero["gold"]) {
                        Hero["Gold"] = Hero["Gold"] - hero["gold"];
                        Hero["HP"] = Hero["HP"] + hero["hp"] * Hero["Num"];
                        Hero["Num"]++;
                        hero = storetext();
                        drawtext();
                    }
                    else {
                        document.getElementById("storetext").innerHTML = "提升能力需要" + hero["gold"] + "个金币<br />你的现金不够<br />";
                    }
                }
                document.getElementById("buyatt").onclick = function () {
                    hero = storetext();
                    if (Hero["Gold"] >= hero["gold"]) {
                        Hero["Gold"] = Hero["Gold"] - hero["gold"];
                        Hero["ATK"] = Hero["ATK"] + hero["att"];
                        Hero["Num"]++;
                        hero = storetext();
                        drawtext();

                    }
                    else {
                        document.getElementById("storetext").innerHTML = "提升能力需要" + hero["gold"] + "个金币<br />你的现金不够<br />";
                    }
                }
                document.getElementById("buydef").onclick = function () {
                    hero = storetext();
                    if (Hero["Gold"] >= hero["gold"]) {
                        Hero["Gold"] = Hero["Gold"] - hero["gold"];
                        Hero["DEF"] = Hero["DEF"] + hero["def"];
                        Hero["Num"]++;
                        hero = storetext();
                        drawtext();
                    }
                    else {
                        document.getElementById("storetext").innerHTML = "提升能力需要" + hero["gold"] + "个金币<br />你的现金不够<br />";
                    }
                }
                document.getElementById("quit").onclick = function () {
                    document.getElementById("store").style.display = "none";
                }
            }
            break;
        case (57)://铁剑
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                Hero["ATK"] = Hero["ATK"] + 10;
                arms[2][3] = 57;
                drawtext();
            }
            break;
        case (62)://铁盾
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                Hero["DEF"] = Hero["DEF"] + 10;
                arms[3][3] = 62;
                drawtext();
            }
            break;
        case (67)://记事本绿法杖
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[5][3] = 67;
                drawtext();
            }
            break;
        case (68)://十字架
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[6][1] = 68;
                drawtext();
            }
            break;
        case (69)://圣水
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[9][1] = 69;
                drawtext();
            }
            break;
        case (71)://星空
            break;
        case (72)://绿门
            break;
        case (73)://冰冻徽章
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[6][3] = 73;
                drawtext();
            }
            break;
        case (74)://屠龙匕首
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[6][2] = 74;
                drawtext();
            }
            break;
        case (75)://镐
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[9][2] = 75;
                drawtext();
            }
            break;
        case (79)://红色上楼飞行器
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[9][3] = 79;
                drawtext();
            }
            break;
        case (80)://蓝色下楼飞行器
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[10][1] = 80;
                drawtext();
            }
            break;
        case (81)://白色对称飞行器
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[10][2] = 81;
                drawtext();
            }
            break;
        case (82)://魔法钥匙
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[10][3] = 82;
                drawtext();
            }
            break;
        case (83)://炸弹
            {
                map[x1][y1] = 40;
                map[x][y] = 36;
                arms[11][2] = 83;
                drawtext();
            }
            break;
        case (null):
            break;
    }
    
}
//商店文字
function storetext() {
    var hp = 100 * times();
    var att = 2 * times();
    var def = 4 * times();
    var gold = 10 * Hero["Num"] * (Hero["Num"] - 1) + 20;
    document.getElementById("storetext").innerHTML = "你若给我" + gold + "个金币<br />我就替你提升以下一种能力<br />";
    document.getElementById("buyhp").value = "<1>生命力+" + hp * Hero["Num"];
    document.getElementById("buyatt").value = "<2>攻击力+" + att;
    document.getElementById("buydef").value = "<3>防御力+" + def;
    var hero = { "hp": hp, "att": att, "def": def, "gold": gold };
    return hero;
}
//楼层数值倍数
function times() {
    var a = 0;
    if (Hero["TheMap"] <= 10)
        a = 1;
    else if (Hero["TheMap"] > 10 && Hero["TheMap"] <= 30)
        a = 2;
    else if (Hero["TheMap"] > 30 && Hero["TheMap"] <= 40)
        a = 4;
    else if (Hero["TheMap"] > 40 && Hero["TheMap"] <= 50)
        a = 8;
    return a;

}
//对战
function pk(monster, x1, y1, thex, they) {
    var pknum = Math.ceil(monster.hp / (Hero["ATK"] - monster.def)) - 1;
    var x = 32 * y1;
    var y = 32 * x1;
    var hp = monster.hp;
    //对战动画
    var drawing = function (a) {
        setTimeout(function () {
            if (a%3 == 1) {
                mtx.drawImage(img, 288, 448, 32, 32, x, y, 32, 32);//对战(288,448)
            }
            if (a % 3 == 2) {
                switch (monster.id) {
                    case (1): mtx.drawImage(img, 0, 0, 32, 32, x, y, 32, 32);//绿色史莱姆（0,0）
                        break;
                    case (2): mtx.drawImage(img, 64, 0, 32, 32, x, y, 32, 32);//红色史莱姆（64，0）
                        break;
                    case (3): mtx.drawImage(img, 192, 0, 32, 32, x, y, 32, 32);//小蝙蝠（192,0)
                        break;
                    case (4): mtx.drawImage(img, 192, 32, 32, 32, x, y, 32, 32);//初级法师(192,32)
                        break;
                    case (5): mtx.drawImage(img, 0, 32, 32, 32, x, y, 32, 32);//骷髅人(0,32)
                        break;
                    case (6): mtx.drawImage(img, 64, 32, 32, 32, x, y, 32, 32);//骷髅士兵(64,32)
                        break;
                    case (7): mtx.drawImage(img, 128, 96, 32, 32, x, y, 32, 32);//初级卫兵（128,96）
                        break;
                    case (8): mtx.drawImage(img, 128, 32, 32, 32, x, y, 32, 32);//骷髅队长(128,32)
                        break;
                    case (9): mtx.drawImage(img, 128, 0, 32, 32, x, y, 32, 32);//大史莱姆(128,0)
                        break;
                    case (10): mtx.drawImage(img, 256, 0, 32, 32, x, y, 32, 32);//大蝙蝠(256,0)
                        break;
                    case (11): mtx.drawImage(img, 256, 32, 32, 32, x, y, 32, 32);//高级法师(256,32)
                        break;
                    case (12): mtx.drawImage(img, 0, 64, 32, 32, x, y, 32, 32);//兽人(0,64)
                        break;
                    case (13): mtx.drawImage(img, 64, 64, 32, 32, x, y, 32, 32);//兽人武士(64,64)
                        break;
                    case (14): mtx.drawImage(img, 128, 64, 32, 32, x, y, 32, 32);//石头人(128,64)
                        break;
                    case (15): mtx.drawImage(img, 288, 0, 96, 96, x, y, 96, 96);//大乌贼(288,0)
                        break;
                    case (16): mtx.drawImage(img, 320, 96, 32, 32, x, y, 32, 32);//吸血鬼(320,96)
                        break;
                    case (17): mtx.drawImage(img, 128, 160, 32, 32, x, y, 32, 32);//大法师(128,160)
                        break;
                    case (18): mtx.drawImage(img, 0, 160, 32, 32, x, y, 32, 32);//鬼战士(0,160)
                        break;
                    case (19): mtx.drawImage(img, 256, 128, 32, 32, x, y, 32, 32);//战士(256,128)
                        break;
                    case (20): mtx.drawImage(img, 192, 64, 32, 32, x, y, 32, 32);//幽灵(192,64)
                        break;
                    case (21): mtx.drawImage(img, 192, 96, 32, 32, x, y, 32, 32);//中级卫兵(192,96)
                        break;
                    case (22): mtx.drawImage(img, 192, 128, 32, 32, x, y, 32, 32);//双手剑士(192,128)
                        break;
                    case (23): mtx.drawImage(img, 0, 192, 96, 96, x, y, 96, 96);//魔龙(0,192)
                        break;
                    case (24): mtx.drawImage(img, 128, 128, 32, 32, x, y, 32, 32);//骑士(128,128)
                        break;
                    case (25): mtx.drawImage(img, 64, 128, 32, 32, x, y, 32, 32);//骑士队长(64,128)
                        break;
                    case (26): mtx.drawImage(img, 0, 96, 32, 32, x, y, 32, 32);//初级巫师(0,96)
                        break;
                    case (27): mtx.drawImage(img, 64, 96, 32, 32, x, y, 32, 32);//高级巫师(64,96)
                        break;
                    case (28): mtx.drawImage(img, 256, 64, 32, 32, x, y, 32, 32);//史莱姆王(256,64)
                        break;
                    case (29): mtx.drawImage(img, 0, 128, 32, 32, x, y, 32, 32);//吸血蝙蝠(0,128)
                        break;
                    case (30): mtx.drawImage(img, 64, 160, 32, 32, x, y, 32, 32);//黑暗骑士(64,160)
                        break;
                    case (31): mtx.drawImage(img, 192, 160, 32, 32, x, y, 32, 32);//魔法警卫(192,160)
                        break;
                    case (32): mtx.drawImage(img, 256, 96, 32, 32, x, y, 32, 32);//高级卫兵(256,96)
                        break;
                    case (33): mtx.drawImage(img, 256, 160, 32, 32, x, y, 32, 32);//魔王(256,160)
                        break;
                    case (34): mtx.drawImage(img, 256, 160, 32, 32, x, y, 32, 32);//魔王(256,160)
                        break;
                }
            }
            if (a%3== 0) {
                drawhero();
            }
        }, 300 * a);
    }
    //掉血
    var num = function (a) {
        setTimeout(function () {
            if (monster.att > Hero["DEF"]) {
                Hero["HP"] = Hero["HP"] - monster.att + Hero["DEF"];
            }
            drawtext();
            if (hp >= 0) {
                hp = hp - Hero["ATK"] + monster.def;
            }
            else {
                hp = 0;
            }
            atx.font = "14px Microsoft KaiTi";
            atx.fillStyle = "#7FFF00";
            atx.fillText("生命：" + hp + " " + "攻击：" + monster.att, 36, 14);
            atx.fillText("防御：" + monster.def + " " + "金币：" + monster.coin, 36, 28);
        },300*a);
    }
    //秒杀
    var kill = function (a) {
        setTimeout(function () {
            if (a == 1) {
                mtx.drawImage(img, 288, 448, 32, 32, x, y, 32, 32);//对战(288,448)
            }
            else if (a == 2) {
                drawhero();
                Hero["Gold"] = Hero["Gold"] + monster.coin;
                arms[0][0] = monster.id;
                drawtext();
                atx.font = "14px Microsoft KaiTi";
                atx.fillStyle = "#7FFF00";
                atx.fillText("生命：" + 0 + " "+ "攻击：" + monster.att, 36, 14);
                atx.fillText("防御：" + monster.def + " " + "金币：" + monster.coin, 36, 28);
                Hero["View"] = 0;
            }
        },300*a);
    }
    if (Hero["ATK"] > monster.def) {
        if (Hero["ATK"] >= (monster.def + monster.hp)) {
            map[thex][they] = 36;
            map[x1][y1] = 40;
            arms[0][0] = monster.id;
            Hero["View"] = 1;
            drawtext();
            atx.font = "14px Microsoft KaiTi";
            atx.fillStyle = "#7FFF00";
            atx.fillText("生命：" + hp + " " + "攻击：" + monster.att, 36, 14);
            atx.fillText("防御：" + monster.def + " " + "金币：" + monster.coin, 36, 28);
            var k = 1
            for (; k <= 2; k++) {
                kill(k);
            }
        }
        
        else if (Hero["HP"] > (monster.att - Hero["DEF"]) * pknum) {
            map[thex][they] = 36;
            map[x1][y1] = 40;
            arms[0][0] = monster.id;
            Hero["View"] = 1;
            drawtext();
            atx.font = "14px Microsoft KaiTi";
            atx.fillStyle = "#7FFF00";
            atx.fillText("生命：" + hp + " " + "攻击：" + monster.att, 36, 14);
            atx.fillText("防御：" + monster.def + " " + "金币：" + monster.coin, 36, 28);
            for (var i = 3; i <= pknum * 3; i = i + 3) {
                for (var j = 1; j <=i; j++) {
                    drawing(j);
                }
                num(i);
            }
            //加金币
            setTimeout(function () {
                Hero["Gold"] = Hero["Gold"] + monster.coin;
                drawtext();
                atx.font = "14px Microsoft KaiTi";
                atx.fillStyle = "#7FFF00";
                atx.fillText("生命：" + 0 + " " + "攻击：" + monster.att, 36, 14);
                atx.fillText("防御：" + monster.def + " " + "金币：" + monster.coin, 36, 28);
                Hero["View"] = 0;
            },pknum*3*300+300);

        }
        else {

        }
    }
    else {

    }
}
//关闭所有窗口
function close() {
    document.getElementById("store").style.display = "none";
    document.getElementById("man").style.display = "none";
    document.getElementById("woman").style.display = "none";
    document.getElementById("child").style.display = "none";
}
//事件触发
function checkEvent() {
    if (!eventHappened[0]) {
        if (Hero["TheMap"] == 2 && map[2][6] + map[2][8] == 76) {
            map[5][5] = map[8][5] = map[11][5] = 36;
            map[5][9] = map[8][9] = map[11][9] = 36;
            eventHappened[0] = 1;
        }
    }
    else if (!eventHappened[2]) {
        if (Hero["TheMap"] == 8 && map[5][9] + map[5][11] == 76) {
            map[4][10] = 36;
            eventHappened[2] = 1;
        }
    }
    if (!eventHappened[1]) {
        if (Hero["TheMap"] == 3) {
            if (map[9][5] == 40) {
                Hero["View"] = 1;
                map[7][5] = 34;
                setTimeout(function () {
                    document.getElementById("boss").style.display = "block";
                    document.getElementById("bosstext").innerHTML = "魔王说：“欢迎来到魔塔，你是第一百位挑战者。你若能打败我所有的手下，我就与你一对一的决斗。现在你必须接受我的安排。";
                }, 1000);
                setTimeout(function () {
                    document.getElementById("boss").style.display = "none";
                }, 5000);
                setTimeout(function () {
                    map[8][5] = map[10][5] = map[9][4] = map[9][6] = 31;
                }, 6000);
                setTimeout(function () {
                    document.getElementById("boss").style.display = "block";
                    document.getElementById("bosstext").innerHTML ="什么？"
                }, 7000);
                setTimeout(function () {
                    document.getElementById("boss").style.display = "none";
                }, 8000);
                setTimeout(function () {
                    map[9][5] = 84;
                },9000);
                setTimeout(function () {
                    map[9][5] = map[7][5] = map[8][5] = map[10][5] = map[9][4] = map[9][6] = 36
                },10000);
                setTimeout(function () {
                    document.getElementById("back").style.display = "block";
                    map[11][2] = 40;
                    Hero["TheMap"] = 2;
                    changemap();
                    map[8][3] = 40;
                    map[10][1] = 36;
                    Hero["View"] = 0;
                    document.body.pressKey(37);
                    Hero["View"] = 1;
                    d = 4;
                    drawhero();
                    Hero["ATK"] = Hero["ATK"] - 90;
                    Hero["DEF"] = Hero["DEF"] - 90;
                    Hero["HP"] = Hero["HP"] - 600;
                    arms[2][3] = 36;
                    arms[3][3] = 36;
                    drawtext();
                }, 10100);
                setTimeout(function () {
                    document.getElementById("talk").style.display = "block";
                    document.getElementById("talktext").innerHTML = "------";
                    Hero["View"] = 0;
                },10200)
                eventHappened[1] = 1;
                
            }
        }
    }

}
//模拟按键
HTMLElement.prototype.pressKey = function (code) {
    var evt = document.createEvent("UIEvents");
    evt.keyCode = code;
    evt.initEvent("keydown", true, true);
    this.dispatchEvent(evt);
}