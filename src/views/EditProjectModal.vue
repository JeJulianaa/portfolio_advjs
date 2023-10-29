<template class="flex justify-center">
    
    
    <div class="container mx-auto  project-page mt-5">
      
  
  
      <div v-for="project in projects" :key="project">
        <p>
          ProjectID: {{ project.id  }}
        </p>
       
        <!-----different field to project (look at the names to se what it is)------->
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
        <button @click="closeEditModal">Close</button>
       
        
        <!------------Item button (edit and delete)-------------->
        
        <button class="btn-edit" @click="firebaseUpdateSingleItem(project)">Save</button>
     
        <hr>
        <button class="btn-delete" @click="firebaseDeleteSingleItem(project.id)">Delete item</button>
  
     </div>
      
         
        
   </div>
   
    
  </template>
  
  <script>
    export default {
    props: {
        project: Object,
    },
    emits: ['closeEditModal'], // Declare the allowed custom event
    methods: {
        closeEditModal() {
        this.$emit('closeEditModal'); // Emit the custom event
        },
    },
    };
</script>
<script setup>
import useProjects from '../modules/useProjects.js';
import { onMounted } from 'vue';



const { projects, getProjectsData, firebaseDeleteSingleItem, firebaseUpdateSingleItem } = useProjects();



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
  