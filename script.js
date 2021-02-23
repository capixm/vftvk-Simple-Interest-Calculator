function compute()
{
    principal = parseFloat(document.getElementById("principal").value);

    if (principal <= 0 ) {
        window.alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    rate = parseFloat(document.getElementById("rate").value);
    no_years = parseInt(document.getElementById("years").years);

    interest = principal * years * rate / 100;

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
        