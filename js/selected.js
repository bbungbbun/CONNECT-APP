
// btn click


$('.btn button').eq(0).addClass('active')
$('.select1').addClass('active')

$('.btn button').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active');
    let i = $(this).index()
    $(`.select${i+1}`).addClass('active').siblings().removeClass('active');
});


$('.select button').on('click',function(){
    $(this).toggleClass('active')
});


$('.rough button').on('click',function(){
    $(this).toggleClass('active')
});


// selected btn 옮기기

let txtArr = [];

let printArr=[];

function printResult(result){
    $('.selected').append(`<button>${result}</button>`);
}//출력함수

$('.rough button, .select button').on('click',function(){
    let txt = $(this).text();    
    let compare = txtArr.indexOf(txt);
    if( compare == -1){
        txtArr.push(txt);
    }else{//해당 index번호 제거
        printArr = txtArr.map(function(xx,xi){
            if(xi != compare){
                return xx;
            }
        }); 
        txtArr = printArr;
    }
    $('.selected').html('');
    txtArr.forEach(function(e){
        if(e){printResult(e);}
    })//최종출력
});

$('.reset').on('click',function(){
    $('.selected').html('');
    printArr = [];
    txtArr = [];
    $('.select button').removeClass('active')
    $('.rough button').removeClass('active')

});

