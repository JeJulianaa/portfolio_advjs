<template>
  <div class="project-page mt-24">
    <button type="button" class="web-btn" @click="changeCategory('WebDesign')" value="WebDesign">Web</button>
    
    <button type="button" class="all" @click="changeCategory('All')">All</button>
    <h1>This is an about page</h1>
  </div>

<section class="container mx-auto grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 ">
    <div class="" v-for="project in projects" :key="project.id">
        <!--loop through your projects and create links to their respective detail pages -->
        <div >
          <button class="button-yellow border-4 rounded-lg p-4">

          
            <router-link :to="{ name: 'projectdetail',  params: { id: project.id}}">
              <button><img class="object-cover w-full  rounded-md bg-clip-padding  border-gray-100" src="../assets/img/Cup_noodles.jpg" alt=""></button>
            </router-link>
         
              <div class="overflow-hidden rounded-lg">
                <p>
                  ProjectName: {{ project.projectName }}
                </p>
              
                
                <p>
                  projectCategory: {{ project.projectCategory }}
                </p>
              </div>
        
          </button>
        </div>
    
    </div>
</section>
</template>

<script setup >
import useProjects from '../modules/useProjects.js';
import { onMounted } from 'vue'





const { projects, getProjectsData  } = useProjects();

//const selectedCategory = ref('All'); // Initialize with 'All'



//const changeCategory = (category) => {
 // selectedCategory.value = category;
  // Filter Firestore data based on the selected category
  //if (category !== 'All') {
  //  projects.value = projects.value.filter((project) => project.projectCategory === category);
  //} else {
  //  getProjectsData(); // If 'All' is selected, load all projects
 // }
  // Filter Firestore data based on selected categories
 // projects.value = projects.value.filter((project) =>
  //  selectedCategories.value.includes('All') || selectedCategories.value.includes(project.projectCategory)
  //); 
//};



onMounted(() => {
  getProjectsData();

});


</script>