<template>
  <div id="about-me" class="xl:w-3/5 mx-auto mt-16 w-full">
    <!-- First part -->
    <div
      id="about-me-1"
      class="mb-16 mx-2 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-gray-700 shadow-lg"
    >
      <div id="am1-cell1" class="p-8 order-2 lg:order-1 lg:row-span-2">
        <img
          :src="'/images/profile.jpeg'"
          alt="profile_picture"
          class="scale-75 lg:scale-100 rounded-lg"
        />
      </div>
      <div id="am1-cell2" class="mx-6 pb-8 lg:pt-8 text-gray-200 order-2 lg:order-1">
        <h1 class="text-lime-400 text-4xl">Rubén Gómez Dopazo</h1>
        <h3 class="text-2xl">Computer Engineer</h3>
      </div>
      <div id="am1-cell3" class="mx-6 pb-8 lg:pt-8 text-gray-200 order-3">
        <p class="text-justify">
          My name is Rubén, I am 27 years old and from Spain. I have a Bachelor's degree in
          <span class="text-lime-400 font-bold">Computer Engineering</span> from Vigo's University
          (Universidade de Vigo). I moved to Ireland to look for better professional opportunities
          after working as <span class="text-lime-400 font-bold">Software Developer</span> in Spain
          for 2 years. My dream is to work in a small videogame development team, but right now I'm
          open to working in any development team that allows me to learn, grow and live a nice
          experience. For me, the most important assets in a team are a nice social environment and
          transparent communication, so I would love to find a place that matches these attributes.
        </p>
      </div>
    </div>
    <!-- Second part -->
    <div
      id="about-me-2"
      class="mb-8 mx-2 rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-0 bg-gray-700 shadow-lg"
    >
      <div id="am2-cell1" class="p-2 lg:p-0">
        <img
          src="/images/Carrilana-2.jpeg"
          alt="carrilanas"
          class="scale-75 rounded-lg -rotate-12 shadow-2xl"
        />
      </div>
      <div id="am2-cell2" class="mx-6 py-8 text-gray-200 text-justify">
        <p>
          I was born in
          <span class="text-lime-400 font-bold">Pontevedra</span>, a little town in the northwest of
          Spain, rainyand cold in the winter, and sunny and warm in the summer. My parents' house is
          in the country, so during my childhood, I spent most of my free time riding my bike and
          exploring nature. I have always been one of the top students in the class, at least during
          primary and secondary school. However, my proudest memory from that time is my mechanical
          skills: my friends and I loved to build "<span class="text-lime-400 font-bold"
            >carrilanas</span
          >" 🏎️ and the best one was built by me.
        </p>
      </div>
    </div>
    <!-- Third part -->
    <div id="about-me-3" class="mx-2 rounded-lg bg-gray-700 shadow-lg">
      <div id="am3-cell1" class="mx-6 mb-8 py-8 text-gray-200 justify-center text-justify">
        <p>
          After secondary school, I decided to study for the
          <span class="text-lime-400 font-bold">Mechanical Engineering Degree</span>
          at Vigo University (Universidade de Vigo). Even though I learned a lot about maths and
          physics, after three years I realized that Mechanical Engineering was not for me, so I
          took a year off to decide what to do instead. Finally, I decided to go for
          <span class="text-lime-400 font-bold">Computer Engineering</span>. However, life is life,
          and I could not apply for it the first time, so instead of taking another year off, I
          entered the
          <span class="text-lime-400 font-bold">Telecommunications Engineering Degree</span>, and I
          quickly noticed that I liked software development more than I thought. I improved my
          records so much, and the next year I applied for the Computer Engineering Degree. Four
          years later, I got the diploma.
        </p>
      </div>
    </div>
    <!-- Fourth part -->
    <div
      id="about-me-4"
      class="mx-2 grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-lg bg-gray-700 shadow-lg"
    >
      <div id="am4-cell1">
        <img
          src="/images/map.png"
          alt="carrilanas"
          class="scale-75 rounded-lg rotate-12 shadow-2xl"
        />
      </div>
      <div id="am4-cell2" class="mx-6 py-8 text-gray-200 text-justify">
        <p>
          After that, I started working for CTAG (Automotive Technology Centre of Galicia) as a
          <span class="text-lime-400 font-bold">Cloud Developer</span>. There I developed two Django
          apps and three Python libraries, while also providing technical support to our clients.
          With almost 2 years of experience in my back, I decided to go for some adventures and
          moved to <span class="text-lime-400 font-bold">Ireland</span> to look for a new job as
          <span class="text-lime-400 font-bold">Computer Engineer</span> or
          <span class="text-lime-400 font-bold">Software Developer</span>. And there is where I am
          now.
        </p>
      </div>
    </div>
  </div>
</template>
