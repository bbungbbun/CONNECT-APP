
// alarm

let a = $('.alarm li').length;
$('.alarmNum').text(a)

$('.btnAlarm').on('click',function(){
    $('nav').css({'right':0});
})
1
$('.alarmX').on('click',function(){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
})

$('nav .close').on('click',function(){
    $('nav').css({'right':'-100%'});

    let a = $('.alarm li').length;
    if(a == 0){
        $('.alarmNum').hide()
    }else{
        $('.alarmNum').show()
        $('.alarmNum').text(a)
    }
})


// log in

$('.btnLogIn').on('click',function(){
    $('.logIn').css({'left':0});
})

$('.logIn .close').on('click',function(){
    $('.logIn').css({'left':'-100%'});
})


 
// .gnb

$('.gnb li').eq(2).addClass('active')

$('.gnb li').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
})

let gnb = ['busk','class','home','chat','commu']

$('.gnb li').on('click',function(){
    let i = $(this).index()
    $(`.${gnb[i]}`).addClass('active').siblings('div').removeClass('active')
});


// play

$('.btnplay').each(function(){
    let onOff = false;
    $(this).on('click',function(){
        onOff = !onOff;
        if(onOff===true){
        $(this).siblings('audio').get(0).currentTime = 0;
        $(this).siblings('audio').get(0).play();
        $(this).addClass('stop');
    }else{
        $(this).siblings('audio').get(0).pause();
        $(this).removeClass('stop');
    }
    });
});


// input

$('form').on('submit',function(e){
    e.preventDefault(); //새로고침 막기 

    let txt = $('input').val(); //인풋 value값 가져오기
    $('.result').html(txt)
    $('input').val(''); //비어있는 문자열 넣으면 input value가 리셋됨
 });



