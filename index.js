
function reversesentence()
    {
        var str = document.getElementById("textBox").value;   
    var sentence = str.split(" ");
    var rev = [];
    rev = sentence.reverse();
    var text =sentence.join(" "); 

    document.getElementById("test").innerHTML= "Reversed string is: "+text;
    
}
   
  
    
    