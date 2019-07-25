$(document).ready(()=>{
    let current = 0 ;
    $('.left').click(()=>{
        var currentImg = $('.active')
        var prevImg = currentImg.prev()

        if(prevImg.length){
            currentImg.removeClass('active').css('z-index',-10)
            $('.cards').css('transition','300ms ease-in')
            prevImg.addClass('active').css('z-index',999)
        }else{
            currentImg.removeClass('active').css('z-index',-10)
            document.querySelector('.cards').lastElementChild.classList.add('active')
        }
    })

    $('.right').click(()=>{
        var currentImg = $('.active')
        var nextImg = currentImg.next()

        if(nextImg.length){
            currentImg.removeClass('active').css('z-index',-10)
            nextImg.addClass('active').css('z-index',999)
        }else{
            currentImg.removeClass('active').css('z-index',-10)
            document.querySelector('.cards').firstElementChild.classList.add('active')
        }
    })
})