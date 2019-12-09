$(document).foundation()





//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_shrink_header_scroll
   //When the user scrolls down 50px from the top of the


  //document, resize the header's font size
  window.onscroll = function()
   {scrollFunction()};

          function scrollFunction()
  {

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
            {
              document.getElementById("header").style.fontSize = "50px";
            }
              else
              {
                document.getElementById("header").style.fontSize = "100px";
              }




// these js code for the rotating square demo https://jsbin.com/yoqevajawo/edit?html,css,js,output
  var counter = document.getElementById("counter");


      console.log(window.pageYOffset);
      var distance = window.pageYOffset;
  counter.innerHTML = distance;
   counter.style.top = distance *0.98 +450 ;
   /* counter.style.left = distance *0.2  + "px"; */
    counter.style.transform="rotate("+distance*.2+"deg)"

    if (distance > 1000)
      {
        counter.style.color="black";
        counter.style.animationPlayState="running";
      }
    else
      {
        counter.style.color="white";
      }

    if (distance > 2000)
      {
       counter.style.backgroundColor = "lightblue";
     }
    else
      {
        counter.style.backgroundColor = "grey";
      }
    }

  //  var counter = document.getElementById("slideinleft");
  //  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
    //    {
    //      document.getElementById("slideinleft") && document.getElementById("slideinright");
    //    }





//var $moving = $('.moving');
//var $win = $(window);

//$win.on('scroll',function()
//{
//var top = $win.scrollTop();
//$moving.css('transform','rotate('+ top +'deg)')
//}



// scroll image float on scroll animation from: cssanimation.rocks/scrolls-animations/

var scroll = window.requestAnimationFrame ||
  function(callback)
  {
    window.setTimeout(callback,1000/60)
  }
  var elementsToShow = document.querySelectorAll('.show-on-scroll');

  function loop ()
    {
      Array.prototype.forEach.call(elementsToShow,function(element){
        if (isElementInViewport(element))
        {
          element.classList.add('is-visible');
        }
        else
        {
          element.classList.remove('is-visible');
        }
      });
      scroll(loop);
    }

    loop ();



    function isElementInViewport(el)
      {
        if (typeof jQuery == "function" && el instanceof jQuery)
      {
        el = el [0];
      }
      var rect = el.getBoundingClientRect();
      return ((rect.top <=0 && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight) || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))

  }
