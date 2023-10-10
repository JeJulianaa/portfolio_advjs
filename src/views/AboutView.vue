<template>
  <div class="about">
    <h1>This is an about page</h1>

    <button class="btn-add" @click="firebaseAddSingleItem()">Add Item</button>
    <div>
      <input type="text" placeholder="Project name" v-model="AddProjectData.projectName" >

    </div>
    <hr>

    <div v-for="project in projects" :key="project">
      <p>
        ProjectID: {{ project.id  }}
      </p>
      <p>
        ProjectName: {{ project.projectName }}
      </p>
      <p>
        projectDescription: {{ project.projectDescription }}
      </p>
      <button class="btn-delete" @click="firebaseDeleteSingleItem(project.id)">Delete item</button>
    
      <p>
        <input type="text" placeholder="New project name" v-model="project.projectName" />
      </p>
      <button class="btn-edit" @click="firebaseUpdateSingleItem(project.id)">Edit item</button>
      <hr>
    </div>
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

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
