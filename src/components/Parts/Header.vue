<template>
  <header class="bg-white flex flex-col items-center gap-6">
    <!-- LOGO -->
    <router-link to="/" aria-label="Página inicial">
      <img class="header-logo-img" src="/images/logo.png" alt="Rick and Morty App" />
    </router-link>

    <!-- AÇÕES -->
    <div class="flex gap-6">
      <!-- SOBRE -->
      <button class="btn btn-ghost" aria-label="Sobre a aplicação" @click="openModal">
        <i class="ri-question-line text-3xl"></i>
      </button>

      <!-- MODAL DAISYUI -->
      <dialog ref="aboutModal" class="modal">
        <div class="modal-box max-w-lg">
          <h3 class="font-bold text-lg">Rick and Morty App ©</h3>

          <p class="py-4 text-sm leading-relaxed">
            Este projeto foi desenvolvido como parte do módulo DasyUI do curso "Vue Expert", focando
            em boas práticas de desenvolvimento e uso de ferramentas modernas do ecossistema Vue.
          </p>

          <p class="font-semibold mb-2">Links de estudo:</p>
          <ul class="list-disc list-inside space-y-1 text-sm">
            <li>
              <a
                class="link link-primary"
                href="https://rickandmortyapi.com/"
                target="_blank"
                rel="noopener"
              >
                The Rick and Morty API
              </a>
            </li>

            <li>
              <a
                class="link link-primary"
                href="https://cursovuejs.com.br/"
                target="_blank"
                rel="noopener"
              >
                Curso Vue Expert
              </a>
            </li>
          </ul>

          <small class="block mt-4 text-xs">
            Hospedado na
            <a class="link link-primary" href="https://vercel.com" target="_blank" rel="noopener">
              Vercel
            </a>
          </small>

          <p class="mt-2 text-sm">
            Desenvolvido por
            <a
              class="link link-primary"
              href="https://larissa-santos.vercel.app/"
              target="_blank"
              rel="noopener"
            >
              Larissa Santos
            </a>
          </p>

          <div class="modal-action">
            <button class="btn" @click="closeModal">Fechar</button>
          </div>
        </div>
      </dialog>

      <!-- GITHUB -->
      <a
        class="btn btn-ghost"
        href="https://github.com/LariMoro20/RickMortyMVPDaisyUI"
        aria-label="GitHub"
        target="_blank"
        rel="noopener"
      >
        <i class="ri-github-fill text-3xl"></i>
      </a>
    </div>
    <NavBar />
  </header>
</template>

<script setup>
import { ref } from 'vue'

const aboutModal = ref(null)

const openModal = () => {
  aboutModal.value?.showModal()
}

const closeModal = () => {
  aboutModal.value?.close()
}
</script>

<style scoped>
.header-logo-img {
  width: 250px;
  max-width: 100%;
}
</style>
