(function () {
  const cnv = document.querySelector('#canvas');
  const ctx = cnv.getContext('2d');

  
  //movimentos
  let moveLeft = false;
  let moveUp = false;
  let moveRight = false;
  let moveDown = false;

  let moveLeft2 = false;
  let moveUp2 = false;
  let moveRight2 = false;
  let moveDown2 = false;
  
  let pv = 100;
  let pv2 = 100;

  let cont = 0;


  // arrays
  const quadrados = [];

  // quadrados
  const quadrado1 = new Quadrado(800, 200, 70, 70, "#f60", 5);
  quadrados.push(quadrado1);

  const quadrado2 = new Quadrado(600, 150, 50, 50, "#06f", 0);
  quadrados.push(quadrado2);

  const quadrado3 = new Quadrado(300, 300, 90, 90, "#0f6", 0);
  quadrados.push(quadrado3);

  const quadrado4 = new Quadrado(100, 200, 70, 70,"#ff00a9", 5);
  quadrados.push(quadrado4);
 
  // pressionar as teclas
  window.addEventListener('keydown', function (e) {
    const nomeKey = e.key;
    // console.log(nomeKey);
    switch (nomeKey) {
      case 'ArrowLeft':
        moveLeft = true;
        break;
      case 'ArrowUp':
        moveUp = true;
        break;
      case 'ArrowRight':
        moveRight = true;
        break;
      case 'ArrowDown':
        moveDown = true;
        break;
    }
  });

//soltar as teclas  
  window.addEventListener('keyup', (e) => {
    const key = e.key;
    switch (key) {
       case 'ArrowLeft':
         moveLeft = false;
         break;
       case 'ArrowUp':
         moveUp = false;
         break;
       case 'ArrowRight':
         moveRight = false;
         break;
       case 'ArrowDown':
         moveDown = false;
         break;
     }
  });

  //__________________________________________________
  //__________________________________________________

  // pressionar as teclas 2
  window.addEventListener('keydown', function (a) {
    const nomeKey = a.key;
    // console.log(nomeKey);
    switch (nomeKey) {
      case 'a':
        moveLeft2 = true;
        break;
      case 'w':
        moveUp2 = true;
        break;
      case 'd':
        moveRight2 = true;
        break;
      case 's':
        moveDown2 = true;
        break;
    }
  });

//soltar as teclas  2
  window.addEventListener('keyup', (a) => {
    const key = a.key;
    // console.log(key)
    switch (key) {
       case 'a':
         moveLeft2 = false;
         break;
       case 'w':
         moveUp2 = false;
         break;
       case 'd':
         moveRight2 = false;
         break;
       case 's':
         moveDown2 = false;
         break;
     }
  });

  function moverQuadrados() {
    if (moveLeft && !moveRight) {
      quadrado1.posX -= quadrado1.velocidade;
    }
    if (moveRight && !moveLeft) {
      quadrado1.posX += quadrado1.velocidade;
    }
    if (moveUp && !moveDown) {
      quadrado1.posY -= quadrado1.velocidade;
    }
    if (moveDown && !moveUp) {
      quadrado1.posY += quadrado1.velocidade;
    }

   //fiixar na tela - NÃO SAI DO CANVAS
    quadrado1.posX = Math.max(0, Math.min(cnv.width - quadrado1.width, quadrado1.posX));
    quadrado1.posY = Math.max(0, Math.min(cnv.height - quadrado1.height, quadrado1.posY));
  }

  function moverQuadrados2() {
    if (moveLeft2 && !moveRight2) {
      quadrado4.posX -= quadrado4.velocidade;
    }
    if (moveRight2 && !moveLeft2) {
      quadrado4.posX += quadrado4.velocidade;
    }
    if (moveUp2 && !moveDown2) {
      quadrado4.posY -= quadrado4.velocidade;
    }
    if (moveDown2 && !moveUp2) {
      quadrado4.posY += quadrado4.velocidade;
    }

   //fiixar na tela - NÃO SAI DO CANVAS
    quadrado4.posX = Math.max(0, Math.min(cnv.width - quadrado4.width, quadrado4.posX));
    quadrado4.posY = Math.max(0, Math.min(cnv.height - quadrado4.height, quadrado4.posY));
  }


  function exibirQuadrados() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    for (const i in quadrados) {
      const spr = quadrados[i];
      ctx.fillStyle = spr.cor;
      ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
    }
  }
  


  function colisao(){
   let bordaDL = quadrados[0].posX+quadrados[0].width/2 
   let bordaER = quadrados[3].posX-quadrados[3].width/2;
   let bordaEL = quadrados[0].posX-quadrados[0].width/2 ;
   let bordaDR = quadrados[3].posX+quadrados[3].width/2; 

   let bordaCL = quadrados[0].posY+quadrados[0].width/2 
   let bordaBR = quadrados[3].posY-quadrados[3].width/2;
   let bordaBL = quadrados[0].posY-quadrados[0].width/2 ;
   let bordaCR = quadrados[3].posY+quadrados[3].width/2; 
   
   
      if( (bordaDL === bordaER && quadrados[0].posY === quadrados[3].posY) || (bordaEL  ===  bordaDR && quadrados[0].posY === quadrados[3].posY) || (bordaCL === bordaBR && quadrados[0].posX === quadrados[3].posX) || (bordaCR === bordaBL && quadrados[0].posX === quadrados[3].posX) || ( quadrados[0].posX === quadrados[3].posX && quadrados[0].posY === quadrados[3].posY)){
        console.log("COLISÃO!");
        // document.location.reload(true);

      
        quadrados[0].posX = 800;
        quadrados[0].posY = 200;
        
        quadrados[3].posX = 100;
        quadrados[3].posY = 200;
        
        
        numeroSorteado = Math.floor(Math.random()*20);
        console.log("DANO "+numeroSorteado);
        numeroSorteado2 = Math.floor(Math.random()*20);
        console.log("DANO "+numeroSorteado2);
        pv = pv - numeroSorteado;
        console.log("a vida atual do robô 1 é: "+pv)
        pv2 = pv2 - numeroSorteado2;
        console.log("a vida atual do robô 2 é: "+pv2)
        
        cont++;
        console.log("round: "+cont)
        } 
        // else if (){
        //   console.log("COLISÃO!");
        //   // document.location.reload(true);
  
        
        //   quadrados[0].posX = 800;
        //   quadrados[0].posY = 200;
          
        //   quadrados[3].posX = 100;
        //   quadrados[3].posY = 200;
          
          
        //   numeroSorteado = Math.floor(Math.random()*20);
        //   console.log("DANO "+numeroSorteado);
        //   numeroSorteado2 = Math.floor(Math.random()*20);
        //   console.log("DANO "+numeroSorteado2);
        //   pv = pv - numeroSorteado;
        //   console.log("a vida atual do robô 1 é: "+pv)
        //   pv2 = pv2 - numeroSorteado2;
        //   console.log("a vida atual do robô 2 é: "+pv2)
          
        //   cont++;
        //   console.log("round: "+cont)
        // }
    }
    
    function inserirImagem(){

      ctx.clearRect(0,0,cnv.width, cnv.height);
      const robo = new Image();
      robo.src = "./images/kara.jpg"
      ctx.drawImage(robo, quadrado4.posX, quadrado4.posY)
      
      const robo2 = new Image();
      robo2.src = "./images/neobot.png"
      ctx.drawImage(robo2, quadrado1.posX, quadrado1.posY)

    }


    function stop(){
      if(cont == 5){

        if(pv > pv2){

          alert("O Vencedor é Esquerda!(AZUL) ")
        }else if( pv2 > pv){
          alert("O Vencedor é Direita!(ROXO) ")
        }
        cont = 0;
        
        document.location.reload(true);
      }
    }
  //solicitar uma animação ao browser e chamar a função
  //que é a propria função atualizarTela
  function atualizarTela() {
    window.requestAnimationFrame(atualizarTela, cnv);
    moverQuadrados();
    moverQuadrados2();
    exibirQuadrados();
    colisao();
    inserirImagem();
    stop();

  }
  atualizarTela();  

}());