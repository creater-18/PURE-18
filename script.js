const flame = document.getElementById('flame');
const flame2 = document.getElementById('flame2');
const flame3 = document.getElementById('flame3');
const message = document.getElementById('message');

flame.addEventListener('click', function() {
    flame.style.animation = 'none'; 

    
    flame.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(0)', opacity: 0 }
    ], {
        duration: 500,
        fill: 'forwards'
    });
});

flame2.addEventListener('click', function() {
    flame2.style.animation = 'none'; 

   
    flame2.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(0)', opacity: 0 }
    ], {
        duration: 500,
        fill: 'forwards'
    });
});

flame3.addEventListener('click', function() {
    flame3.style.animation = 'none';

    
    flame3.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: 'scale(0)', opacity: 0 }
    ], {
        duration: 500,
        fill: 'forwards'
    }).onfinish=function(){
        message.style.display='block';
    };
});
