<script setup lang="ts">
import { Player } from '../models/Player';
import Button from './Button.vue';
import {ref} from 'vue'

const buttonText = "Add Player";
const playerInput = ref("")


interface PlayerProps{
    players: Player[]
}
defineProps<PlayerProps>()

defineEmits<{
    (e:'addPlayer', playerInput:string):void
}>()

</script>

<template>
    <section> 
    <p v-if="players.length == 0">Add player X:</p>
    <p v-else-if="players.length == 1">Add player O:</p>
    
    <input type="text" v-model="playerInput">
    <Button :my-button="buttonText" @click="$emit('addPlayer', playerInput)"/>
    </section>
    
</template>

<style scoped></style>