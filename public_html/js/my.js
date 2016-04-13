/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function(){
  
  
    $(".gridc").gridalicious({
  gutter: 6,
   
   animate: true,
  animationOptions: {
    queue: true,
    speed: 200,
    duration: 300,
    effect: 'fadeInOnAppear',
    
     
    
  }
  });
  $(".fancybox").fancybox();
 });