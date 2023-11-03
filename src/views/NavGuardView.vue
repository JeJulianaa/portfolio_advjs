<template class="flex justify-center ">
  

  
    <div class="container mx-auto  project-page mb-20  md:px-0 sm:px-40 ">
      <h2 class="text-lg flex justify-end pb-3">Add new project here</h2>
      <section class="add-new-project flex justify-end">
        
        <div class="px-2 flex self-center ">
          <input class="border-2 w-full rounded-md py-1" type="text" placeholder="Project name" v-model="AddProjectData.projectName" >
        </div>
        <button class="btn-add button-standard" @click="firebaseAddSingleItem()">Tilføj Projekt</button>
        
      </section>
      <h2 class="text-lg pb-1">Dine Projekter</h2>
      <hr>
      
      <section class="container mx-auto h-full md:w-[100%] sm:w-[90%]">
      
          
        <div class=" modal-content mt-5 " v-for="project in projects" :key="project.id">
          <p v-if="!isEditModalOpen">
            ProjectName: {{ project.projectName }}
          </p>
          <p v-if="!isEditModalOpen">
            projectCategory: {{ project.projectCategory.join(', ') }}
          </p>

            <!--MODAL: when clicking on edit item modal open-->
            
          
            <Transition v-if="closeEditModal">
              <div class=" bg-gray-100 sm:px-10 sm:py-6 xl:px-15 modal" v-if="isEditModalOpen && selectedProject === project.id">
                <div class="flex justify-end px-2">
                  <button class="font-semibold text-red-400 btn-close mb-4" @click="closeEditModal">Close</button>
                </div>
                <div class=" grid md:grid-cols-2 gap-10">
                  
                  <div>
                    <p>Projekt Navn:</p>
                    
                    <p class="" >
                      <input class="border-2 w-full rounded-md" type="text" placeholder="New project name" v-model="project.projectName" />
                    </p>
                  </div>
                  
                  <div>
                    <p>projectTeam: </p>
                    <p>
                      <input class="border-2 w-full rounded-md" type="text" placeholder="project Team" v-model="project.projectTeam" />
                    </p>
                  </div>
              </div>
                <p class="pt-3">
                  projectDescription: 
                </p>
                <p class="">
                    <textarea class= "border-2 resize-y h-[8rem] w-full bbg-neutral-50  p-2" placeholder="beskriv projektet her..." v-model="project.projectDescription"></textarea>
                </p>
                
                <!--selected category----->
                <section class="category-section mt-1 bg-gray-200 py-3 ">
                 
                  <h2 class="pb-2 px-3 pt-1 ">selected Categories: {{ project.projectCategory.join(', ') }}</h2> 
                    <div class="text-left px-3 pb-2   grid grid-cols-2 gap-10 ">
                      
                      <div>
                        <p>
                        Web Design: 
                        <input type="checkbox" id="WebDesign" value="WebDesign" v-model="project.projectCategory" />
                        </p>
                        <p>
                        Markedføring:
                        <input type="checkbox" id="Markedføring" value="Markedføring" v-model="project.projectCategory" />
                        </p>
                        <p>
                          UI/UX:
                          <input type="checkbox" id="UI/UX" value="UI/UX" v-model="project.projectCategory" />
                        </p>
                      </div>
                      <div>
                        <p>
                        MultiMedie:
                        <input type="checkbox" id="MultiMedie" value="MultiMedie" v-model="project.projectCategory" />
                        </p>
                        <p>
                        GrafiskDesign:
                        <input type="checkbox" id="GrafiskDesign" value="GrafiskDesign" v-model="project.projectCategory" />
                        </p>
                      </div>
                    </div>
                  </section>

                  <!--
                  <p>
                    <label for="UI/UX">UI/UX</label>
                      <input type="checkbox" id="UI/UX" value="UI/ UX" v-model="project.projectCategory">
                  </p>
                
          
          
               
          
          
                <-------------------------links------------------------->
                <div class="grid grid-cols-2 py-3 gap-10">
                  <div>
                    <p>
                      onedrive link: 
                    </p>
                    <p>
                      <input class="border-2 w-full rounded-md" type="url" placeholder="link to onedrive" v-model="project.onedriveLink" />
                    </p>
                  </div>
                  <div>
                    <p>
                      Github link: 
                    </p>
                    <p>
                      <input class="border-2 w-full rounded-md" type="url" placeholder="link to github" v-model="project.githubLink" />
                    </p>
                  </div>
                </div>

                <div class="grid grid-cols-2 py-3 gap-10">
                  <div>
                    <p>
                      youtube link: 
                    </p>
                    <p>
                      <input class="border-2 w-full rounded-md" type="url" placeholder="link to youtube" v-model="project.youtubeLink" />
                    </p>
                  </div>
                  <div>
                    <!--------------project date (type=date)--------->
                    <p>
                      projectDate: {{ project.projectDate }}
                    </p>
                    <p>
                      <input class="border-2 w-full rounded-md" type="date" placeholder="project date" v-model="project.projectDate" />
                    </p>
                  </div>
                </div>
                <div class="grid grid-cols-2 py-4 gap-10 ">
                  <div class="text-center flex items-center ">
                    <input type="file" @change="uploadImg" accept="image/*">
                  </div>
                
                  <div class=" h-full w-full  p-12  py-3">
                    <img class="object-cover rounded-md " v-if="project.projectImg" :src="project.projectImg" alt="Project Image" />
                  </div>
                </div>

          
              
                <!------------Item button (edit and delete)-------------->
              
                
                  
                <div class="flex justify-end">
                  <button class=" btn-edit button-save mx-4 " @click="firebaseUpdateSingleItem(project); closeEditModal()">Save</button>
                </div>
                    
                
              
              
            </div>
          </Transition>
          
          <div v-if="!isEditModalOpen">
            <button v-if="!isEditModalOpen" class="mr-2 btn-edit button-standard " @click="openEditModal(project.id)">Edit item</button>
              <button  class="btnDelete  button-delete bg-red-500" @click="firebaseDeleteSingleItem(project.id)">Delete item</button>
          
          </div>
      </div>
     
    </section>
    <hr class="mt-4">
     <!--modal start that means this below will be invisible onto u close the modal-->    
 </div>
  

     
</template>

<script setup>
import useProjects from '../modules/useProjects.js';

import { onMounted  } from 'vue';
import {  ref } from 'vue';





const { projects, getProjectsData, firebaseDeleteSingleItem, firebaseUpdateSingleItem, firebaseAddSingleItem, AddProjectData, uploadImg } = useProjects();


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

.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;

};


</style>
      
