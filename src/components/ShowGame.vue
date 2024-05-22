<script setup lang="ts">
import { Player } from "../models/Player";
import { ref } from "vue";
import Button from "./Button.vue";

interface PlayerProps {
  players: Player[];
}
const props = defineProps<PlayerProps>();

const boardGame = ref(["", "", "", "", "", "", "", "", ""]);
let currentPlayer = ref(Math.floor(Math.random() * 2));

const handleSquareClick = (i: number) => {
  if (boardGame.value[i] === "") {
    if (currentPlayer.value === 0) {
      boardGame.value[i] = "O";
      handleWinner();
      currentPlayer.value = 1;
    } else {
      boardGame.value[i] = "X";
      handleWinner();
      currentPlayer.value = 0;
    }
  }
};

const handleWinner = (): boolean => {
  const winner = checkWinner();
  if (winner === true) {
  }
  return winner;
};

const handleResetPlayers = () => {
  props.players.splice(0, 2);
};

const handleNewGame = () => {
  for (let i = 0; i < boardGame.value.length; i++) {
    boardGame.value[i] = "";
  }
};

const checkWinner = (): boolean => {
  const winningCombiations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winningCombiations.length; i++) {
    const [a, b, c] = winningCombiations[i];

    if (
      boardGame.value[a] &&
      boardGame.value[a] === boardGame.value[b] &&
      boardGame.value[a] === boardGame.value[c]
    ) {
      if (boardGame.value[a] === "O") {
        return true;
      } else if (boardGame.value[a] === "X") {
        return true;
      }
    }
  }
  return false;
};

const checkForTie = () => {
  let tie = false;
  for (let i = 0; i < boardGame.value.length; i++) {
    if (boardGame.value[i] === "") {
      tie = true;
    }
  }
  return tie;
};
</script>

<template>
  <h3>Tic Tac Toe</h3>
  <h3 v-if="handleWinner() && currentPlayer % 2 === 0 ">{{ players[1].playerName + " is the winner!" }}</h3>
  <h3 v-else-if="handleWinner() && currentPlayer % 2 === 1 ">{{ players[0].playerName + " is the winner!" }}</h3>

  <section v-if="checkForTie()">
    <section v-if="!handleWinner()">
      <p v-if="currentPlayer % 2 === 0">
        {{ players[0].playerName + "´s turn" }}
      </p>
      <p v-else>{{ players[1].playerName + "´s turn" }}</p>

      <section class="gameField" v-if="checkForTie()">
        <div
          class="square"
          v-for="(square, i) in boardGame"
          :key="i"
          @click="handleSquareClick(i)"
        >
          {{ square }}
        </div>
      </section>
    </section>
  </section>
  <section>
    <Button my-button="Show score" />
    <Button my-button="Reset players" @click="handleResetPlayers" />
    <Button my-button="New game" @click="handleNewGame" />
  </section>
</template>

<style scoped lang="scss">
.gameField {
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: 300px;

  .square {
    border: solid 1px purple;
    width: 30%;
    height: 30%;
  }
}
</style>
