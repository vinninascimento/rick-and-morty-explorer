<script setup>
const props = defineProps({
  character: {
    type: Object,
    required: true
  },

  isOpen: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="overlay"
      @click.self="closeModal"
    >
      <div class="modal">
        <!-- CLOSE -->
        <button
          class="close-button"
          @click="closeModal"
        >
          ✕
        </button>

        <!-- IMAGE -->
        <div class="image-area">
          <img
            :src="character.image"
            :alt="character.name"
          />
        </div>

        <!-- CONTENT -->
        <div class="content">
          <h2>
            {{ character.name }}
          </h2>

          <div class="info-grid">
            <div class="info">
              <span>Status</span>
              <strong>{{ character.status }}</strong>
            </div>

            <div class="info">
              <span>Species</span>
              <strong>{{ character.species }}</strong>
            </div>

            <div class="info">
              <span>Gender</span>
              <strong>{{ character.gender }}</strong>
            </div>

            <div class="info">
              <span>Origin</span>
              <strong>{{ character.origin.name }}</strong>
            </div>

            <div class="info">
              <span>Location</span>
              <strong>{{ character.location.name }}</strong>
            </div>

            <div class="info">
              <span>Episodes</span>
              <strong>{{ character.episode.length }}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.overlay {
  position: fixed;

  inset: 0;

  background: rgba(0,0,0,0.7);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;

  padding: 24px;

  backdrop-filter: blur(6px);
}

.modal {
  width: 100%;
  max-width: 900px;

  background: white;

  border-radius: 28px;

  overflow: hidden;

  display: grid;

  grid-template-columns: 350px 1fr;

  position: relative;

  box-shadow:
    0 0 30px rgba(0,0,0,0.4);

  animation: modalAnimation 0.25s ease;
}

.close-button {
  position: absolute;

  top: 18px;
  right: 18px;

  width: 42px;
  height: 42px;

  border: none;

  border-radius: 50%;

  background: #111;

  color: white;

  font-size: 18px;

  cursor: pointer;

  z-index: 2;
}

.image-area {
  img {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }
}

.content {
  padding: 42px;

  display: flex;
  flex-direction: column;

  h2 {
    font-size: 42px;
    font-weight: 900;

    margin-bottom: 32px;

    color: #111;
  }
}

.info-grid {
  display: grid;

  grid-template-columns: repeat(2, 1fr);

  gap: 22px;
}

.info {
  background: #f5f5f5;

  padding: 20px;

  border-radius: 18px;

  span {
    display: block;

    font-size: 14px;

    color: #777;

    margin-bottom: 8px;
  }

  strong {
    font-size: 18px;

    color: #111;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes modalAnimation {
  from {
    transform: scale(0.9);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .modal {
    grid-template-columns: 1fr;
  }

  .image-area {
    height: 300px;
  }

  .content {
    padding: 24px;

    h2 {
      font-size: 32px;
    }
  }

  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>