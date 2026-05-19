import { api } from '@/core/http/axios'

export class CharacterRepositoryImpl {
  async getCharacters({ page = 1, name = '' }) {
    const response = await api.get('/character', {
      params: {
        page,
        name
      }
    })

    return response.data
  }
}