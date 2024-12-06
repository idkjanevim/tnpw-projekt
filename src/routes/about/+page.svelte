<script lang="ts">
  import { base } from '$app/paths';
  const skillImages = [
    { name: 'C/C++', imageUrl: '../imgs/cpp.webp' },
    { name: 'Rust', imageUrl: '../imgs/rust.webp' },
    { name: 'Ghidra', imageUrl: '../imgs/ghidra.webp' },
    { name: 'Python', imageUrl: '../imgs/python.webp' },
  ];
  let skills = [
    { skill: 'C++', proficiency: 'Intermediate', experience: '1+ years', lastUsed: 'Recently'},
    { skill: 'Rust', proficiency: 'Advanced', experience: '3+ year', lastUsed: 'Recently'},
    { skill: 'Python', proficiency: 'Intermediate', experience: '2+ years', lastUsed: 'Recently'},
    { skill: 'JavaScript', proficiency: 'Intermediate', experience: '2+ years', lastUsed: 'Recently'},
    { skill: 'C#', proficiency: 'Intermediate', experience: '1+ year', lastUsed: 'Almost Never'},
    { skill: 'Ghidra', proficiency: 'Beginner', experience: '1 year', lastUsed: 'Recently'},
    { skill: 'Linux', proficiency: 'Advanced', experience: '3+ years', lastUsed: 'Recently'}
  ];

</script>

<div class="bg-primary text-text min-h-screen p-4 mb-8">
  <div class="max-w-4xl mx-auto space-y-8">
    <h1 class="text-4xl md:text-5xl font-bold text-center">
      About Me
    </h1>

    <div class="space-y-6 md:space-y-8">
      <p class="text-base sm:text-lg md:text-xl leading-relaxed">
        Hey! I'm Ondřej Hrzán, a software engineering student with a passion for low-level programming and system architecture. My journey into programming began with a curiosity about how things work under the hood. This fascination grew into a love for coding, and I've stuck with it ever since.
      </p>

      <p class="text-base sm:text-lg md:text-xl leading-relaxed">
        I've spent a lot of my time working on low-level projects, especially emulators and game hacking. These hands-on experiences helped me gain a deeper understanding of how systems work, and they’ve been incredibly rewarding. Through these projects, I've learned not just how to program, but how to think critically and solve complex problems.
      </p>

      <p class="text-base sm:text-lg md:text-xl leading-relaxed">
        I'm always eager to learn new things and improve my skills. Right now, I’m focused on deepening my knowledge of low-level systems and exploring areas like reverse engineering. I also enjoy working with languages like C++, Rust, and Python, but I'm proficient in others like JavaScript and C# as well.
      </p>

      <p class="text-base sm:text-lg md:text-xl leading-relaxed">
        When I'm not coding or studying, you can find me working on side projects like game hacks or building new emulators. I enjoy diving deep into systems and learning about the inner workings of everything I can get my hands on.
      </p>
    </div>

    <div class="bg-primary text-text p-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl sm:text-4xl font-semibold mb-6">Programming Skills</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto border-collapse">
            <thead>
              <tr class="bg-secondary text-white">
                <th class="py-3 px-4 text-center">Skill</th>
                <th class="py-3 px-4 text-center">Proficiency</th>
                <th class="py-3 px-4 text-center">Experience</th>
                <th class="py-3 px-4 text-center">Last Used</th>
              </tr>
            </thead>
            <tbody>
              {#each skills as skill (skill.skill)}
                <tr class="bg-zinc-800 border-b hover:bg-zinc-700 ease-in duration-300">
                  <td class="py-3 px-4">{skill.skill}</td>
                  <td class="py-3 px-4 text-lg text-white">{skill.proficiency}</td>
                  <td class="py-3 px-4">{skill.experience}</td>
                  <td class="py-3 px-4">{skill.lastUsed}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    

    <div>
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center">
        {#each skillImages as skill}
          <div class="flex flex-col items-center space-y-2">
            <div class="w-24 h-24 rounded-full overflow-hidden hover:scale-125 duration-300 ease-in">
              <img src={skill.imageUrl} alt={skill.name} class="w-full h-full object-cover" />
            </div>
            <span class="text-base sm:text-lg font-semibold">{skill.name}</span>
          </div>
        {/each}
      </div>
    </div>

    <div class="text-center mt-8">
      <a href="{base}/contact" class="bg-highlight text-white px-6 py-3 rounded hover:bg-opacity-90 transition">
        Get In Touch
      </a>
    </div>
  </div>
</div>

<style>

</style>
