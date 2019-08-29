$(document).ready(()=>{
  document.querySelector('#contact-form').addEventListener('submit',(e)=>{
    e.preventDefault()

    $.ajax({
        type: 'POST',
        url: $("#contact-form").attr("action"),
        data: $("#contact-form").serialize(), 
      });
      document.querySelector('#contact-form').reset()
      document.querySelector('.msgForm').textContent = 'Your Message Has Been Sent ....'
      setTimeout(()=>{
        document.querySelector('.msgForm').textContent = ''
      },2000)
})
})

//--------------nav colour change------------------
$(document).scroll(function() {
  if($(document).scrollTop() >  50){
      $('nav').css({
          'background':'#4aa4e6',
          'transition' : 'all 300ms ease-in-out',
          'opacity' : '.95'
       });
       $('.nav-link, .navbar-brand').css({
         'color' : 'white'
       })
  }else{
   $('nav').css({
       'background':'transparent',
       'transition' : 'all 300ms ease-in'
    });
  }
})