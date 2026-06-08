import { defineStore } from 'pinia'

import { CharacterRepositoryImpl } from '../../infra/repositories/CharacterRepositoryImpl'
import { GetCharactersUseCase } from '../../domain/usecases/GetCharactersUseCase'

const repository = new CharacterRepositoryImpl()

const getCharactersUseCase =
  new GetCharactersUseCase(repository)

export const useCharacterStore =
  defineStore('character', {
    state: () => ({
      characters: [],
      loading: false,

      page: 1,
      totalPages: 1,

      search: '',
      status: ''
    }),

    actions: {
      async fetchCharacters() {
        try {
          this.loading = true

          const response =
            await getCharactersUseCase.execute({
              page: this.page,
              name: this.search,
              status: this.status
            })

          this.characters =
            response.results || []

          this.totalPages =
            response.info?.pages || 1
        } catch (error) {
          console.error(
            'Erro ao buscar personagens:',
            error
          )

          this.characters = []
          this.totalPages = 1
        } finally {
          this.loading = false
        }
      },

      async setStatus(status) {
        this.status = status

        this.page = 1

        await this.fetchCharacters()
      },

      async setSearch(search) {
        this.search = search

        this.page = 1

        await this.fetchCharacters()
      },

      async setPage(page) {
        this.page = page

        await this.fetchCharacters()
      },

      clearFilters() {
        this.search = ''
        this.status = ''
        this.page = 1
      }
    }
  })