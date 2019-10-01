// Global_variable

document.getElementById("ConvertButton").addEventListener("click", GetInformation);
timestamp = document.getElementById('timestamp')

// SLEEP FUNCTION

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }  

// INSTEAD_OF_USING_THIS_JUST_USE_API
async function GetRate(RateFrom, RateTo){
    const url = `https://free.currconv.com/api/v7/convert?q=${RateFrom}_${RateTo}&apiKey=47e546efed223da249ce`
    const result = await fetch(url);
    const resultjson = await result.json();
    const rate = resultjson.results[RateFrom + '_' + RateTo].val;
    return rate;
}

//CONVERT USING SIMPLE MATH
async function Exchanger(Num, From, To){
    try{
        VALUE = Number(Num) * Number(await GetRate(From, To));
        console.log(`Value = ${VALUE}`)
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

// AUTO UPDATE TIME FUNCTION
async function UpdateTime(){
    while (true) {
        let today = new Date();
        if (today.getHours() <= 12){
            let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + ' AM';
            timestamp.innerHTML = time;    
        }else if (today.getHours() > 12){
            let time = (today.getHours()-12) + ":" + today.getMinutes() + ":" + today.getSeconds() + ' PM';
            timestamp.innerHTML = time;           
        }
        await sleep(1);
    } 
}

UpdateTime();