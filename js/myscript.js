const {createApp} = Vue;

createApp({
    data(){
        return {
            //l'indice della slide attiva
            activeIndex : 0,
            //variabile utilizzata per gestire l'evento di autoplay
            autoplay :null,
            //il vettore di immagini utilizzato
            images : [
                {
                    image: 'img/01.webp',
                    title: "Marvel's Spiderman Miles Morales",
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
                    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
                }
            ],
            // classes
            headerBox : "container bg-primary text-white rounded text-center mt-5 py-3",
            wrapper : "wrapper",
            slider : "slider d-flex",
            slides : "slides",
            slide : "slide",
            thumbs : "thumbs d-flex flex-column",
            thumb : "thumb"
        }
    },
    methods: {
        //al click di una thumbnail, viene cambiato il valore di activeIndex con quello dell'immagine corrispondente
        changeSlide(index)
        {
            this.activeIndex = index;
        },
        //si passa alla slide precedente
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
       //si passa alla slide successiva
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
       //ogni 3 secondi, si passa alla slide successiva
       play()
        {
            this.autoplay = setInterval(this.nextSlide ,3000);
        },
        //la funzione play viene interrotta
        stop()
        {
            clearInterval(this.autoplay);
        }  
    },
    //appena il sito viene caricato, l'autoplay entra già in funzione
    mounted()
    {
        this.play();
    }
}).mount('#app');

