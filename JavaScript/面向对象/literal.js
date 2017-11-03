//字面式声明对象
// var person={
//     name:"Frank",
//     age:23,
//     eat:function(){
//         alert("能吃")
//     }
// }
// alert(person.name);

// // 函数构造器构造对象
function Person(){

}
Person.prototype={
    name:"Frank",
    age:23,
    eat:function(){
        alert("吃吃吃")
    }
}
var p = new Person();
