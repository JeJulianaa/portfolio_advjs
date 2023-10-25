<template>
  <div v-if="projectDetailView" class="projectDetailView mt-24">
    <ul>
      <li><span>Status:</span> {{ projectDetailView.projectName }}</li>
          
    </ul>
   
  </div>
</template>

<script setup>
import useProjects from '../modules/useProjects.js';
import { onMounted,  computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()



const { projects, getProjectsData } = useProjects()




// Get Id from route query
const id = computed(() => router.currentRoute.value.params.id)

const projectDetailView = computed(() => {
  return projects.value.find(project => project.id === id.value);
});

const {
  firebaseDeleteSingleItem,
  firebaseUpdateSingleItem,
} = useProjects();



onMounted(() => {
  firebaseDeleteSingleItem,
  firebaseUpdateSingleItem,
  getProjectsData();
  console.log(projects, "projects");
  projectDetailView.value = projects.value.find(project => project.id === id.value);
});
 
</script>
