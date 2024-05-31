var i=false;
function showSearch()
{
    console.log('function runnning')
    var hiddenSearch= document.querySelector('#hiddenSearchForm');
    var searchField=document.querySelector('#searchField');
    searchField.focus();
    hiddenSearch.classList.add('show-form-animation');
    
}
function hiddenSearch()
{
    var hiddenSearch= document.querySelector('#hiddenSearchForm');  
    hiddenSearch.classList.remove('show-form-animation');
    console.log('hide search function')
}



$('.project-carousel').owlCarousel({
    loop:false,
    rewind:true,
    lazyLoadEager:10,
    margin:10,
    nav:true,
    dots:false,
    navText:[
        '<img width="20px" src="./assets/img/icons/bracket-ro.svg">',
        '<img width="20px" src="./assets/img/icons/bracket-lo.svg">'
    ],
    responsive:{
        0:{
            singleItem:true,
            items:1,
            margin:10
            
        },
        768:{
            items:4,
        },
        1000:{
            items:5,
        }
    }
})



$('.owl-carousel2').owlCarousel({
    margin:0,
    nav:true,
    
    items:1,
    loop:true,
    center:true,
    dots:false,
    navText:[
        '<i class="fas fa-chevron-left"></i>',
        '<i class="fas fa-chevron-right"></i>'
    ],
    responsive:{
        0:{
            nav:false,
            items:1,
            dots:true
        },
        768:{

        },
        1000:{

        }
    }
})



function showInfo(e)
{
    e.classList.toggle('active-heading')
    e.classList.toggle('active-border')
    var info = e.nextElementSibling;
    info.classList.toggle('d-block');
    info.classList.toggle('info-animation');
    var icon=e.firstElementChild.nextElementSibling;
    icon.classList.toggle('fa-plus');
    icon.classList.toggle('fa-minus');

}