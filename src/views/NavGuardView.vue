<template>
  <div>
    NavGuardTest - future Admin page maybe stuff
  </div>

  
  <div class="project-page mt-24">
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
      <p class="">
          <textarea class="h-[13rem] w-[30rem] bg-blue-100 p-2" placeholder="beskriv projektet her..." v-model="project.projectDescription"></textarea>
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
        <p>
          Web Design: 
          <input type="checkbox" id="webDesign" v-model="webDesignCheckbox" />
        </p>
        <p>
          UI/UX:
          <input type="checkbox" id="UIUX" v-model="uiuxCheckbox" />
        </p>
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
  
    
     
      
      <!------------Item button (edit and delete)-------------->
      
      <button class="btn-edit" @click="firebaseUpdateSingleItem(project)">Edit item</button>
      <hr>
      <button class="btn-delete" @click="firebaseDeleteSingleItem(project.id)">Delete item</button>

   </div>
    
       
      
 </div>
  
</template>

<script setup>


import useProjects from '../modules/useProjects.js';
import { onMounted, computed, ref} from 'vue';


const { 
  projects, 
  getProjectsData, 
  firebaseDeleteSingleItem, 
  firebaseAddSingleItem ,
  AddProjectData,
  firebaseUpdateSingleItem,
  //UpdateProductData,
} = useProjects();



const projectsRef = ref(projects);

const webDesignCheckbox = computed({
  get: () => projectsRef.value.some(project => project.projectCategory === "Web Design"),
  set: (value) => {
    projectsRef.value.forEach(project => {
      project.projectCategory = value ? "Web Design" : '';
      firebaseUpdateSingleItem(project);
    });
  },
});

const uiuxCheckbox = computed({
  get: () => projectsRef.value.some(project => project.projectCategory === "UI/UX"),
  set: (value) => {
    projectsRef.value.forEach(project => {
      project.projectCategory = value ? "UI/UX" : '';
      firebaseUpdateSingleItem(project);
    });
  },
});



//--------


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
