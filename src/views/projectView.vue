<template>
  <div class="project-page">
    <h1>This is an about page</h1>
  </div>


  <div v-for="project in projects" :key="project">
      <!--
  

   
      oop through your projects and create links to their respective detail pages -->
      <div >
        <button class="button-yellow border-4 rounded-lg">
          <p>hej</p>
          <router-link :to="{ name: 'project-detail',  params: { id: project.id  }}">
            <div class="overflow-hidden rounded-lg">
              <p>
                ProjectName: {{ project.projectName }}
              </p>
              <p>
                projectDescription: {{ project.projectDescription }}
              </p>
              
              <p>
                projectCategory: {{ project.projectCategory }}
              </p>
            </div>
          </router-link>
        </button>
      </div>
  
  </div>
</template>

<script setup >
import useProjects from '../modules/useProjects.js';
import { useRouter } from 'vue-router'; // Import the useRouter function
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

const goToProjectDetail = (projectId) => {
  // Navigate to the project-detail route with the project's ID
  router.push({ name: 'project-detail', params: { id: projectId } });
};


onMounted(() => {
  getProjectsData();
})




</script>


