<script lang="ts">
    import Project from "../../components/Project.svelte"

  </script>
  
  <div class="bg-primary text-text min-h-screen p-4">
    <!-- Projects Section -->
    <div class="max-w-7xl mx-auto space-y-8">
      <h1 class="text-4xl md:text-5xl font-bold text-center">
        All Projects
      </h1>
  
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Project
        title="RustPusher" 
        description="This is a simple emulator of BytePusher in Rust! BytePusher is a minimalist virtual machine invented by user:Javamannen in 2010. You can think of it as a simplified CHIP-8 with bigger memory, bigger screen with colors, and sampled sound." 
        imageUrl="https://esolangs.org/w/images/9/99/BytePusher.gif"
        hasDemo={false}
        liveDemoLink="" 
        codeLink="https://github.com/idkjanevim/rustpusher"
      />
      <Project
        title="This Website" 
        description="Portfolio that i made as my semestral project! Its made using SvelteKit nad TailWind. I used these tools because i already had some experience with them and i like using them." 
        imageUrl="./imgs/portfolio.webp"
        liveDemoLink="/" 
        hasDemo={true}
        codeLink="https://github.com/example/repo"
      />
      <Project
        title="RustJack" 
        description="Poker game in rust! This was one of my first big rust projects. To create window and to manage the game loop i used Bevy. Bevy is a ECS game engine for Rust." 
        imageUrl="./imgs/poker.webp"
        liveDemoLink="https://example.com/demo" 
        hasDemo={false}
        codeLink="https://github.com/idkjanevim/RustJack"
      />
      <Project
        title="Spejs" 
        description="Website about space that uses NASA API to get space related images and their descriptions. This website is made with Next.js and TailWind. It was my first website project and it also looks like it :D" 
        imageUrl="./imgs/spejs.webp"
        liveDemoLink="https://idkjanevim.github.io/spejs-nextjs/" 
        hasDemo={true}
        codeLink="https://github.com/idkjanevim/spejs-nextjs"
      />
      <Project
        title="Pong-Rust" 
        description="Simple game of Pong made in Rust and ECS game engine bevy. This was my first time using bevy so it does break from time to time if you make some specific inputs but otherwise pretty pround of this one." 
        imageUrl="./imgs/pong.webp"
        liveDemoLink="https://example.com/demo" 
        hasDemo={false}
        codeLink="https://github.com/idkjanevim/Pong-Rust"
      />
      <Project
         title="Task Manager"
          description="A full-stack web application that allows users to manage tasks, track progress, and set reminders. Built with Node.js, Express, and MongoDB for the back-end, and React for the front-end."
          imageUrl="./imgs/task.webp"
          liveDemoLink="https://task-manager-demo.com"
          hasDemo={true}
          codeLink="https://github.com/example/task-manager"
      />
      <Project
          title="Real-Time Chat Application"
          description="A real-time chat app where users can create rooms and send messages. Built with Socket.io for real-time communication and Express for the back-end."
          imageUrl="./imgs/chat.webp"
          liveDemoLink="https://chat-app-demo.com"
          hasDemo={true}
          codeLink="https://github.com/example/chat-app"
      />
      <Project
          title="Fitness Tracker App"
          description="A mobile app for tracking workouts, calories burned, and progress. Built with React Native and Firebase for backend services, this app helps users stay motivated on their fitness journey."
          imageUrl="./imgs/fitness.webp"
          liveDemoLink="https://fitness-tracker-demo.com"
          hasDemo={true}
          codeLink="https://github.com/example/fitness-tracker"
      />
      <Project
          title="Blog Platform"
          description="A simple blog platform where users can create, edit, and comment on blog posts. Built with Django and PostgreSQL for the back-end, and React for the front-end."
          imageUrl="./imgs/blog.webp"
          liveDemoLink="https://blog-platform-demo.com"
          hasDemo={true}
          codeLink="https://github.com/example/blog-platform"
      />

        <!-- Add more projects as needed -->
      </div>
    </div>
  </div>
  