'use strict';
/**
 * 全局变量
 */
var weightStatGJ=true;
var heightStatM=true;

/**
 * 选择模块，用于选择参数状态
 */
function choice(){
    
    var weightUnit=document.getElementById('weight_unit');
    var jin=document.getElementById('jin');
    var gongjin=document.getElementById('gongjin');
    jin.onclick=function(){
        weightUnit.innerHTML='斤';
        weightStatGJ=false;
    }
    gongjin.onclick=function(){
        weightUnit.innerHTML='公斤';
        weightStatGJ=true;
    }






    var heightUnit=document.getElementById("height_unit");

}

choice();

/**
 * 核心算法，bmi的计算函数
 * 
 */
function bmi(weight,height) {
    
    var bmi=weight/(height*height);

}