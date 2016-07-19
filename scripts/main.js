'use strict';
/**
 * 全局变量
 */
/*function choice*/
var weightStatGJ=true;
var heightStatM=true;
/**function calculator */
var bmi;

/**
 * 选择模块，用于选择参数状态
 */
function choice(){
    //按照id选择了相关的元素
    var weightUnit=document.getElementById('weight_unit');
    var jin=document.getElementById('jin');
    var gongjin=document.getElementById('gongjin');
    //单击单选框会产生的效果，全局变量将会用于计算的模块中
    jin.onclick=function(){
        weightUnit.innerHTML='斤';
        weightStatGJ=false;
        gongjin.checked='';
    }
    gongjin.onclick=function(){
        weightUnit.innerHTML='公斤';
        weightStatGJ=true;
        jin.checked='';
    }

    var heightUnit=document.getElementById("height_unit");
    var limi=document.getElementById('limi');
    var mi=document.getElementById('mi');
    //单击单选框会产生的效果，全局变量将会用于计算的模块中
    limi.onclick=function(){
        heightUnit.innerHTML='厘米';
        heightStatM=false;
        mi.checked='';
    }
    mi.onclick=function(){
        heightUnit.innerHTML='米';
        heightStatM=true;
        limi.checked='';
    }

}
//运行选择程序
choice();

/**
 * 核心算法，bmi的计算函数
 * 
 */
var calculator=document.getElementById('calculator');
calculator.onclick=function () {
    var weight=parseFloat(document.getElementById('weight_num').value);
    var height=parseFloat(document.getElementById('height_num').value);
    if (weightStatGJ) {
        if (heightStatM) {
            bmi=weight/(height*height);
        } else {
            height=height/10;
            bmi=weight/(height*height);
        }
    } else {
        if (heightStatM) {
            weight=weight/2;
            bmi=weight/(height*height);
        } else {
             weight=weight/2;
            height=height/10;
            bmi=weight/(height*height);
    }
        return bmi;
    }
}