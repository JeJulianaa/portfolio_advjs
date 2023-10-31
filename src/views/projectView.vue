
<template>
  <div class="category-box mt-24">
    <button
      type="button"
      class="category-button"
      @click="changeCategory('WebDesign')"
      value="WebDesign"
    >
      Web
    </button>
    <button
      type="button"
      class="category-button"
      @click="changeCategory('UI/UX')"
      value="UI/UX"
    >
      UI/UX
    </button>
    <button
      type="button"
      class="all"
      @click="changeCategory('All')"
    >
      All
    </button>
    <h1>This is an about page</h1>
  </div>

  <section class="container mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
    <div class="" v-for="project in filteredProjects" :key="project.id">
      <!-- loop through your projects and create links to their respective detail pages -->
      <div>
        <button class="button-yellow border-4 rounded-lg p-4">
          <router-link :to="{ name: 'projectdetail', params: { id: project.id }}">
            <button><img class="object-cover w-full rounded-md bg-clip-padding border-gray-100" src="../assets/img/Cup_noodles.jpg" alt=""></button>
          </router-link>
          <div class="overflow-hidden rounded-lg">
            <p>
              ProjectName: {{ project.projectName }}
            </p>
            <p>
              projectCategory: {{ project.projectCategory }}
            </p>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>



<script setup>
import useProjects from '../modules/useProjects.js';
import { onMounted, ref, computed } from 'vue';

const { projects, getProjectsData } = useProjects();

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
