function ShowHide(div) {     d = document.getElementById(div);          $('.projects').bind('mousemove', function(e){             $('.tail').css({                 left:  e.pageX - 300,                 top:   e.pageY - 130             });         });      if( d.style.display == "none" )     {         d.style.display = "";     }     else     {         d.style.display = "none";     }  }

function SwapDivsWithMouseOver(div1,div2)
{
    d1 = document.getElementById(div1);
    d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
        d1.style.display = "none";
        d2.style.display = "";
   }
   else
   {
        d1.style.display = "";
        d2.style.display = "none";
   }
}