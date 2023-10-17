<template>
  <div>
    NavGuardTest - future Admin page maybe stuff
  </div>

  
  <div class="project-page">
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
      <p>
        <input type="text" placeholder="project description" v-model="project.projectDescription" />
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
      <!--
        <p>
            <label for="webDesign">Web Design</label>
            <input type="checkbox" id="webDesign" value="Web Design" v-model="project.projectCategory">
             Add more options as needed 
        </p> -->
        <!--
        <p>
          <label for="UI/UX">UI/UX</label>
            <input type="checkbox" id="UI/UX" value="UI/ UX" v-model="project.projectCategory">
        </p>
      -->
      


      <!----------------project date (type=date)------------->
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
  
      <p>
        projectImg: {{ project.projectImg }}
      </p>
      <p>
        <input type="text" placeholder="link to youtube" v-model="project.projectImg" />
      </p>
    
     
      
      <!------------Item button (edit and delete)-------------->
      
      <button class="btn-edit" @click="firebaseUpdateSingleItem(project.id)">Edit item</button>
      <hr>
      <button class="btn-delete" @click="firebaseDeleteSingleItem(project.id)">Delete item</button>

   </div>
    
       
      
 </div>
  
</template>

<script setup>
import {storage} from '../firebase';

import useProjects from '../modules/useProjects.js';
import { onMounted} from 'vue';





//--------
const { 
  projects, 
  getProjectsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem ,
  AddProjectData,
  firebaseUpdateSingleItem,
  //UpdateProductData,
} = useProjects();

onMounted(() => {
  getProjectsData();
})









getProjectsData(); // Fetch project data when the component is mounted
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
