
$(function() {
'use strict';
//三个暴露在外的function：window.Input，代表页面中的一个input,
//load_validator() 方便多次加载validator--get_val();
//传入的值，就是确定他是哪一个input
//selector是选择器 ,代表的元素叫 ele
//如果selector是一个字符串，说明selector是个选择器
//如果selector是一个选好了的jQuery对象，直接应用
//那么需要在程序里判断
//$ele 就是被选中的input
window.Input = function (selector) {
  var $ele,
  $error_ele,
  me = this,
  rule = {required:true};

  this.load_validator = function () {
    var val = this.get_val();
    this.validator = new Validator(val,rule);//实例化
  }

  this.get_val = function(){
    return $ele.val();
  }
  function init() {
    find_ele();
    parse_rule();
    me.load_validator();
    get_error_ele()
    listen();
  }

    function find_ele() {
      //判断传进来的是jQuery的后代，说明已经
      if (selector instanceof jQuery){
        $ele = selector;
      }else {
        $ele = $(selector);
      }
    }


  //change实时，blur,;keyup键抬起来就检测
  function listen() {
    $ele.on('blur',function() {
      var valid = me.validator.is_valid(me.get_val());
      if(valid)
        $error_ele.hide();
      else {
        $error_ele.show();
      }

    })
  }
  function get_error_ele() {
    $error_ele = $(get_error_selector());
  }
  function get_error_selector() {
    return '#' + $ele.attr('name') + '-input-error';
  }

  //选中错误信息
  //$('#' + $ele.attr('name') + '-input-error')
  //内部的$是被选中的input，外部的$是再次选择该input报错
  //需封装成函数

// date()是用来获取 index.html里 属性data-ABC内的数据的
//data('ABC')里面填data-后的名称
//rule_str是一个字符串
  function parse_rule() {
    var i;
    var rule_str = $ele.data('rule');
    if (!rule_str) return;

    var rule_arr = rule_str.split('|');
    for (i = 0; i < rule_arr.length; i++) {
      var item_str = rule_arr[i];
      var item_arr = item_str.split(':');

      rule[item_arr[0]] = item_arr[1];

    }
    //dui对象{ min:18,maxlength:10}
    /* JSON.parse()的作用是，保持传入数据的类型，
    没有的JSON.parse()湖北一律视为字符串
    rule_arr是个又字符串组成的数组
        ['min:18',
      'maxlength:10']
    */

  }

  init();
}

});
