

$(function () {
  'use strit';
var $inputs = $('[data-rule]');
var inputs = [];//用于存放实例化的Input
var $form = $('#signup');
$inputs.each(function (index,node){
  var tmp =new Input(node);
  inputs.push(tmp);

  })
$form.on('submit',function(e){
  e.preventDefault();
  $inputs.trigger('blur');
  for (var i = 0; i < inputs.length; i++) {
    var item = inputs[i];
    var r = item.validator.is_valid();
    if (!r) {
      alert('invalid');
      return;
    }
  }
  alert('valid');
})
  function signup() {
   // $.post('/api/signup',{...})与服务器
  }


});
  //console.log('node',node)
  //console.log('inputs:', inputs);
/*
  var tmp = new Input(node);  //解析每个input 的验证规则
  inputs.push(tmp);
})
console.log('inputs:', inputs);
*/






//可hn以得到没一个input的那一正行
  //var inputs = $('[data-rule]');//选中页面中的所有的input[data-rule]
  //inputs.each(function(key,val) {
  //  console.log('key,val:',key,val);})






/*
$(function(){
'use strict';
  var test =new Input('#test');
  var valid = test.validator.is_valid();//定义在input.js的21行
  console.log('valid:',valid);
});
*/
//input.js 里的selector ，可以传入jQuery和字符串和原生的node对象
//选中页面中所有的input[daat-rule]
//解析每个input的验证规则
//验证 核心 基础

//吹东风



/*
$(function(){
  'user strict';
/*{}里的就是rule,''里的是用户输入的*/
/*
  var validator = new Validator('123',{
    max:100,
    min:18,
    maxlength: 5,
    minlength: 2,
    pattern: '^[a-zA-Z0-9]*$',
    // (0,+无穷)； + (1,+无穷)；? (0,1)
  });
*/
  /*
 validator.validate_max();不用传参数，
 因为在构造对象validator时给了参数
  */

  /*
  var reslut_max = validator.validate_max();
  console.log('reslut_max:',reslut_max);
  var reslut_min = validator.validate_min();
  console.log('reslut_min:',reslut_min);
*/
/*  var reslut_maxlength = validator.validate_maxlength();
  console.log('reslut_maxlength:',reslut_maxlength);

  var reslut_minlength = validator.validate_minlength();
  console.log('reslut_minlength:',reslut_minlength);
*/
/*报错：$.isNumbe ric()不是函数*!!!!!!!!!error*/
  //var reslut_numberic = validator.validate_numberic();
  //console.log('reslut_numberic:',reslut_numberic);


  //var reslut_required = validator.validate_required();
  //console.log('reslut_required:',reslut_required);
  //var reslut_pattern = validator.validate_pattern();
  //console.log('reslut_pattern:',reslut_pattern);


//});
