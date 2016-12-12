window.onload=function(){
    /*轮播图*/
    var wrap=document.getElementById('nav_center'),
        pic=document.getElementById('pic'),
        list=document.getElementById('list').getElementsByTagName('li'),
        index=0,
        timer=null;
      //定义并调用自动播放函数
      function auto(){                   
        timer=setInterval(function(){
          index++;
          if(index>=list.length){
            index=0;
          }
          change(index);
        },3000);  
      }
      auto();
      //定义图片切换函数
      function change(curIndex){         
        pic.style.marginTop=-264*curIndex+'px';
        for(var n=0;n<list.length;n++){
            list[n].className='';
        }
          list[curIndex].className='on';
          index=curIndex;
       }
       //鼠标划过整个容器时停止播放
       wrap.onmouseover=function(){ 
          clearInterval(timer);
       }
       //鼠标离开整个容器时继续播放
       wrap.onmouseout=auto;  
       //遍历所有数字导航实现划过切换至对应的图片
       for(var i=0;i<list.length;i++){
          list[i].id=i;   
          list[i].onmouseover=function(){
            change(this.id);          
          }
        }

   /*Tab切换*/
   var tables=document.getElementById('team_tab').getElementsByTagName('li'),
       pics=document.getElementById('content_bottom').getElementsByTagName('div');

       if(tables.length!=pics.length)
       return;

       for(var i=0;i<tables.length;i++){
          tables[i].id=i;
          tables[i].onmouseover=function(){
            for(var j=0;j<tables.length;j++){
              tables[j].className='';
              pics[j].style.display='none';
            }

            this.className='high';
            pics[this.id].style.display='block';
          }
       } 
}



