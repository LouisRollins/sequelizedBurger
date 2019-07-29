$(document).ready(function(){
    $('.devourButton').on('click', function(){
        var id= $(this).attr('data-type')
        var test = {burgerId: id}
        $.post('/update', test, function(data){
        console.log(data)
        location.reload()
        })
    })

    $('#submit').on('click', function(data){
        event.preventDefault()
        var burgerInput = $('#burgerInput').val().trim()
        var newBurger = {
            burger_name: burgerInput
        }
        $.post('/add', newBurger, function(data){
            location.reload()
        })
    })
    
})
console.log('/////')
