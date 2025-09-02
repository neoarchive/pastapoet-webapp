<template>
    <div>
      <Hero />
      <PastaCarousel :slides="pastaSlides" />
      <AboutSection />
    </div>
</template>
  
<script setup>
import Hero from '@/components/Hero.vue'
import PastaCarousel from '@/components/PastaCarousel.vue'
import AboutSection from '@/components/AboutSection.vue'
import { ref } from 'vue'

const pastaSlides = ref([
  [
    { name: "Spaghetti", img: "https://picsum.photos/400/250?random=21", desc: "Classic golden strands for timeless dishes." },
    { name: "Farfalle", img: "https://picsum.photos/400/250?random=22", desc: "Butterfly pasta, perfect with creamy sauces." },
    { name: "Penne Rigate", img: "https://picsum.photos/400/250?random=23", desc: "Perfect for baked pasta & tomato sauces." }
  ],
  [
    { name: "Fusilli", img: "https://picsum.photos/400/250?random=24", desc: "Twists that hold onto rich sauces beautifully." },
    { name: "Tagliatelle", img: "https://picsum.photos/400/250?random=25", desc: "Wide ribbons for hearty meat ragùs." },
    { name: "Orecchiette", img: "https://picsum.photos/400/250?random=26", desc: "Little 'ears' perfect with veggies & olive oil." }
  ],
  [
    { name: "Ravioli", img: "https://picsum.photos/400/250?random=27", desc: "Delicate parcels filled with rich flavors." },
    { name: "Lasagna", img: "https://picsum.photos/400/250?random=28", desc: "Layered sheets perfect with béchamel & ragu." },
    { name: "Tortellini", img: "https://picsum.photos/400/250?random=29", desc: "Ring-shaped pasta filled with tradition." }
  ]
])
</script>

  <!-- 
  <script>
  import Hero from '../components/Hero.vue'
  import PastaCarousel from '../components/PastaCarousel.vue'
  import AboutSection from '../components/AboutSection.vue'
  
  export default {
    name: 'Home',
    components: {
      Hero,
      PastaCarousel,
      AboutSection
    },
    data() {
      return {
        pastaSlides: [
          [
            { name: "Spaghetti", img: "https://picsum.photos/400/250?random=21", desc: "Classic golden strands for timeless dishes." },
            { name: "Farfalle", img: "https://picsum.photos/400/250?random=22", desc: "Butterfly pasta, perfect with creamy sauces." },
            { name: "Penne Rigate", img: "https://picsum.photos/400/250?random=23", desc: "Perfect for baked pasta & tomato sauces." }
          ],
          [
            { name: "Fusilli", img: "https://picsum.photos/400/250?random=24", desc: "Twists that hold onto rich sauces beautifully." },
            { name: "Tagliatelle", img: "https://picsum.photos/400/250?random=25", desc: "Wide ribbons for hearty meat ragùs." },
            { name: "Orecchiette", img: "https://picsum.photos/400/250?random=26", desc: "Little 'ears' perfect with veggies & olive oil." }
          ],
          [
            { name: "Ravioli", img: "https://picsum.photos/400/250?random=27", desc: "Delicate parcels filled with rich flavors." },
            { name: "Lasagna", img: "https://picsum.photos/400/250?random=28", desc: "Layered sheets perfect with béchamel & ragu." },
            { name: "Tortellini", img: "https://picsum.photos/400/250?random=29", desc: "Ring-shaped pasta filled with tradition." }
          ]
        ]
      }
    }
  }
  </script>
-->