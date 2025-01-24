    let square = { 
        a1: '', a2: '', a3: '',
        b1: '', b2: '', b3: '',
        c1: '', c2: '', c3: '',
    }
    let player = '';
    let warning = '';
    let playing = false;

    
    
    document.querySelector('.reset').addEventListener('click', reset())

    document.querySelectorAll('.item').forEach(item => {
     item.addEventListener('click', itemClick);
     });



    function itemClick(event){
        let item = event.target.getAttribute('data-item');
        square[item] === '' ? square[item] = player : '';
        
        changePlayer();
        renderSquare();
    }

    function changePlayer(){
        player = (player === 'x') ? 'o' : 'x';
        renderInfo();
    }
    
    
    
      function reset(){
        warning = '';

        let radom = Math.floor(Math.random() * 2);
        player = (radom === 0) ? 'x' : 'o';

        for (let i in square){
            square[i] = '';
        }
        
        playing = true;

        renderSquare();
        renderInfo();
    }

    function renderSquare(){
        for (let i in square){
             let item = document.querySelector(`div[data-item=${i}]`);
             item.innerHTML = square[i];
             
        }
    };

    function renderInfo(){
        document.querySelector('.vez').innerHTML = player;
        document.querySelector('.resultado').innerHTML = warning;
    }


