//创建类
(function(){
    var n = "Tennant";
    function Person(name){
        var _tihs ={}
        _tihs._name = name;  //传递参数
        _tihs.sayHello = function(){
            alert("Phello"+ _tihs._name+n);
        }
        return _tihs;
    }
    window.Person = Person;
}());//封装

function Teacher(name){
    var _this = Person(name);
    var superSay = _this.sayHello;
    _this.sayHello = function(){
        superSay.call(_this);
        alert("Thello"+_this._name);
    }
    return _this;
}
var t = Teacher("Frank");
t.sayHello();