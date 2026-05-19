# Rick and Morty Explorer

Aplicação desenvolvida em Vue.js consumindo a API pública do Rick and Morty.

O projeto foi estruturado utilizando conceitos de arquitetura limpa, componentização e separação de responsabilidades, simulando uma aplicação escalável de médio/grande porte.

---

# Preview

Interface inspirada no visual oficial de Rick and Morty:

- Cards modernos
- Paginação customizada
- Busca automática
- Filtro por status
- Modal de detalhes
- Responsividade
- Arquitetura escalável

---

# Tecnologias utilizadas

## Frontend

- Vue 3
- Vite
- Pinia
- Vue Router
- Axios
- SCSS

---

# Arquitetura

O projeto foi organizado utilizando uma estrutura inspirada em Clean Architecture.

```txt
src
 ┣ app
 ┃ ┗ router
 ┣ assets
 ┣ modules
 ┃ ┗ characters
 ┃   ┣ domain
 ┃   ┃ ┗ usecases
 ┃   ┣ infra
 ┃   ┃ ┗ http
 ┃   ┗ presentation
 ┃     ┣ components
 ┃     ┣ pages
 ┃     ┗ stores
 ┣ shared
 ┗ main.js