document.body.addEventListener('keyup', (event) =>{   //keyup acontece quando aperto(keydown) uma tecla e solto(keyup) ela
    //e uso document.body para que funcione em qualquer lugar do meu site

  //  console.log(event.code);  //code para mostrar o código da tecla pressionada. Apenas para aprender o código de cada tecla

    playSound( event.code.toLowerCase() ); //toLowerCase para deixar o código das teclas MINUSCULOS e ficar igual ao nome dos arquivos na pasta SOUNDS
});

document.querySelector('.composer button').addEventListener('click',() => {  //BUTTON dentro da classe COMPOSER no html
    let song = document.querySelector('#input').value;

    if (song !== ''){
        let songArray = song.split(''); //corta a string, nesse caso de vazio '', vai transformar cada letra em um ARRAY 
        playComposition(songArray);
    }
}) 

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    if(audioElement){
        audioElement.currentTime = 0; //isso faz que quando eu aperte a tecla ele envie o som relacionado sem ter q esperar acabar o que está em curso
        audioElement.play(); // play é a função que faz tocar o audio (aquele que associamos ao HTML)
    }

    if(keyElement){
        keyElement.classList.add('active'); // classList.add para ADICIONAR a classe ACTIVE criada no CSS 
        //ou seja, quando pressiono e SOLTO uma tecla (keyup) essa tecla passa a receber a classe ACTIVE

        setTimeout(() => {
            keyElement.classList.remove('active'); //e classList.remove para REMOVER a classe active do elemento
        }, 300); //após 300milisegundos 
    }
};

function playComposition(songArray){

    let wait = 0;

    for(let i of songArray){
        setTimeout(() => {
            playSound(`key${i}`);
        }, wait);

        wait += 250;
    }
};