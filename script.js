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
    
    var box_element = document.getElementById("years");
    no_years = parseInt(box_element.options[box_element.selectedIndex].value);
    
    interest = principal * no_years * rate / 100;
    
    /*Date::getFullYear() returns current year in yyyy format*/
    var d = new Date();
    current_year = parseInt(d.getFullYear()); 
    
    final_year = current_year + no_years;
    
    total_amount = principal + interest;
    
    document.getElementById("result").innerHTML = 
    "<br/>If you deposit <span class='highlight'>"+principal+
    "</span> at a interest rate of <span class='highlight'>"+rate+"% </span>, "+
    "you will receive an amount of <span class='highlight'> "+total_amount+
    "</span> in the year <span class='highlight'>"+final_year+"</span>";

}

function update_interest() {
    current_interest = document.getElementById("rate").value;
    document.getElementById("text_rate").innerHTML = current_interest+"%";
}
        