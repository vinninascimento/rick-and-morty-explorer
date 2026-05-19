<script setup>
import { onMounted, ref } from 'vue'

import logo from '@/assets/Logo.png'

import SearchBar from '../components/SearchBar.vue'
import CharacterCard from '../components/CharacterCard.vue'
import Pagination from '../components/Pagination.vue'
import StatusFilter from '../components/StatusFilter.vue'
import CharacterModal from '../components/CharacterModal.vue'

import { useCharacterStore } from '../stores/character.store'

const store = useCharacterStore()

/*
|--------------------------------------------------------------------------
| MODAL STATES
|--------------------------------------------------------------------------
*/

const selectedCharacter = ref(null)

const isModalOpen = ref(false)

/*
|--------------------------------------------------------------------------
| INITIAL LOAD
|--------------------------------------------------------------------------
*/

onMounted(() => {
  store.fetchCharacters()
})

/*
|--------------------------------------------------------------------------
| SEARCH
|--------------------------------------------------------------------------
*/

const handleSearch = async (value) => {
  store.search = value

  store.page = 1

  await store.fetchCharacters()
}

/*
|--------------------------------------------------------------------------
| PAGINATION
|--------------------------------------------------------------------------
*/

const handlePage = async (page) => {
  store.page = page

  await store.fetchCharacters()
}

/*
|--------------------------------------------------------------------------
| STATUS FILTER
|--------------------------------------------------------------------------
*/

const handleStatus = async (status) => {
  await store.setStatus(status)
}

/*
|--------------------------------------------------------------------------
| MODAL
|--------------------------------------------------------------------------
*/

const openDetails = (character) => {
  selectedCharacter.value = character

  isModalOpen.value = true
}

const closeDetails = () => {
  isModalOpen.value = false
}
</script>

<template>
  <main class="home">
    <!-- HEADER -->
    <header class="topbar">
      <!-- LOGO -->
      <div class="logo-area">
        <img
          :src="logo"
          alt="Rick and Morty"
          class="logo"
        />

        <div class="portal"></div>
      </div>

      <!-- STATUS FILTER -->
      <div class="center-area">
        <StatusFilter
          :current-status="store.status"
          @change="handleStatus"
        />
      </div>

      <!-- SEARCH -->
      <div class="search-area">
        <SearchBar @search="handleSearch" />
      </div>
    </header>

    <!-- GRID -->
    <section class="grid">
      <CharacterCard
        v-for="character in store.characters"
        :key="character.id"
        :character="character"
        @details="openDetails"
      />
    </section>

    <!-- PAGINATION -->
    <Pagination
      :current-page="store.page"
      :total-pages="store.totalPages"
      @change="handlePage"
    />

    <!-- MODAL -->
    <CharacterModal
      v-if="selectedCharacter"
      :character="selectedCharacter"
      :is-open="isModalOpen"
      @close="closeDetails"
    />
  </main>
</template>

<style scoped lang="scss">
.home {
  min-height: 100vh;

  padding: 24px 48px;

  background: #c8f431;

  background-image:
    radial-gradient(rgba(255,255,255,0.15) 2px, transparent 2px);

  background-size: 80px 80px;

  overflow-x: hidden;
}

/*
|--------------------------------------------------------------------------
| HEADER
|--------------------------------------------------------------------------
*/

.topbar {
  display: grid;

  grid-template-columns:
    1fr
    auto
    1fr;

  align-items: center;

  gap: 24px;

  margin-bottom: 42px;
}

/*
|--------------------------------------------------------------------------
| LOGO
|--------------------------------------------------------------------------
*/

.logo-area {
  display: flex;
  align-items: center;
  gap: 18px;

  .logo {
    width: 250px;

    object-fit: contain;

    filter:
      drop-shadow(0 0 8px rgba(0,0,0,0.15));
  }
}

/*
|--------------------------------------------------------------------------
| PORTAL
|--------------------------------------------------------------------------
*/

.portal {
  width: 48px;
  height: 48px;

  border-radius: 50%;

  background:
    radial-gradient(circle at center,
      #d7ff39 0%,
      #42ff88 35%,
      #00ffbf 60%,
      #0f5132 100%);

  box-shadow:
    0 0 10px #42ff88,
    0 0 20px #42ff88,
    0 0 40px #42ff88;

  animation: pulse 2s infinite;
}

/*
|--------------------------------------------------------------------------
| CENTER
|--------------------------------------------------------------------------
*/

.center-area {
  display: flex;
  justify-content: center;
}

/*
|--------------------------------------------------------------------------
| SEARCH
|--------------------------------------------------------------------------
*/

.search-area {
  display: flex;
  justify-content: flex-end;
}

/*
|--------------------------------------------------------------------------
| GRID
|--------------------------------------------------------------------------
*/

.grid {
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 32px;
}

/*
|--------------------------------------------------------------------------
| ANIMATION
|--------------------------------------------------------------------------
*/

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.08);
  }

  100% {
    transform: scale(1);
  }
}

/*
|--------------------------------------------------------------------------
| RESPONSIVE
|--------------------------------------------------------------------------
*/

@media (max-width: 1200px) {
  .topbar {
    grid-template-columns: 1fr;

    gap: 24px;
  }

  .logo-area,
  .center-area,
  .search-area {
    justify-content: center;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .home {
    padding: 24px;
  }

  .grid {
    grid-template-columns: 1fr;
  }

  .logo-area {
    flex-direction: column;

    .logo {
      width: 200px;
    }
  }
}
</style>