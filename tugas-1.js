
const nama = ["Cahaya", "Hartati", "Sitanggang"];

//1
const myname = nama.map(namaa => 1 + namaa);
console.log(myname);
//2
const myname1 = myname.filter(namaa => namaa.includes("i"));
console.log(myname1);
//3
const myNickname = myname.find(namaa => namaa.includes("t"));
console.log(myNickname);
//4
function welcome(callback){
    console.log("Selamat Datang");
    callback();
}

welcome(
    function(){
        console.log(myNickname);
    });



