
var close = document.getElementsByClassName("delete");
var i;
for (i = 0; i < close.length; i++)
{
  close[i].onclick = function()
  {
    this.parentElement.style.display = 'none';
  }
}

function newElement()
{
  var input = document.getElementById("item").value; 
  if(input!="")
  {
    var li = document.createElement("li");
    var t = document.createTextNode(input);
    li.appendChild(t);
    document.getElementById("list").appendChild(li);
    document.getElementById("item").value="";
  
    var del_btn = document.createElement("SPAN");
    var txt = document.createTextNode("X");
    del_btn.className = "delete";
    del_btn.appendChild(txt);
    li.appendChild(del_btn);
    
    for (i = 0; i < close.length; i++)
    {
      close[i].onclick = function() 
      {
        this.parentElement.style.display = 'none';
      }
    } 
  }  
}




