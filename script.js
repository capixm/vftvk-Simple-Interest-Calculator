function compute()
{
    principal = document.getElementById("principal").value;
    rate = document.getElementById("rate").value;
    no_years = document.getElementById("years").years;

    interest = principal * years * rate / 100;

    current_year = new Date().getFullYear();

    final_year = current_year + no_years;

    document.getElementById("result").innerHTML = 
    "If you deposit "+principal+" at a interest rate of "+rate+"%,"+
    "you will receive an amount of "+(principal+interest)+" in the year"+final_year;

}

function update_interest() {
    current_interest = document.getElementById("rate").value;
    document.getElementById("text_rate").innerHTML = current_interest+"%";
}
        