
// CURRENCY RATE TO USD SAVE LIST
const CurrencyRate = {
    VND: 23255.814,
    JPY: 107.82,
    EUR: 0.915,
    USD: 1,
    KRW: 1199.04077,
    IDR: 14084.507,
};
//CONVERT USING SIMPLE MATH
function Exchanger(Num, From, To){
    try{
        VALUE = (Number(Num) / CurrencyRate[From]) * CurrencyRate[To];
    }catch (e){
        alert("Some Error happened with input");
        console.log(e);
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
    const Num = document.getElementById('inputNum').value;
    const From = document.getElementById('fromCurrency').value;
    const To = document.getElementById('toCurrency').value;
    if (isNaN(Num)){
        alert('Please input number')
    }else{
        Exchanger(Num, From, To);
    }
}

