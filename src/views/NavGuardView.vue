<template class="flex justify-center">
  <div>
    NavGuardTest - future Admin page maybe stuff
  </div>

  
  <div class="container mx-auto  project-page mt-24">
    <h1>This is an about page</h1>

    <button class="btn-add button-standard" @click="firebaseAddSingleItem()">Add Item</button>
    <div>
      <input type="text" placeholder="Project name" v-model="AddProjectData.projectName" >

    </div>
    <hr>

    <!--modal start that means this below will be invisible onto u close the modal-->
    <EditProjectModal
        v-if="isEditModalOpen"
        :project="selectedProject"
        @closeEditModal="isEditModalOpen = false"
      />
    <div v-for="project in projects" :key="project">
      <p>
        ProjectID: {{ project.id  }}
      </p>
     
      <!-----different field to project (look at the names to se what it is)------->
      <p>
        ProjectName: {{ project.projectName }}
      </p>
     

  
      
      <!------------Item button (edit and delete)-------------->
      
      <button class="btn-edit" @click="openEditModal(project)">Edit item</button>
      <button class="btn-delete" @click="firebaseDeleteSingleItem(project.id)">Delete item</button>
      <hr>
      

   </div>
   
       
      
 </div>
  

     
</template>

<script setup>


import useProjects from '../modules/useProjects.js';
import { onMounted  } from 'vue';
import {  ref } from 'vue';
import EditProjectModal from '../views/EditProjectModal.vue';



const { projects, getProjectsData, firebaseDeleteSingleItem, firebaseAddSingleItem, AddProjectData } = useProjects();



const selectedProject = ref({});
const isEditModalOpen = ref(false);

const openEditModal = (project) => {
  selectedProject.value = project;
  isEditModalOpen.value = true; // Open the edit modal
};



//--------


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
