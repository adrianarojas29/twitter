var area = document.getElementById('insert-tweets');
var boton = document.getElementById('save');
var lista = document.getElementById('container-tweets');

setInterval(
    function()
    {
        message = document.getElementById('insert-tweets');
        text = message.value;
        document.getElementById('counter').innerHTML = text.length;
        if(text.length <= 120)
        {
            document.getElementById('counter').style.color = "green";
        }
        if(text.length > 130)
        {
            document.getElementById('counter').style.color = "red";
        }
        if(text.length > 140)
        {
            newtext = text.slice(0,140);
            message.value = newtext;
        }
    },100

)

boton.addEventListener('click', function(event){
    
        var newDiv = document.createElement('div');
        
        newDiv.innerHTML = area.value;
        newDiv.classList.add('tweets');
        
        
        lista.insertBefore(newDiv,lista.childNodes[0])

        area.value = ('');

        var fecha = new Date();
        var time= fecha.getHours() + " : " +fecha.getMinutes();

        var divTime = document.createElement('div')

        divTime.innerHTML = time;
        divTime.classList.add('times');

        lista.insertBefore(divTime,lista.childNodes[1]);

});

