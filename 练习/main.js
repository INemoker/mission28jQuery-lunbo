var $allButtons = $('#buttons>span')

for(let i=0; i<$allButtons.length; i++){
    $($allButtons[i]).on('click',function(){
        var index = $($allButtons[i]).index()
        var p = index * -600
        $('#images').css({transform:"translateX(" + p + "px)"})
        n = index
        $allButtons.eq(n%3).addClass('red').siblings('.red').removeClass('red')
    })
}

var n = 0
var timerId = setInterval(()=>{
    console.log(n%3)
    $allButtons.eq(n%3).trigger('click').addClass('red')
                .siblings('.red').removeClass('red')
    n += 1        
},1000)

$('#window').on('mouseenter',function(){
    clearInterval(timerId)
})
$('#window').on('mouseleave',function(){
    var timerId = setInterval(()=>{
        console.log(n%3)
        $allButtons.eq(n%3).trigger('click').addClass('red')
                    .siblings('.red').removeClass('red')
        n += 1        
    },1000)    
})

