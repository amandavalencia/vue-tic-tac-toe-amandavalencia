<script setup lang="ts">
import { Player } from '../models/Player';
import {ref} from 'vue'


interface PlayerProps{
    players: Player[]
}
const props = defineProps<PlayerProps>() 


const boardGame = ref(["","","","","","","","",""]);
let currentPlayer = ref( Math.floor(Math.random() *2))

const handleSquareClick = (i:number) =>{
    if(boardGame.value[i] === ""){
        if(currentPlayer.value === 0){
            boardGame.value[i] = "O";
            currentPlayer.value = 1;
        }
    else{
        boardGame.value[i] = "X";
        currentPlayer.value = 0;
    }
    }
}

</script>

<template>
    <h3>Tic Tac Toe</h3>

    <p v-if="currentPlayer % 2 === 0" > {{ players[0].playerName + "´s turn" }}</p>
    <p v-else > {{ players[1].playerName + "´s turn" }} </p>


    <section class="gameField">
    <div class="square" v-for="(square,i) in boardGame" :key="i" @click="handleSquareClick(i)">
        {{ square }}
    </div>
    </section>
</template>

<style scoped lang="scss">
.gameField{
    display: flex;
    flex-wrap: wrap;
    width: 300px;
    height: 300px;


    .square{
        border: solid 1px purple;
        width: 30%;
        height: 30%;
    }    
}

</style>