//alert("Hello, world!");

const textBox = document.querySelector('#textBox');

document.querySelector('#bigger_button').addEventListener('click', function(){
    //alert("Hello, World!");
    textBox.style.fontSize="24pt";
});

document.querySelector('#moo_button').addEventListener('click', function(){
    textBox.value = textBox.value.toUpperCase();

    let parts = textBox.value.split(".");
    let str = parts.join("-Moo.");
    textBox.value = str;
});

const radioButtons = document.querySelectorAll('input[name=buttons]');

radioButtons.forEach(function(i){
    i.addEventListener('change', function(){
        if(document.querySelector('#fancy:checked')){
            //alert();
            textBox.style.fontWeight='bold';
            textBox.style.color="blue";
            textBox.style.textDecoration="underline";
        }
        else if(document.querySelector('#boring:checked')){
            textBox.style.fontWeight='normal';
            textBox.style.color="black";
            textBox.style.textDecoration="";
        }
    });
});
