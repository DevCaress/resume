<template >
    <section>
        <div class="card" v-for="work in store.expworks" :key="work.id">
            <div class="front">
                <div class="title">
                    {{work.title}}
                </div>
                <div class="place">
                    {{work.place}}
                </div>
                <div class="year">
                    {{work.year}}
                </div>
            </div>

            <div class="back">
                <p class="info">
                    {{work.info}}
                </p>
            </div>
        </div>
    </section>
</template>
<script>

import {store} from '../store/store.js'

export default {
    name: 'ExpWork',

    data() {
        return {
            store
        }
    },
}
</script>
<style scoped>

    section{
        display: flex;
        flex-direction: column;
    }
    .card{
        background-color: var(--white);
        width: 60%;
        margin: 1rem auto;
        padding: 1rem;
        border-radius: var(--br);
        height: 300px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        text-align: center;
        position: relative;
    }

    .card:hover{
        cursor: pointer;
        box-shadow: var(--box-shadow);
    }

    .card:hover .place,
    .card:hover .year{
        display: none;
    }

    .card:hover .front{
        height: 20%;
        bottom: 0;
    }

    .front{
        align-items: center;
        background-color: black;
        border-radius: var(--br);
        bottom: 0;
        color: var(--white);
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        position: absolute;
        transition: 1s ease;
        width: 100%;
        z-index: 2;
    }

    .title{
        font-weight: bold;
        font-size: 1.5rem;
    }

    .place{
        font-weight: bold;
        font-size: 1rem;
    }

    .year{
        font-size: .9rem;
        padding: .5rem 0;
        color: var(--base-light);
    }

    .info{
        font-size: 1.2rem;
    }


    @media screen and (min-width:920px){
        .card{
            width: 25%;
        }
    }

</style>