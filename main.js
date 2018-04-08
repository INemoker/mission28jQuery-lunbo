// $(p1).on('click',function(){
//     $(images).css({
//         transform: 'translateX(0)'
//     })
// })
// $(p2).on('click',function(){
//     $(images).css({
//         transform: 'translateX(-600px)'
//     })
// })
// $(p3).on('click',function(){
//     $(images).css({
//         transform: 'translateX(-1200px)'
//     })
// })

//在js中很多地方都要加''引号


var allButtons = $('#buttons>span')

for(let i=0; i<allButtons.length; i++){
    $(allButtons[i]).on('click',function(x){
        var index = $(x.currentTarget).index()
        var p = index * -600
        $('#images').css({transform:'translateX(' + p + 'px)'})
        n = index
        allButtons.eq(n%size).addClass('red').siblings('.red')
        .removeClass('red')
    })
}
//使用for循环来优化而且可以随意插入图片。
var n = 0
var size = allButtons.length
var timerId = setInterval(()=>{
    console.log(n%size)
    allButtons.eq(n%size).trigger('click').addClass('red').siblings('.red')
    .removeClass('red')
    //eq可以将这个一个DOM直接包装成$
    n += 1
},1000)

$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
})
$('.window').on('mouseleave',function(){
    var timerId = setInterval(()=>{
        console.log(n%size)
        allButtons.eq(n%size).trigger('click').addClass('red').siblings('.red')
        .removeClass('red')
        //eq可以将这个一个DOM直接包装成$
        n += 1
    },3000)
})