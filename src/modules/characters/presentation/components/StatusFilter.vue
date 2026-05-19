<script setup>
defineProps({
  currentStatus: String
})

const emit = defineEmits(['change'])
</script>

<template>
  <div class="filters">
    <button
      :class="{ active: currentStatus === '' }"
      @click="emit('change', '')"
    >
      Todos
    </button>

    <button
      :class="{ active: currentStatus === 'alive' }"
      @click="emit('change', 'alive')"
    >
      Alive
    </button>

    <button
      :class="{ active: currentStatus === 'dead' }"
      @click="emit('change', 'dead')"
    >
      Dead
    </button>

    <button
      :class="{ active: currentStatus === 'unknown' }"
      @click="emit('change', 'unknown')"
    >
      Unknown
    </button>
  </div>
</template>

<style scoped lang="scss">
.filters {
  display: flex;
  gap: 16px;

  button {
    height: 56px;

    padding: 0 28px;

    border: none;

    border-radius: 14px;

    background: #111;

    color: white;

    font-size: 18px;
    font-weight: 800;

    cursor: pointer;

    transition: all 0.25s ease;

    box-shadow:
      0 5px 0 #000,
      0 8px 16px rgba(0,0,0,0.25);

    &:hover {
      transform: translateY(-3px);

      box-shadow:
        0 8px 0 #000,
        0 12px 20px rgba(0,0,0,0.3);
    }

    &.active {
  background: #d7ff39 !important;

  color: #111 !important;

  transform: translateY(-2px);

  box-shadow:
    0 5px 0 #8dad00,
    0 0 10px rgba(215,255,57,0.7),
    0 0 20px rgba(215,255,57,0.5);
}
  }
}
</style>