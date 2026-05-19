<script setup>
const props = defineProps({
  character: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['details'])

const handleDetails = () => {
  emit('details', props.character)
}
</script>

<template>
  <article class="card">
    <!-- IMAGE -->
    <img
      :src="props.character.image"
      :alt="props.character.name"
    />

    <!-- CONTENT -->
    <div class="content">
      <h2>
        {{ props.character.name }}
      </h2>

      <!-- BADGES -->
      <div class="badges">
        <span>
          {{ props.character.gender }}
        </span>

        <span>
          {{ props.character.species }}
        </span>
      </div>

      <!-- DETAILS BUTTON -->
      <button
        class="details-button"
        @click="handleDetails"
      >
        Details
      </button>
    </div>
  </article>
</template>

<style scoped lang="scss">
.card {
  background: white;

  border: 4px solid #111;

  border-radius: 24px;

  overflow: hidden;

  box-shadow:
    0 8px 0 #111,
    0 12px 24px rgba(0,0,0,0.25);

  transition: 0.3s;

  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-6px) scale(1.01);
  }

  img {
    width: 100%;
    height: 320px;

    object-fit: cover;
  }

  .content {
    padding: 22px;

    display: flex;
    flex-direction: column;

    flex: 1;

    h2 {
      font-size: 26px;
      font-weight: 800;

      color: #111;

      margin-bottom: 16px;

      line-height: 1.2;
    }

    .badges {
      display: flex;
      flex-wrap: wrap;

      gap: 10px;

      margin-bottom: 22px;

      span {
        background: #18c8f7;

        padding: 8px 14px;

        border-radius: 999px;

        font-size: 14px;
        font-weight: 800;

        color: #111;

        box-shadow:
          inset 0 -2px 0 rgba(0,0,0,0.15);
      }
    }
  }
}

/*
|--------------------------------------------------------------------------
| DETAILS BUTTON
|--------------------------------------------------------------------------
*/

.details-button {
  width: 100%;

  height: 54px;

  border: none;

  border-radius: 14px;

  background: #111;

  color: white;

  font-size: 16px;
  font-weight: 800;

  cursor: pointer;

  transition: all 0.25s ease;

  box-shadow:
    0 5px 0 #000,
    0 10px 18px rgba(0,0,0,0.25);

  &:hover {
    background: #d7ff39;

    color: #111;

    transform: translateY(-2px);

    box-shadow:
      0 7px 0 #8dad00,
      0 0 12px rgba(215,255,57,0.7),
      0 0 20px rgba(215,255,57,0.5);
  }

  &:active {
    transform: translateY(2px);

    box-shadow:
      0 2px 0 #000,
      0 4px 8px rgba(0,0,0,0.2);
  }
}

/*
|--------------------------------------------------------------------------
| RESPONSIVE
|--------------------------------------------------------------------------
*/

@media (max-width: 768px) {
  .card {
    img {
      height: 340px;
    }

    .content {
      h2 {
        font-size: 22px;
      }
    }
  }

  .details-button {
    height: 50px;

    font-size: 15px;
  }
}
</style>