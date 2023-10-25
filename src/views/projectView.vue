<template>
  <div class="project-page">
    <h1>This is an about page</h1>
  </div>


  <div v-for="project in projects" :key="project.ID">
      <!--
  

   
      oop through your projects and create links to their respective detail pages -->
      <div >
        <button class="button-yellow border-4 rounded-lg mt-24">
          <p>hej</p>
         
          <router-link :to="{ name: 'projectdetail',  params: { id: project.id  }}">
            <button>View project</button>
          </router-link>
          <!--<router-link :to="{ name: 'projectdetail',  params: { id: project.id  }}">-->
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
      
        </button>
      </div>
  
  </div>
</template>

<script setup >
import useProjects from '../modules/useProjects.js';
import { onMounted } from 'vue'


const { projects, getProjectsData } = useProjects();


onMounted(() => {
  getProjectsData();
});


</script>