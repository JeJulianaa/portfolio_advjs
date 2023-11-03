
<template>
  <section>
    <div class="container flex justify-center mx-auto">
        <div class="w-[95%] py-10 grid grid-cols-1 md:grid-cols-2 gap-3 ">
            <div class="">
                <h5>Projekter</h5>
                <div>
                <h1 class="text-5xl md:text-7xl">Design er<br>fundamentet for at bygge et stærkt brand  </h1> 
                </div>
            </div>
            <div class="flex justify-end self-end ">
                <p class="w-[70%]">
                    Alle mine projekter gør jeg altid ind med 120%. Jeg brænder for at få 
                    brand ud over kanterne så det står skarpt, stærk og 
                    med den røde tråde hele vejen igennem.
                </p>
            </div>
        </div>
    </div>
 </section>

  <section class="container mx-auto w-[95%]">
    <div class=" category-box pt-2 mb-4">
      <button
        type="button mx-2"
        class="all"
        @click="changeCategory('All')"
      >
        Se Alle
      </button>
      <button
        type="button"
        class="category-button mx-2"
        @click="changeCategory('WebDesign')"
        value="WebDesign"
      >
        WebDesign
      </button>
      <button
        type="button"
        class="category-button mx-2"
        @click="changeCategory('MultiMedie')"
        value="MultiMedie"
      >
        MultiMedie
      </button>

      <button
        type="button"
        class="category-button mx-2"
        @click="changeCategory('GrafiskDesign')"
        value="GrafiskDesign"
      >
        GrafiskDesign 
      </button>

      <button
        type="button"
        class="category-button mx-2"
        @click="changeCategory('UI/UX')"
        value="UI/UX"
      >
        UI/UX
      </button>

      <button
        type="button"
        class="category-button mx-2"
        @click="changeCategory('Markedføring')"
        value="Markedføring"
      >
        Markedføring
      </button>
    
      
    </div>
  </section>
  

  <section class="container mx-auto w-[95%]  ">
    <!-- filteredProjects to filter-->
    <div class="container mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 max-w-none pb-3">
      <div class="w-full projecktview-button transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-105 hover:duration-300 " v-for="project in filteredProjects" :key="project.id">
        <!-- loop through your projects and create links to their respective detail pages -->
        <div class="h-full w-full">
          <button class="button-yellow h-full rounded-lg " >
            <router-link :to="{ name: 'projectdetail', params: { id: project.id }}">
              <div class="  h-full w-full shrink">
                             
                <div  v-if="project.projectImg">
                  <img
                    class="object-cover h-[20rem] w-[90rem] rounded-md bg-clip-padding border-gray-100"
                    id="projectImage"
                    :src="project.projectImg"
                    alt="Project Image"
                    @error="handleImageError"
                  >
                </div> 
              </div>
              
              
              
              
              
              <!-- <div class="overflow-hidden rounded-lg">
                <p>
                  ProjectName: {{ project.projectName }}
                </p>
                <p>
                  projectCategory: {{ project.projectCategory.join(', ') }}
                </p>
              </div> -->
            </router-link>
          </button>
        </div>
      </div>
  </div>
  </section>
</template>



<script setup>
import useProjects from '../modules/useProjects.js';
import { onMounted, ref, computed } from 'vue';

const { projects, getProjectsData, } = useProjects();

const selectedCategory = ref('All');

const changeCategory = (category) => {
  selectedCategory.value = category;
};

const filteredProjects = computed(() =>
  selectedCategory.value === 'All'
    ? projects.value
    : projects.value.filter((project) => project.projectCategory.includes(selectedCategory.value))
);


onMounted(async () => {
   getProjectsData();
});
</script>

<style>


.category-button:hover{
  background-color: rgba(36, 36, 36, 0.155);
  transition: all 0.4s ease-in-out;
}




</style>