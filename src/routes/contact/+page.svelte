<script lang="ts">
    let name = '';
    let email = '';
    let message = '';
    let isSubmitting = false;
  
    function handleSubmit() {
      if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      isSubmitting = true;
      
      // Simulate a form submission 
      setTimeout(() => {
        alert('Message sent successfully!');
        isSubmitting = false;
        name = '';
        email = '';
        message = '';
      }, 1000);
    }
  </script>
  
  <div class="bg-primary text-text min-h-screen p-8">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold text-center mb-8">
        Get In Touch
      </h1>
  
      <div class="bg-secondary p-6 rounded-lg shadow-md">
        <h2 class="text-2xl sm:text-3xl font-semibold mb-4">Contact Form</h2>
  
        <form on:submit|preventDefault={handleSubmit} class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium">Your Name</label>
            <input
              type="text"
              id="name"
              bind:value={name}
              class="mt-1 p-3 w-full bg-secondary text-text border border-muted rounded focus:outline-none focus:ring-2 focus:ring-highlight"
              placeholder="Enter your name"
            />
          </div>
  
          <div>
            <label for="email" class="block text-sm font-medium">Your Email</label>
            <input
              type="email"
              id="email"
              bind:value={email}
              class="mt-1 p-3 w-full bg-secondary text-text border border-muted rounded focus:outline-none focus:ring-2 focus:ring-highlight"
              placeholder="Enter your email"
            />
          </div>
  
          <div>
            <label for="message" class="block text-sm font-medium">Your Message</label>
            <textarea
              id="message"
              bind:value={message}
              rows="4"
              class="mt-1 p-3 w-full bg-secondary text-text border border-muted rounded focus:outline-none focus:ring-2 focus:ring-highlight"
              placeholder="Write your message"
            ></textarea>
          </div>
  
          <div class="flex justify-center">
            <button
              type="submit"
              class="bg-highlight text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition duration-200 ease-in-out"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>
  
      <div class="mt-12 text-center">
        <p class="text-sm text-muted">Or contact me through:</p>
        <div class="flex justify-center space-x-6 mt-4">
          <a href="mailto:ondrejhrzan@gmail.com" class="text-highlight hover:text-opacity-80">
            Email
          </a>
          <a href="https://github.com/idkjanevim" target="_blank" class="text-highlight hover:text-opacity-80">
            GitHub
          </a>
          <a href="https://www.instagram.com/ondrejhrzan/" target="_blank" class="text-highlight hover:text-opacity-80">
            Instagram
          </a>
        </div>
      </div>
    </div>
  </div>
  