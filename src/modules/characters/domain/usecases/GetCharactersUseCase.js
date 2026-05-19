export class GetCharactersUseCase {
  constructor(repository) {
    this.repository = repository
  }

  async execute(filters) {
    return this.repository.getCharacters(filters)
  }
}