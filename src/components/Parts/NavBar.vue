<template>
  <div class="navbar bg-base-100 text-base-content px-4 border-b border-base-300">
    <div class="navbar-start">
      <button class="btn btn-ghost normal-case text-lg font-semibold">DaisyUI · VueExpert</button>
    </div>

    <div class="navbar-end gap-1">
      <button
        class="btn btn-ghost btn-circle hover:bg-base-200"
        aria-label="Sobre a aplicação"
        @click="openModal"
      >
        <i class="ri-information-2-line text-2xl"></i>
      </button>

      <dialog ref="aboutModal" class="modal">
        <div class="modal-box bg-base-100 text-base-content max-w-lg">
          <h3 class="font-bold text-lg">Rick and Morty App ©</h3>

          <p class="py-4 text-sm leading-relaxed">
            Este projeto foi desenvolvido como parte do módulo DaisyUI do curso "Vue Expert",
            focando em boas práticas de desenvolvimento e uso de ferramentas modernas do ecossistema
            Vue.
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

          <small class="block mt-4 text-xs opacity-70">
            Hospedado na
            <a class="link link-primary" href="https://vercel.com" target="_blank"> Vercel </a>
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
            <button class="btn btn-primary" @click="closeModal">Fechar</button>
          </div>
        </div>
      </dialog>

      <a
        href="https://github.com/LariMoro20/RickMortyMVPDaisyUI"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        class="btn btn-ghost btn-circle hover:bg-base-200"
      >
        <i class="ri-github-fill text-2xl"></i>
      </a>
    </div>
  </div>
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
