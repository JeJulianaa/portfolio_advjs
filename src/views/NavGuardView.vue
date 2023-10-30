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
    
         
       <div class="modal-content" v-for="project in projects" :key="project.id">
        <p v-if="!isEditModalOpen">
          ProjectName: {{ project.projectName }}
        </p>
        <p v-if="!isEditModalOpen">
          projectCategory: {{ project.projectCategory }}
        </p>

          <!--MODAL: when clicking on edit item modal open-->
          <button v-if="!isEditModalOpen" class="btn-edit button-standard mt-9" @click="openEditModal(project.id)">Edit item</button>
          <hr v-if="!isEditModalOpen">
          <div class="modal" v-if="isEditModalOpen && selectedProject === project.id">
          <p>
            ProjectName: {{ project.projectName }}
          </p>
          <p>
            <input type="text" placeholder="New project name" v-model="project.projectName" />
          </p>
    
          <p>
            projectDescription: {{ project.projectDescription }}
          </p>
          <p class="">
              <textarea class= "resize-y h-[8rem] w-[17rem] bg-blue-100 p-2" placeholder="beskriv projektet her..." v-model="project.projectDescription"></textarea>
          </p>
    
          <p>
            projectTeam: {{ project.projectTeam }}
          </p>
          <p>
            <input type="text" placeholder="project Team" v-model="project.projectTeam" />
          </p>
    
          <p>
            projectCategory: {{ project.projectCategory }}
          </p>
          
            <h2>Select Categories:</h2>
            
              <p>
              Web Design: 
              <input type="checkbox" id="webDesign" v-model="project.projectCategory" />
              </p>
              <p>
                UI/UX:
                <input type="checkbox" id="UI/UX" v-model="project.projectCategory" />
              </p>
            <!--
            <p>
              <label for="UI/UX">UI/UX</label>
                <input type="checkbox" id="UI/UX" value="UI/ UX" v-model="project.projectCategory">
            </p>
          
    
    
          <--------------project date (type=date)------------->
          <p>
            projectDate: {{ project.projectDate }}
          </p>
          <p>
            <input type="date" placeholder="project date" v-model="project.projectDate" />
          </p>
    
    
          <!-------------------------links------------------------->
          <p>
            onedrive link: {{ project.onedriveLink }}
          </p>
          <p>
            <input type="url" placeholder="link to onedrive" v-model="project.onedriveLink" />
          </p>
          <p>
            Github link: {{ project.githubLink }}
          </p>
          <p>
            <input type="url" placeholder="link to github" v-model="project.githubLink" />
          </p>
          <p>
            youtube link: {{ project.youtubeLink }}
          </p>
          <p>
            <input type="url" placeholder="link to youtube" v-model="project.youtubeLink" />
          </p>
         

    
        
          <!------------Item button (edit and delete)-------------->
        
        
          <button class="btn-delete mt-3 button-standard bg-red-500" @click="firebaseDeleteSingleItem(project.id)">Delete item</button>
          <button class="btn-edit button-standard mx-4 bg-green-500" @click="firebaseUpdateSingleItem(project)">Save</button>
          <button class="btn-close mb-10" @click="closeEditModal">Close</button>
          <hr>

        </div>

    </div>

     <!--modal start that means this below will be invisible onto u close the modal-->    
 </div>
  

     
</template>

<script setup>
import useProjects from '../modules/useProjects.js';

import { onMounted  } from 'vue';
import {  ref } from 'vue';

import {  } from 'vue';



const { projects, getProjectsData, firebaseDeleteSingleItem, firebaseUpdateSingleItem, firebaseAddSingleItem, AddProjectData } = useProjects();


const selectedProject = ref({}); // Store the ID of the selected project
const isEditModalOpen = ref(false);

const openEditModal = (projectId) => {
  selectedProject.value = projectId; // Set the selected project's ID
  isEditModalOpen.value = true;
};

const closeEditModal = () => {
  selectedProject.value = null; // Clear the selected project
  isEditModalOpen.value = false;
}; 

onMounted(() => {
  getProjectsData();
});

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
      
