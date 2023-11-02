<template class="">
  <div v-if="projectDetailView" class="container mx-auto max-w-none projectDetailView ">
       <button @click="goBack()">Back</button>

    <div class="grid grid-cols-2  ">

      <!------------col 1 img------->
      <div class="col1 pr-3 " v-if="projectDetailView.projectImg">
        <div class="h-full w-full shrink">
          <img class="object-cover h-full " id="projectImage" :src="projectDetailView.projectImg" alt="Project Image" >
         
        </div>
      </div> 
      <!--------col 2 name, desciption links------>
      <div class="col2 bg-slate-300 w-full rounded-md ">
        <ul>
          <li class=" font-medium  ">
            <span ></span>
             {{ projectDetailView.projectCategory.join('  |  ') }}
          </li>
          <div class="child1 p-10">
            
            <li  class="text-3xl font-medium  ">
              <span class=""></span> {{ projectDetailView.projectName }}
            </li>
            <li  class="h-[28rem]"><span>Beskrivelse:</span> <br> {{ projectDetailView.projectDescription }}</li>
          </div>

          <div class="child2 grid grid-cols-3 pt-2 justify-items-center ">
            <button class="pr-3"><li class="bg-red-300 p-2"> {{ projectDetailView.onedriveLink }}</li></button>
            <button class="pr-3"><li class="bg-red-300 p-2"> <a href="projectDetailView.GithubLink">Link to Github</a></li></button>
            <button class="pr-3"><li class="bg-red-300 p-2"> {{ projectDetailView.youtubeLink }}</li></button>
          </div>
        </ul>
      </div>
    </div>


    <div class="grid grid-cols-2 justify-items-center ">
      <ul class="">
        <li class=""><span>Team:</span> {{ projectDetailView.projectTeam }}</li>
     </ul>

     <ul>
        <li class=""><span>Dato:</span> {{ projectDetailView.projectDate }}</li>
     </ul>
    </div>
  </div>
</template>

<script setup>
import useProjects from '../modules/useProjects.js';
import { onMounted,  computed } from 'vue';
import { useRouter } from 'vue-router';

const goBack = ( ) => {
    router.go(-1)
}

const router = useRouter()



const { projects, getProjectsData } = useProjects()




// Get Id from route query
const id = computed(() => router.currentRoute.value.params.id)

const projectDetailView = computed(() => {
  return projects.value.find(project => project.id === id.value);
});

const {
  firebaseDeleteSingleItem,
  firebaseUpdateSingleItem,
  
} = useProjects();



onMounted(() => {
  firebaseDeleteSingleItem,
  firebaseUpdateSingleItem,
  getProjectsData();
  console.log(projects, "projects");
  projectDetailView.value = projects.value.find(project => project.id === id.value);
});
 
</script>
