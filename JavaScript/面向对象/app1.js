(function(){
    var n = "Tennant";
    function People(name){
        this._name = name;
    }
    People.prototype.say = function(){
        alert("peo-hello"+this._name);
    }
    window.People = People;//为外部提供接口
}()); //封装

(function(){
    function Student(name){
        this._name = name;
    }
    Student.prototype = new People();
    var superSay = Student.prototype.say;
    Student.prototype.say = function(){
        superSay.call(this);//调用父类方法
        alert("stu-hello"+this._name);//复写父类方法
    }
    window.Student = Student;
}());

var s = new Student("Frank");
s.say()