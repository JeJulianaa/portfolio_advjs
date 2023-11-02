
<template>
  <div class="category-box pt-2 mb-4">
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

  <section class="container mx-auto w-[95%]  ">
    <!-- filteredProjects to filter-->
    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-3 max-w-none pb-3">
      <div class="w-full " v-for="project in filteredProjects" :key="project.id">
        <!-- loop through your projects and create links to their respective detail pages -->
        <div class="h-full w-full">
          <button class="button-yellow h-full rounded-lg " >
            <router-link :to="{ name: 'projectdetail', params: { id: project.id }}">
              <div class="  h-full w-full shrink">
                             
                <div  v-if="project.projectImg">
                  <img
                    class="object-cover h-[20rem] rounded-md bg-clip-padding border-gray-100"
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
