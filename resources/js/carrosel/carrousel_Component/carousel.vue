<template>
    <div class="carousel"  @keydown="checkSlide($event)" tabindex="0">
        <slot></slot>
        <button @click.prevent="next" class="btn btn-next"><ChevronRightIcon/></button>
        <button @click.prevent="prev" class="btn btn-prev"><Chevron-Left-Icon/></button>

        <div class="dots">
            <span v-for="dot in slides.length" :key="dot" id="dot"></span>
        </div>
    </div>
</template>
<script>
import { ChevronRightIcon, ChevronLeftIcon } from 'vue-feather-icons'

export default {
   components: {
    ChevronRightIcon,
    ChevronLeftIcon
  },
    data () {
        return {
            dotIndex: 0,
            index : 0,
            slides : [],
            slideDirection: '',
        }
    },
    computed: {
        slidesLength() {
            return this.slides.length;
        }
    },
    mounted(){
        this.slides = this.$children;
        this.slides.map( (slide,index) => {
            slide.index = index;
        });
    },
    methods: {
        next(){
            this.index++;
            if(this.index >= this.slidesLength){
                this.index = 0;
                this.dotIndex = 0
            }
            this.slideDirection = 'slide-right';
            
        },
        prev(){
            this.index--;
            if(this.index < 0){
                this.index = this.slidesLength - 1;
            }
             this.slideDirection = 'slide-left';
        },
        checkSlide(event){
            if(event.keyCode === 39){
                this.next();
            }else if (event.keyCode === 37){
                this.prev();
            }else {
                return;
            }
        },
    }
}
</script>
<style>
    
</style>