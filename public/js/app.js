$(document).ready(()=>{
  console.log('application started')
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
$('.js-preloader').preloadinator();