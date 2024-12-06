<script lang="ts">
  import { onMount } from 'svelte'; 
  import { slide } from 'svelte/transition';
  import { base } from '$app/paths';
  
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }

  function closeMenu() {
    isOpen = false;
  }

  function handleClickOutside(event: MouseEvent) {
    const header = document.getElementById('header');
    if (header && !header.contains(event.target as Node)) {
      closeMenu();
    }
  }

  onMount(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script> 


<style>
  .fade-in {
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  .fade-in-enter {
    opacity: 1;
  }
</style>

<header id="header" class="bg-secondary text-text p-4 shadow-md">
  <nav class="flex justify-between items-center">
    <a href="{base}/" class="text-xl font-bold">¯\_(ツ)_/¯</a>
    <div class="flex items-center md:hidden">
      <button on:click={toggleMenu} class="focus:outline-none" aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <div class="hidden md:flex space-x-6">
      <a href="{base}/" class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Home</a>
      <a href="{base}/about" class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">About</a>
      <a href="{base}/achievements" class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Achievements</a>
      <a href="{base}/projects" class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Projects</a>
      <a href="{base}/contact" class="transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Contact</a>

    </div>
  </nav>

  {#if isOpen}
    <div 
      id="menu" 
      in:slide={{ duration: 300 }} 
      out:slide={{ duration: 300 }} 
      class="flex flex-col space-y-2 mt-2 z-10 bg-secondary p-4 rounded-lg shadow-lg fade-in fade-in-enter"
    >
      <a href="{base}/" on:click={closeMenu} class="block transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Home</a>
      <a href="{base}/about" on:click={closeMenu} class="block transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">About</a>
      <a href="{base}/projects" on:click={closeMenu} class="block transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Projects</a>
      <a href="{base}/contact" on:click={closeMenu} class="block transition duration-300 ease-in-out hover:text-highlight border-secondary hover:border-highlight border-2 p-2 rounded">Contact</a>
    </div>
  {/if}
</header>
