function compute()
{
    principal = parseFloat(document.getElementById("principal").value);

    /*although the "principal" texbox is built to prevent user from entering
      negative numbers, an additional control is added just in case the user
      types the number directly*/
    if (principal <= 0 ) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    rate = parseFloat(document.getElementById("rate").value);
    no_years = parseInt(document.getElementById("years").years);

    interest = principal * no_years * rate / 100;

    /*Date::getFullYear() returns current year in yyyy format*/
    current_year = parseInt(new Date().getFullYear());

    final_year = current_year + no_years;

    total_amount = principal + interest;

    document.getElementById("result").innerHTML = 
    "<br/>If you deposit "+principal+" at a interest rate of "+rate+"%, "+
    "you will receive an amount of "+total_amount+" in the year "+final_year;

}

function update_interest() {
    current_interest = document.getElementById("rate").value;
    document.getElementById("text_rate").innerHTML = current_interest+"%";
}
        