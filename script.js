// let a = function(a,b,call){
//     console.log(a+b);
//     call();
//     }
// a(3,5,()=>{ console.log('this is call');})



//     // function abc(a, b) {
//     //     console.log("krunal");
//     // }

//     // ((a, b, one) => { console.log(a + b), one() })
//     //     (4, 5, abc)


let a=require("fs")
let b=require("os")
let c=b.userInfo().username
console.log(c);
console.log(a.appendFile('new.txt','hii' + b.userInfo(). username, ()=>{
    console.log('created');
    
}));


