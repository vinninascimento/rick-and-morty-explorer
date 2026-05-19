<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentPage: {
    type: Number,
    required: true
  },

  totalPages: {
    type: Number,
    required: true
  }
})

const emit = defineEmits(['change'])

/*
|--------------------------------------------------------------------------
| CHANGE PAGE
|--------------------------------------------------------------------------
*/

const changePage = (page) => {
  if (
    page < 1 ||
    page > props.totalPages ||
    page === props.currentPage
  ) {
    return
  }

  emit('change', page)
}

/*
|--------------------------------------------------------------------------
| PAGINATION ITEMS
|--------------------------------------------------------------------------
*/

const paginationItems = computed(() => {
  const items = []

  const current = props.currentPage
  const total = props.totalPages

  /*
  |--------------------------------------------------------------------------
  | ALWAYS FIRST
  |--------------------------------------------------------------------------
  */

  items.push(1)

  /*
  |--------------------------------------------------------------------------
  | LEFT DOTS
  |--------------------------------------------------------------------------
  */

  if (current > 3) {
    items.push('left-dots')
  }

  /*
  |--------------------------------------------------------------------------
  | MIDDLE PAGES
  |--------------------------------------------------------------------------
  */

  const start = Math.max(2, current - 1)
  const end = Math.min(total - 1, current + 1)

  for (let i = start; i <= end; i++) {
    items.push(i)
  }

  /*
  |--------------------------------------------------------------------------
  | RIGHT DOTS
  |--------------------------------------------------------------------------
  */

  if (current < total - 2) {
    items.push('right-dots')
  }

  /*
  |--------------------------------------------------------------------------
  | ALWAYS LAST
  |--------------------------------------------------------------------------
  */

  if (total > 1) {
    items.push(total)
  }

  /*
  |--------------------------------------------------------------------------
  | REMOVE DUPLICATES
  |--------------------------------------------------------------------------
  */

  return [...new Set(items)]
})
</script>

<template>
  <div class="pagination">
    <!-- PREVIOUS -->
    <button
      class="arrow"
      :disabled="props.currentPage === 1"
      @click="changePage(props.currentPage - 1)"
    >
      ‹
    </button>

    <!-- ITEMS -->
    <template
      v-for="item in paginationItems"
      :key="item"
    >
      <!-- DOTS -->
      <span
        v-if="typeof item === 'string'"
        class="dots"
      >
        ...
      </span>

      <!-- PAGE -->
      <button
        v-else
        class="page"
        :class="{ active: item === props.currentPage }"
        @click="changePage(item)"
      >
        {{ item }}
      </button>
    </template>

    <!-- NEXT -->
    <button
      class="arrow"
      :disabled="props.currentPage === props.totalPages"
      @click="changePage(props.currentPage + 1)"
    >
      ›
    </button>
  </div>
</template>

<style scoped lang="scss">
.pagination {
  width: fit-content;

  margin: 42px auto 0;

  display: flex;
  align-items: center;
  gap: 12px;

  background: #111;

  padding: 14px 18px;

  border-radius: 18px;

  box-shadow:
    0 8px 0 #000,
    0 12px 24px rgba(0,0,0,0.3);

  .page,
  .arrow {
    min-width: 48px;
    height: 48px;

    border: none;

    border-radius: 12px;

    background: transparent;

    color: white;

    font-size: 18px;
    font-weight: 800;

    cursor: pointer;

    transition: all 0.25s ease;

    padding: 0 14px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover:not(:disabled) {
      background: rgba(255,255,255,0.08);

      transform: translateY(-2px);
    }

    &:disabled {
      opacity: 0.4;

      cursor: not-allowed;
    }
  }

  .active {
    background: #d7ff39;

    color: #111;

    box-shadow:
      0 0 10px rgba(215,255,57,0.8),
      0 0 20px rgba(215,255,57,0.5);
  }

  .dots {
    color: white;

    font-size: 18px;
    font-weight: bold;

    padding: 0 4px;
  }
}

@media (max-width: 768px) {
  .pagination {
    gap: 8px;

    padding: 12px;

    .page,
    .arrow {
      min-width: 42px;
      height: 42px;

      font-size: 16px;
    }
  }
}
</style>