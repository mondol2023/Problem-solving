const cards =document.getElementsByClassName('card');

let allImages= document.getElementsByClassName('card-image');
let movesDisplay=document.querySelector('.move-counter');
let toggledCardsArray=[ ];
let move = 0;
let winCount =0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        id =1, 
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'Angular Image'
    },
    {
        id =2,
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'HTML Image'
    },
    {
        id = 3,
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'javaScript Image'
    },
    {
        id= 4,
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'React  Image'
    },
    {
        id =5, 
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'VUE Image'
    },
    {
        id =6, 
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'AJavaScript Image'
    },
    {
        id =7, 
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'Vue Image'
    },
    {
        id =8, 
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'HTML Image'
    },
    {
        id =9, 
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'CSS Image'
    },
    {
        id =10, 
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'Angular Image'
    },
    {
        id =11, 
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'CSS Image'
    },
    {
        id =12, 
        image:   'istockphoto-123133494-1024x1024.webp' newAlt: 'React Image'
    }
]

//function to restart the game
constrestartGame= () =>{
    let toggledCard= document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })

    toggledCardsArray.length = 0;
    move=0;
    winCount =0;
    movesDisplay.textContent = move;
    let allImageSrc = document.getElementsByClassName('card-image');
    Object.values(allImageSrc).forEach((el, index) => {
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imageslinkArray[index].id;
    })
}
restart.addEventListener('click',restartGame);

//check for last click and current
//clicked cards and changes applied accordingly
for(var i=0; i<cards.length; i++){
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = toggledCardsArray[toggledCardsArray.length-2].querySelector('.card-image').src;
        if(thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function(el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                },
            500);
            })
            toggledCardsArray.length = 0;
            move++;
            winCount++;
        }
        movesDisplay.innerTExt =`Moves : $(move)`;
        if (winCount ===6) {
            setTimeout(()=> {
                alert(`congratulations!!!you won the game in ${move} moves`)
            },
        300)
        }
    })
    
}
