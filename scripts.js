document.addEventListener("DOMContentLoaded", function(){
    msgDiv = document.querySelector("div.message");
    btn = document.querySelector("button.btn");

    btn.addEventListener("click", function(event){
        //Prevents page refresh
        event.preventDefault();

        var input = document.querySelector("input").value;
        var text = "";

        if (input === ""){
            text = "<p>Please enter a valid email address.</p>";
            msgDiv.innerHTML = text;
        }
        else{
            text = "<p>Thank you!</p> <p>Your email address '" + input + "' has been added to our mailing list!</p>";
            msgDiv.innerHTML = text;
        }
    });
    
});