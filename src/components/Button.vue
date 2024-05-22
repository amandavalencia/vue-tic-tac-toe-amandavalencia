<script setup lang="ts">
interface myButton{
    myButton: string
}
defineProps<myButton>()
</script>

<template>
    <button>{{ myButton }}</button>
    
</template>

<style scoped></style>