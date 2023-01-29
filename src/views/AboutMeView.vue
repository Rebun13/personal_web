<script setup></script>

<template>
  <div id="about-me" class="lg:w-3/5 mx-auto mt-16 md:w-full">
    <div
      id="about-me-1"
      class="mb-16 grid grid-cols-2 gap-0 items-center bg-gray-700 shadow-lg"
    >
      <div id="c1-profile_picture-container">
        <img :src="'/images/profile.jpeg'" alt="profile_picture" />
      </div>
      <div id="c1-text-container" class="mx-6 py-8 text-gray-200">
        <div id="x1-text-title" class="mb-8">
          <h1 class="text-lime-400 text-4xl">Rubén Gómez Dopazo</h1>
          <h3 class="text-2xl">Computer Engineer</h3>
        </div>
        <p class="text-justify">
          My name is Rubén, I am 27 years old and from Spain. I have a
          Bachelor's degree in
          <span class="text-lime-400 font-bold">Computer Engineering</span> from
          Vigo's University (Universidade de Vigo). I moved to Ireland to look
          for better professional opportunities after working as
          <span class="text-lime-400 font-bold">Software Developer</span> in
          Spain for 2 years. My dream is to work in a small videogame
          development team, but right now I'm open to working in any development
          team that allows me to learn, grow and live a nice experience. For me,
          the most important assets in a team are a nice social environment and
          transparent communication, so I would love to find a place that
          matches these attributes.
        </p>
      </div>
    </div>
    <div id="about-me-2" class="bg-gray-700 p-16 shadow-lg">
      <div id="c2-row1" class="grid grid-cols-2 gap-12 items-center mb-16">
        <div id="c2-r1-img-container">
          <img src="/images/Carrilana-2.jpeg" alt="carrilanas" />
        </div>
        <div id="c2-r1-txt-container" class="text-gray-200 text-justify">
          <p>
            I was born in
            <span class="text-lime-400 font-bold">Pontevedra</span>, a little
            town in the northwest of Spain, rainyand cold in the winter, and
            sunny and warm in the summer. My parents' house is in the country,
            so during my childhood, I spent most of my free time riding my bike
            and exploring nature. I have always been one of the top students in
            the class, at least during primary and secondary school. However, my
            proudest memory from that time is my mechanical skills: my friends
            and I loved to build "<span class="text-lime-400 font-bold"
              >carrilanas</span
            >" 🏎️ and the best one was built by me.
          </p>
        </div>
      </div>
      <div id="c2-row2" class="mb-16">
        <div id="c2-r2-txt-container" class="text-gray-200 text-justify">
          <p>
            After secondary school, I decided to study for the
            <span class="text-lime-400 font-bold"
              >Mechanical Engineering Degree</span
            >
            at Vigo University (Universidade de Vigo). Even though I learned a
            lot about maths and physics, after three years I realized that
            Mechanical Engineering was not for me, so I took a year off to
            decide what to do instead. Finally, I decided to go for
            <span class="text-lime-400 font-bold">Computer Engineering</span>.
            However, life is life, and I could not apply for it the first time,
            so instead of taking another year off, I entered the
            <span class="text-lime-400 font-bold"
              >Telecommunications Engineering Degree</span
            >, and I quickly noticed that I liked software development more than
            I thought. I improved my records so much, and the next year I
            applied for the Computer Engineering Degree. Four years later, I got
            the diploma.
          </p>
        </div>
      </div>
      <div id="c2-row3" class="grid grid-cols-2 gap-12 items-center">
        <div id="c2-r3-txt-container" class="text-gray-200 text-justify">
          <p>
            After that, I started working for CTAG (Automotive Technology Centre
            of Galicia) as a
            <span class="text-lime-400 font-bold">Cloud Developer</span>. There
            I developed two Django apps and three Python libraries, while also
            providing technical support to our clients. With almost 2 years of
            experience in my back, I decided to go for some adventures and moved
            to <span class="text-lime-400 font-bold">Ireland</span> to look for
            a new job as
            <span class="text-lime-400 font-bold">Computer Engineer</span> or
            <span class="text-lime-400 font-bold">Software Developer</span>. And
            there is where I am now.
          </p>
        </div>
        <div id="c2-r3-img-container">
          <img src="/images/map.png" alt="carrilanas" />
        </div>
      </div>
    </div>
  </div>
</template>
