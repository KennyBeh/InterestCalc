// formula @ http://www.tvmcalcs.com/tvm/formulas/annuity_due_formulas
var submit = document.getElementById("calculate")

function myFunction() {
var text;
var value = 0.0;
 
// gets the values from the inputs
var pmt = document.getElementById("pmt").value;
var int = document.getElementById("int").value;
var year = document.getElementById("year").value;
var maturity = document.getElementById("payout").value;
var CashBonus = .01
var SurvivalBenefit5 = .06
var SurvivalBenefit6 = .07
var i = int / 100

if (year < 6) {
	var n = year
	var SurvivalBenefit5 = .06
	var SurvivalBenefit6 = .00
} else if (year > 5) {
	var n = 5
	var SurvivalBenefit5 = .06
	var SurvivalBenefit6 = .07
	var subyear = year - 5
}
/* 
pmt = 120000
gcp1 = 0.17
gcp2 = 0.33
int = 4
i = int / 100
n = 10
*/

test = 0.1+0.2

payment1 = (CashBonus + SurvivalBenefit5) * pmt
payment2 = (CashBonus + SurvivalBenefit6) * pmt
interest = i + 1
a = (interest ** n - 1 ) / i
c = (interest ** subyear - 1 ) / i
b = interest ** n

First5 = (payment1 * a * interest)
Subsequent = (payment2 * c * interest)

if (year < 6) {
	FV = First5 } else {
	FV = First5 + Subsequent 
	}

function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

First5 = Math.round(First5)
Subsequent = Math.round(Subsequent)
FV = Math.round(FV)
TotalReturn = FV + Math.round(maturity)

demo = "Your compounded return is RM" + thousands_separators(FV) + ". You will get RM" + thousands_separators(First5) + " in the first 5 years. Then, RM" + thousands_separators(Subsequent) + " in the next " + subyear + " years." + ". Your total return is RM" + thousands_separators(TotalReturn) + "."

document.getElementById("demo").innerHTML = demo;
}
