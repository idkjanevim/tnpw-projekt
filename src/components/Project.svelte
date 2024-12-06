<script lang="ts">
  export let title: string;
  export let description: string;
  export let imageUrl: string;
  export let hasDemo: boolean;
  export let liveDemoLink: string;
  export let codeLink: string;

  let isModalOpen = false;

  function openModal() {
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
<div on:click={openModal}  class="max-w-sm rounded overflow-hidden shadow-lg bg-secondary text-text border border-primary transition-transform transform hover:border-accent hover:scale-105 flex flex-col cursor-pointer">
  <!-- Image -->
  <img src={imageUrl} alt={title} class="w-full h-80 object-contain p-3">

  <!-- Content -->
  <div class="px-6 py-4 flex-grow">
    <div class="font-bold text-xl mb-2">{title}</div>
    <p class="text-muted text-base line-clamp-3">
      {description}
    </p>
  </div>

  <!-- Buttons -->
  <div class="px-6 pb-4 flex gap-4 mt-auto">
    {#if hasDemo}
    <a
      href={liveDemoLink}
      target="_blank"
      rel="noopener noreferrer"
      class="block flex-grow text-center bg-highlight text-secondary font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105"
    >
      Live Demo
    </a>
    {/if}
    <a
      href={codeLink}
      target="_blank"
      rel="noopener noreferrer"
      class="block flex-grow text-center bg-accent text-secondary font-semibold py-2 px-4 rounded transition-transform transform hover:scale-105"
    >
      View Code
    </a>
  </div>
</div>

<!-- Modal for Enlarged Card -->
{#if isModalOpen}
<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions (because of reasons) -->
  <div
    class="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
    on:click={closeModal}
  >
    <div 
      class="relative max-w-3xl w-full bg-secondary text-text rounded-lg shadow-lg p-6"
      on:click|stopPropagation
    >
      <!-- Close Button -->
      <button 
        class="absolute top-2 right-2 text-text bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition"
        on:click={closeModal}
      >
        ✖
      </button>

      <!-- Card Image -->
      <img 
        src={imageUrl} 
        alt={title} 
        class="w-full h-full object-contain rounded-lg mb-4 max-h-96"
      >

      <!-- Card Content -->
      <div class="text-center">
        <div class="font-bold text-2xl mb-4">{title}</div>
        <p class="text-muted text-base mb-6">
          {description}
        </p>

        <!-- Buttons -->
        <div class="flex gap-4 justify-center">
          {#if hasDemo}
          <a
            href={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            class="block text-center bg-highlight text-secondary font-semibold py-2 px-6 rounded transition-transform transform hover:scale-105"
          >
            Live Demo
          </a>
          {/if}
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            class="block text-center bg-accent text-secondary font-semibold py-2 px-6 rounded transition-transform transform hover:scale-105"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  </div>
{/if}