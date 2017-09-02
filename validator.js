$(function (){
  'use strict';

window.Validator = function(val,rule) {


    this.is_valid = function (new_val) {
      var key;
      if (new_val !== undefined)
      val = new_val || val;
    /*顾及用户输入变化和填了正确的信息后又删除的情况
    if(new_val)
      val = new_val;
      */
  //如果不是必填项，用户也没填 任何内容，则直接判定合法
      if(!rule.required && !val)
        return true;

      for (key in rule) {
        //如??果遇到'required'跳过，已经检测过了
        if (key == 'required')
          continue;
        //调用rule 中相对应的方法
        var r = this['validate_' + key]();
        if(!r) return false;
      }
      return true;
    }


this.validate_max = function () {
  pre_max_min();
    return val <=rule.max;
  }
  this.validate_min = function () {
  pre_max_min();
    return val >=rule.min;
  }

  this.validate_maxlength = function () {
  pre_length();
    return val.length <=rule.maxlength;
  }

  this.validate_minlength = function () {
  pre_length();
    return val.length >=rule.minlength;
  }
  /*error:  $.isNumberic(val)是数字才返回true*/
  /*this.validate_numberic = function() {
    return  $.isNumberic(val);
  }*/


//必填项，
//  var real = $.trim(val);去除字符串两头的空格,
  this.validate_required = function() {
    var real = $.trim(val);
    if (!real && real !== 0) {
      return false;
    }
    return true;
  }

//正则表达式，匹配rule.pattren,
//return reg.test(val); 匹配返回true
  this.validate_pattern = function() {
    var reg = new RegExp(rule.pattern);
    return reg.test(val);
  }

 /*用于完成this.validate_max或
 this.validate_min的前置工作*/
  function pre_max_min() {
    val = parseFloat(val);
  }

  /* 完成this.validate_maxlength或
  this.validate_minlength的前置工作*/
  function pre_length() {
    val = val.toString();
  }

 }
});
/*val = parseFloat(val); 变成浮点型，以防输入小数*/
/*两个最外层的$()是确保文件全部加载完成后开始执行程序，
validator.js的$()使得内部的变量不污染全局变量
*/
