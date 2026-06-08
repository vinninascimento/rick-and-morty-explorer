<script setup>
defineProps({
  currentStatus: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['change'])

const statuses = [
  {
    label: 'Todos',
    value: ''
  },
  {
    label: 'Alive',
    value: 'alive'
  },
  {
    label: 'Dead',
    value: 'dead'
  },
  {
    label: 'Unknown',
    value: 'unknown'
  }
]

const selectStatus = (status) => {
  emit('change', status)
}
</script>

<template>
  <div class="status-filter">
    <button
      v-for="status in statuses"
      :key="status.value"
      class="status-btn"
      :class="{
        active: currentStatus === status.value
      }"
      @click="selectStatus(status.value)"
    >
      {{ status.label }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.status-filter {
  display: flex;
  gap: 16px;
}

.status-btn {
  height: 58px;

  padding: 0 28px;

  border: none;

  border-radius: 14px;

  background: #111;

  color: white;

  font-size: 20px;
  font-weight: 800;

  cursor: pointer;

  transition: .25s;

  box-shadow:
    0 6px 0 #000,
    0 10px 16px rgba(0,0,0,.25);

  &:hover {
    transform: translateY(-2px);
  }
}

.active {
  background: #d7ff39;

  color: #111;

  box-shadow:
    0 4px 0 #9dc700,
    0 0 18px rgba(215,255,57,.8);
}
</style>