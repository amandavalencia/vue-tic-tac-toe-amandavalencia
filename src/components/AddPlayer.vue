<script setup lang="ts">
import Button from './Button.vue';

const buttonText = "Add Player"

</script>

<template>
    <p>Player 1: </p>
    <input type="text">
    <Button :my-button="buttonText"/>
    
</template>

<style scoped></style>