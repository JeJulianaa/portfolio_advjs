<template>
    <div class="project-detail">
      <h1>{{ project.projectName }}</h1>
      <p>Description: {{ project.projectDescription }}</p>
      <p>Date: {{ project.projectDate }}</p>
      <p>GitHub Link: {{ project.githubLink }}</p>
      <p>OneDrive Link: {{ project.onedriveLink }}</p>
      <p>YouTube Link: {{ project.youtubeLink }}</p>
      <p>Team: {{ project.projectTeam }}</p>
      <p>Tech: {{ project.projectTech }}</p>
      
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
  
  <style scoped>
  
  </style>