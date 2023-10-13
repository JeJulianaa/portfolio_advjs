<template>
  <div class="project-page">
    <h1>This is an about page</h1>
  </div>


  <div v-for="project in projects" :key="project">
      <!--
      <p>
        ProjectID: {{ project.id  }}
      </p>
      -->
      <p>
        ProjectName: {{ project.projectName }}
      </p>
  </div>
</template>


<script setup>
import useProjects from '../modules/useProjects.js';
import { onMounted } from 'vue'

const { 
  projects, 
  getProjectsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem ,
  AddProjectData,
  firebaseUpdateSingleItem,
  //UpdateProductData
} = useProjects();

onMounted(() => {
  getProjectsData();
})
</script>