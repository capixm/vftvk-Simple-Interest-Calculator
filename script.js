function compute()
{
    principal = parseFloat(document.getElementById("principal").value);
    window.alert("Principal equals to "+principal);
    /*although the "principal" texbox is built to prevent user from entering
      negative numbers, an additional control is added just in case the user
      types the number directly*/
    if (principal <= 0 ) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    rate = parseFloat(document.getElementById("rate").value);
    window.alert("Rate is "+rate);

    no_years = parseInt(document.getElementById("years").years);
    window.alert("No. years is "+no_years);

    interest = principal * no_years * rate / 100;
    window.alert("Interest amounts to "+interest);

    /*Date::getFullYear() returns current year in yyyy format*/
    var d = new Date();
    current_year = parseInt(d.getFullYear()); 
    window.alert("current year is "+current_year);

    final_year = current_year + no_years;
    window.alert("final year is "+final_year);

    total_amount = principal + interest;
    window.alert("Total Amount is "+total_amount);

    document.getElementById("result").innerHTML = 
    "<br/>If you deposit "+principal+" at a interest rate of "+rate+"%, "+
    "you will receive an amount of "+total_amount+" in the year "+final_year;

}

function update_interest() {
    current_interest = document.getElementById("rate").value;
    document.getElementById("text_rate").innerHTML = current_interest+"%";
}
        