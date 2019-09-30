document.getElementById("Datetime").innerHTML = new Date().toDateString();

//GET ALL BACK INTO AN BASED CURRENCY AND COVNERT
function GetRate(Currency){
    if (Currency === "VND"){
        return 23255.814;
    }else if (Currency === "JPY"){
        return 107.82;
    }else if (Currency === "EUR"){
        return 0.915;
    }else if (Currency === "USD"){
        return 1;
    }else if (Currency === "KRW"){
        return 1199.04077;
    }else if (Currency === "IDR"){
        return 14084.507;
    }
};
//CONVERT USING SIMPLE MATH
function Exchanger(Num, From, To){
    try{
        VALUE = (Number(Num) / GetRate(From)) * GetRate(To);
    }catch{
        alert("Some Error happened with input");
    }if(VALUE> 0){
        document.getElementById("result").innerHTML = Formatter(VALUE, To);
        return false;
    }
};
//RETURN FORMATTED CONTENT
function Formatter(Num, To){
    const formatter = new Intl.NumberFormat('en', {
        style: 'currency',
        currency: To,
      });
    return "Converted to "+ formatter.format(Num);
}
//GET VARIABLE NEEDED AND CONVERT
function GetInformation(){
    var Num = document.getElementById('inputNum').value;
    var From = document.getElementById('fromCurrency').value;
    var To = document.getElementById('toCurrency').value;
    if (isNaN(Num)){
        alert('Please input number')
    }else{
        Exchanger(Num, From, To);
    }
}