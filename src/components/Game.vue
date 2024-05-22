<script setup lang="ts">
import AddPlayer from "./AddPlayer.vue";
import { IGameState } from "../models/IGameState";
import { ref } from "vue";
import { Player } from "../models/Player";
import ShowGame from "./ShowGame.vue";

const state = ref<IGameState>({
  players: [],
  showHistory: false,
});


let currentID = 0

const handlePlayer = (playerInput: string) => {
  if (playerInput.trim().length > 0) {
    let player = new Player(playerInput, currentID);
    state.value.players.push(player);
    currentID++ 
  }
};
</script>

<template>
  <AddPlayer
    :players="state.players"
    v-if="state.players.length < 2"
    @add-player="handlePlayer"
  />

  <ShowGame v-else :players="state.players" />


</template>
<style scoped></style>
