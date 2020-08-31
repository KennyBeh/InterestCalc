var submit = document.getElementById("calculate")
/*
function number_format(val, decimals){
    //Parse the value as a float value
    val = parseFloat(val);
    //Format the value w/ the specified number
    //of decimal places and return it.
    return val.toFixed(decimals);*/

function myFunction() {
var text;
var value = 0.0;
 
// gets the values from the inputs
var pmt = document.getElementById("pmt").value;
var int = document.getElementById("int").value;
var maturity = document.getElementById("payout").value;
var gcp1 = .17
var gcp2 = .33
var n = 10
var i = int / 100
/*d
if (n == "5years") gcp1 = .11 // gcp2 = .20
if (n == "10years") gcp1 = .17 // gcp2 = .33
if (n == "10years") gcp2 = .33
*/

/* 
pmt = 120000
gcp1 = 0.17
gcp2 = 0.33
int = 4
i = int / 100
n = 10
*/

payment1 = pmt * gcp1
payment2 = pmt * gcp2
interest = i + 1
a = (interest ** n - 1 ) / i
c = a 
b = interest ** n

First = (payment1 * c * interest)
Second = (payment2 * c * interest)
FV = First * b

First = Math.round(First)
Second = Math.round(Second)
FV = Math.round(FV)
TotalReturn = FV + Second + Math.round(maturity)
FVsecond = FV + Second

function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }


demo = "Your compounded return is RM" + thousands_separators(FVsecond) + ". First 10 years return is RM" + thousands_separators(First)  + ". Your total return is RM" + thousands_separators(TotalReturn) + "."

// (1 + Interest) ** Years * Payment
// pmt * (((interest **n)-1)/1)

document.getElementById("demo").innerHTML = demo;
}

// 20400 254721.57  39600
// 12736.08   43575.48