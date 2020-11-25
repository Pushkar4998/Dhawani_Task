var flag=0;
function resize()
{
   ele= document.getElementsByClassName("box");
   if(flag==0)
   {
       ele.classList.toggle("big");
       flag=1;
   }
   else
   {
       ele.classList.toggle("box");
       flag=0;
       

   }


}