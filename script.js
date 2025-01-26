    let square = { 
        a1: '', a2: '', a3: '',
        b1: '', b2: '', b3: '',
        c1: '', c2: '', c3: '',
    }
    let player = '';
    let warning = '';
    let playing = false;

    
     let altButton = document.querySelector('.reset');
     document.querySelector('.reset').addEventListener('click', reset)
     

    document.querySelectorAll('.item').forEach(item => {
     item.addEventListener('click', itemClick);
     });



    function itemClick(event){
        let item = event.target.getAttribute('data-item');
        if (square[item] === '' && playing) {
            square[item] = player;
            changePlayer();
            renderSquare();
            checkGame();
        }
    }

    function changePlayer(){
        player = (player === 'x') ? 'o' : 'x';
        renderInfo();
    }
    
    
    
      function  reset(){
        warning = '';

        let radom = Math.floor(Math.random() * 2);
        player = (radom === 0) ? 'x' : 'o';

        for (let i in square){
            square[i] = '';
        }
        
        playing = true;
        
        if (altButton.value === 'Play'){
            altButton.value = 'Reset';
        } 
        

        renderSquare();
        renderInfo();
    }

    function renderSquare(){
        for (let i in square){
             let item = document.querySelector(`div[data-item=${i}]`);
             item.innerHTML = square[i];
             
          }
      }
  
      function renderInfo(){
          document.querySelector('.vez').innerHTML = player;
          document.querySelector('.resultado').innerHTML = warning;
      }

       
      function checkGame(){
        if(checkWinner('x')){
            warning = ' "x" Vencedor';
            playing = false;

        

        } else if (checkWinner('o')){
            warning = ' "o" Vencedor';
            playing = false;  

         

        } else if (isFull()){
            warning = 'Deu Velha';
            playing = false;
        }
      
        renderInfo();
    }
    

    function isFull(){
        for (let i in square){
            if (square[i] === ''){
                return false;
            }
        }
        return true;
    
    }

    function checkWinner(player){
        let lines = [
            'a1,a2,a3',
            'b1,b2,b3',
            'c1,c2,c3',
    
            'a1,b1,c1',
            'a2,b2,c2',
            'a3,b3,c3',
            
            'a1,b2,c3',
            'a3,b2,c1',
        ]
    
        for (let w in lines) {
            let pArray = lines[w].split(',');
            let hasWon = pArray.every(option => square[option] === player);
    
            if (hasWon) {
                return true;
            }
        }
        return false;
    }


