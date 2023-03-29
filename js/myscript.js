/* 
    ` <div class="slide active">
        <img  src="./img/01.webp" alt="img1">
    </div> ` 
*/

// creazione del vettore di immagini
const {createApp} = Vue;

createApp({
    data(){
        return {
            activeIndex : 0,
            autoplay :null,
            images : [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morales',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: "'Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.'"
                }
            ],
            // classes
            headerBox : "container bg-primary text-white rounded text-center mt-5 py-3",
            wrapper : "wrapper",
            slider : "slider d-flex",
            slides : "slides",
            slide : "slide",
            thumbs : "thumbs d-flex flex-column",
            thumb : "thumb",
            thumbNav: "thumb-nav d-flex flex-column justify-content-between"
        }
    },
    methods: {
        previousSlide()
       {
        if(this.activeIndex == this.images.length - 1)
        {
            this.activeIndex = 0;
        }
        else
        {
            this.activeIndex++;
        }
       },
       nextSlide()
       {
        if(this.activeIndex == 0)
        {
            this.activeIndex = this.images.length - 1;
        }
        else
        {
            this.activeIndex--;
        }
       },
       play()
        {
            this.autoplay = setInterval(this.nextSlide ,3000);
        },
        stop()
        {
            clearInterval(this.autoplay);
        }  
    },
    mounted()
    {
        this.play();
    }
}).mount('#app');

