let password=document.getElementById("password");
let power = document.getElementById("power-point");
password.oninput = function() {
    let point =0;
    let value= password.value;
    let widthPower=["10%","20%","30%","40%","50%","70%","90%","100%"];
    let colorPower = ["red","orange","yellow","green","violet","grey","pink","magenta","aqua"];
    if(value.length >=8)
    {
        let arrayTest = [ /[0-9]/ , /[a-z]/, /[A-Z]/,/[^0-9a-zA-Z]/];
        arrayTest.forEach((item)=> {
            if(item.test(value))
            {
                point += 1;
            }
        });
    }
    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
};