<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['search'])

const search = ref('')

let timeout = null

watch(search, (value) => {
  clearTimeout(timeout)

  timeout = setTimeout(() => {
    emit('search', value)
  }, 500)
})
</script>

<template>
  <input
    v-model="search"
    type="text"
    placeholder="Search characters"
    class="search"
  />
</template>

<style scoped lang="scss">
.search {
  width: 320px;

  height: 58px;

  background: #111;

  border: none;

  border-radius: 14px;

  padding: 0 20px;

  color: white;

  font-size: 18px;

  outline: none;

  box-shadow:
    0 6px 0 #000,
    0 10px 18px rgba(0,0,0,0.25);

  transition: 0.25s;

  &:focus {
    transform: translateY(-2px);

    box-shadow:
      0 8px 0 #000,
      0 12px 22px rgba(0,0,0,0.3);
  }

  &::placeholder {
    color: #777;
  }
}
</style>