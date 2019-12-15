var arrayStr = ["Home","back","close","continue"];
//to add the list item
function myFunction()
{
    var addList = "";
    var newList = document.getElementById("textBox").value;
        if (newList.length > 0)
        {
            arrayStr.push(newList);
        }
    var listLength = arrayStr.length;
   for( var i=0; i<listLength; i++)
    {
addList += "<li>" + arrayStr[i] +"</li>";
    }
    document.getElementById("showList").innerHTML = addList;    
}

//to delete the list item
function delFunction()
{
    var delList = document.getElementById("textBox").value;
    var addList = "";
    
     var delVal = arrayStr.indexOf(delList);
     if(delVal>=0)
     {
     arrayStr.splice(delVal,1); 
     }
    var listLength = arrayStr.length;
   for( var i=0; i<listLength; i++)
    {

addList += "<li>" + arrayStr[i] +"</li>";
  }
    document.getElementById("showList").innerHTML = addList;    
}

