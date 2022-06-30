<template>
    <div class="app">
        <carousel >
            <carousel-slide v-for="slide in slides" :key="slide" class="carousel-slider">
                <img :src="slide" :alt="slide">
            </carousel-slide>
        </carousel>
    </div>    
</template>

<script>
import Carousel from './carrousel_Component/carousel.vue';
import CarouselSlide from './carrousel_Component/carouselSlide.vue';
import judo from '../../../css/images/judoCarrosel.svg'
import boxe from '../../../css/images/BoxeCarrousel.svg'
import muay from '../../../css/images/muayThaiCarrousel.svg'

export default {
    data(){
        return {
            slides: [
                judo,
                boxe,
                muay
            ]
        }
    },
    components : {
        Carousel : Carousel,
        CarouselSlide : CarouselSlide,
    }
}
</script>

<style >
    .app {
        display:flex;
        justify-content: center;
    }
    .carousel {
        position:relative;
        overflow: visible;
        width: 100%;
        height:500px;
    }
    .btn {
        padding:5px 10px;
        background-color:rgba(0,0,0,0.5);
        border:1px solid transparent;
        margin:5px 10px;
        color:#FFF;
        height:50px;
        width:50px;
        position:absolute;
        margin-top:-25px;
        z-index:2;
    }
    .btn:hover {
        cursor: pointer;
    }
    .btn:focus{
        outline:none;
    }
    .btn-next {
        top:50%;
        right:0;
    }
    .btn-prev {
        top:50%;
        left:0;
    }
    .carousel-slider {
        position:absolute;
        top:0;
        left:0;
        bottom:0;
        right:0;
        display: flex;
        justify-content: center;
    }
    .carousel-slider img {
        width:50%;
        height:100%;
    }
    .dots{
        position:absolute;
        bottom: 0;
        left:50%;
        right:50%;
        padding-bottom:2%;
        display: flex;
        justify-content: space-around;
        width:6rem;
        
    }
    .dots > span{
        width:15px;
        height: 15px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color: #E5E5E5;
        border-radius: 50%;
          will-change: transform;
          transform: translateX(0);
          transition: transform .2s;
        

    }
    .dots-active{
        background-color: #4361EE!important;
    }
</style>