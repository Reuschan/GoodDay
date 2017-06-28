/*tab切换*/
  window.onload=function(){
     var lis=document.querySelectorAll('.left .list li');
     var divs=document.querySelectorAll('.right .shopList');
     for(var i=0; i<lis.length; i++){
       lis[i].item=i;
       lis[i].onclick=function(){
         for(var j=0; j<lis.length; j++){
           lis[j].className='';
           divs[j].style.display='none';
          }
         this.className="active";
         divs[this.item].style.display='block';
        }
      }
  }