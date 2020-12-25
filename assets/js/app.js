
btn_show_is_scroll_page_awake = function()
{
    var mybutton = document.getElementById("myBtnScroll");
    var navbar  = document.querySelector('.navbar');

    window.onscroll = function() {
        //document.body.scrollTop > 90 || document.documentElement.scrollTop > 90
        if (document.documentElement.scrollTop > 100) {
            navbar.classList.add('active-nav');
            navbar.classList.add('fadeInDown');
            navbar.classList.add('animated');
          } else {
            navbar.classList.remove('active-nav');
            navbar.classList.remove('fadeInDown');
            navbar.classList.remove('animated');
            
          }

          if ( document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
            mybutton.classList.add('show');
            } else {
            mybutton.classList.remove('show');
          }
    };


    mybutton.onclick = function()
    {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

}

btn_show_is_scroll_page_awake();
//----

