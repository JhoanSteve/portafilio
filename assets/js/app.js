
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

let btn_menu = document.querySelector('.btn-menu');
let navbar_links = document.querySelector('.navbar-links');
menu_open_load = function(){
 

  btn_menu.onclick = function(){
    if(btn_menu.classList.contains('is-open')){
      btn_menu.classList.remove('is-open');
      navbar_links.classList.remove('is-open');
    }else{
      btn_menu.classList.add('is-open');
      navbar_links.classList.add('is-open');
    }
  }
}

menu_close_item_laod = function(){
  nav_items = document.querySelectorAll('.navbar-nav>.nav-item');
  
  nav_items.forEach(element => {
    element.onclick = function()
    {
      btn_menu.classList.remove('is-open');
      navbar_links.classList.remove('is-open');

    }
  });
}

menu_open_load();
menu_close_item_laod();