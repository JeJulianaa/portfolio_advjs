

<template>
   
    <!-- <img class="z-[-2]   max-w-none h-100 rounded-md bg-clip-padding border-gray-100 absolute top-0 left-0 " src="../assets/img/Cup_noodles.jpg" alt=""> -->
    <main class="container  mx-auto  flex justify-center  ">
      
      <div class="">
      
            <div class="container  ">
               
                <!--front page cover-->
                <section class="container mx-auto">
                    <div class="cover max-w-none bg-opacity-50 rounded-md relative ">
                        <div class="text-container absolute top-0 left-0 w-full h-full flex xl:items-center pl-[1rem] pb-[17rem] pt-[9rem] md:pb-[10rem] md:pt-[17rem] lg:pb-[0rem] lg:pl-8  lg:pt-[19rem] xl:pt-[0rem] xl:pb-[2rem]">
                            <h1 class="text-white text-5xl sm:text-4xl md:text-6xl lg:text-8xl  xl:text-8xl">Alberte Juliana</h1>
                            
                        </div>
                        <div class="text-container absolute top-0 left-0 w-full h-full flex items-center pl-[1rem] pt-[5.8rem] pb-[7rem] md:pb-[0] md:pt-[2rem] lg:pb-[7rem] lg:pl-[2rem] lg:pt-[20rem] xl:pb-[13rem] xl:pl-[22rem] xl:pt-[22rem]">
                            <h2 class="text-white text-5xl md:text-6xl lg:text-8xl xl:text-8xl ">Torbensen</h2>
                        </div>
                        <div class="text-container absolute top-0 left-0 w-full h-full flex items-center grid grid-cols-1  md:grid-cols-2">
                            <p class="text-white text-md pt-[18.1rem] pl-[1rem]  lg:pl-[3rem] lg:pt-[23rem] xl:pl-[23rem] pt-[12rem] md:pt-[16rem]">Som multimediedesigner og bringer jeg et nyt perspektiv til hvert projekt. </p>

                            <button class="text-container  text-lg pt-[3rem] pb-[7rem]  pl-[0rem] md:pl-[3rem] md:pb-[0rem] md:pt-[16rem]  lg:pl-[16rem] lg:pt-[23rem]  xl:pl-[23rem]    ">  <RouterLink to="/project-page">Se Projekter</RouterLink> </button>
                        </div>
                        
                        
                        
                       <img class="z-10 object-cover  h-[30rem] md:h-[43rem]  w-full rounded-md bg-clip-padding border-gray-100" src="../assets/img/hvidbg.jpeg" alt="">
                    </div>
                </section>
                
                <!--lastest Project (the 3 Img)-->
                <section >
                    <h3 class="text-center pb-7 pt-7">latest Project</h3>
                    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-2  max-w-none h-2/4 ">
                        <div class="flex justify-center w-full " v-for="(project, index) in filteredProjects" :key="project.id">
                            <!-- loop through your projects and create links to their respective detail pages -->
                            <div class="" v-if="index < 3">
                                <button class="button-yellow w-full h-full rounded-lg " >
                                    <router-link :to="{ name: 'projectdetail', params: { id: project.id }}">
                                    <div class="  h-full w-full h-full shrink">
                                                    
                                        <div v-if="project.projectImg">
                                        <img
                                            class="object-cover  h-56 rounded-md bg-clip-padding border-gray-100"
                                            id="projectImage"
                                            :src="project.projectImg"
                                            alt="Project Image"
                                            @error="handleImageError"
                                        >
                                        </div> 
                                    </div>
                                    
                                    
                                    
                                    
                                    
                                    <!-- <div class="overflow-hidden rounded-lg">
                                        <p>
                                        ProjectName: {{ project.projectName }}
                                        </p>
                                        <p>
                                        projectCategory: {{ project.projectCategory.join(', ') }}
                                        </p>
                                    </div> -->
                                    </router-link>
                                </button>
                            </div>
                        </div>
                        <!-- <div class=" flex justify-center md:mr-4">
                            <img class="object-cover w-full rounded-md bg-clip-padding  border-gray-100" src="../assets/img/Cup_noodles.jpg" alt="">
                        </div>
                        <div class=" flex justify-center mt-4 sm:mt-0">
                            <img class="object-cover w-full rounded-md bg-clip-padding  border-gray-100" src="../assets/img/Cup_noodles.jpg" alt="">
                        </div>
                        <div class="bg-red-300 flex justify-center  md:ml-4 mt-4 sm:mt-0">
                            <img class="object-cover w-full rounded-md bg-clip-padding  border-gray-100" src="../assets/img/Cup_noodles.jpg" alt="">
                        </div> -->
                    </div>
                </section>

                <!--2cols - Sevies and Img--->
                <section class="container w-full">
                    <p class="  text-center pb-7 pt-14">Mine Kompentencer</p>
                    <div class=" flex grid grid-cols-1 sm:grid-cols-2 w-full items-center">
                        <div class="col1  md:mr-3 flex-grow flex-shrink ">

                            <!-- col1 out of 5 -->
                            <div class="w-full flex bg-neutral-300 rounded-md border-gray-100 xl:p-10 md:p-4 px-5 mb-2 flex items-center justify-center">   
                                <div class="w-full grow shrink">
                                    <!-- Column 1 content -->
                                    <div class=" mr-2">
                                        <h3 class="text-xl font-medium ">MEDIE OG GRAFISK DESIGN</h3>
                                        <p class="lg:contents hidden font-medium ">
                                            Både video/billede redigering, illustrationer, magasin og meget mere
                                           
                                        </p>
                                    </div>
                                </div>
                                <!--button-->
                                <div class=" w-1/4 flex justify-end  flex items-center justify-center h-full py-4 ">
                                    <button class=" h-[3rem] w-[10rem] button-standard"><RouterLink to="/services">Læs Mere</RouterLink></button>
                                </div>
                            </div>

                            
                            <!-------col2 out of 5----->
                            <div class="w-full flex bg-neutral-300 rounded-md border-gray-100 xl:p-10 md:p-4 px-5 mb-2 flex items-center justify-center">   
                                <div class="w-full grow shrink">
                                    <!-- Column 2 content -->
                                    <div class=" mr-2">
                                        <h3 class="text-xl font-medium ">BRAND OG MARKEDFØRING</h3>
                                        <p class="lg:contents hidden font-medium ">
                                            En solid markedføring-strategi, SoMe kalender så dit brand bliver set.
                                         
                                        </p>
                                    </div>
                                </div>
                                <div class=" w-1/4 flex justify-end  flex items-center justify-center h-full py-4 ">
                                    <button class=" h-[3rem] w-[10rem] button-standard"><RouterLink to="/services">Læs Mere</RouterLink></button>
                                </div>
                            </div>
                            
                             <!-- col3 out of 5 -->
                            <div class="w-full flex bg-neutral-300 rounded-md border-gray-100 xl:p-10 md:p-4 px-5 mb-2 flex items-center justify-center">   
                                <div class="w-full grow shrink">
                                    <!-- Column 3 content -->
                                    <div class=" mr-2">
                                        <h3 class="text-xl font-medium ">BRUGER VENLIGHED</h3>
                                        <p class="lg:contents hidden font-medium ">
                                           Altid være et skridt foran end dine bruger.
                                           
                                        </p>
                                    </div>
                                </div>
                                <!--button-->
                                <div class=" w-1/4 flex justify-end  flex items-center justify-center h-full py-4 ">
                                    <button class=" h-[3rem] w-[10rem] button-standard"><RouterLink to="/services">Læs Mere</RouterLink></button>
                                </div>
                            </div>

                            <!-- col4 out of 5 -->
                            <div class="w-full flex bg-neutral-300 rounded-md border-gray-100 xl:p-10 md:p-4 px-5 mb-2 flex items-center justify-center">   
                                <div class="w-full grow shrink">
                                    <!-- Column 4 content -->
                                    <div class=" mr-2">
                                        <h3 class="text-xl font-medium ">PLANLÆGNING OG STRYKTUR</h3>
                                        <p class="lg:contents hidden font-medium ">
                                            en målrettet plan, er vejen frem til et sucessful brand.
                                           
                                        </p>
                                    </div>
                                </div>
                                <!--button-->
                                <div class=" w-1/4 flex justify-end  flex items-center justify-center h-full py-4 ">
                                    <button class=" h-[3rem] w-[10rem] button-standard"><RouterLink to="/services">Læs Mere</RouterLink></button>
                                </div>
                            </div>

                            <!-- col5 out of 5 -->
                            <div class="w-full flex bg-neutral-300 rounded-md border-gray-100 xl:p-10 md:p-4 px-5 flex items-center justify-center">   
                                <div class="w-full grow shrink">
                                    <!-- Column 5 content -->
                                    <div class=" mr-2">
                                        <h3 class="text-xl font-medium ">FUNKTIONEL WEBSITE</h3>
                                        <p class="lg:contents hidden font-medium ">
                                           stilful design, responsive til både smartphone eller pc bruger.
                                           
                                        </p>
                                    </div>
                                </div>
                                <!--button-->
                                <div class=" w-1/4 flex justify-end  flex items-center justify-center h-full py-4 ">
                                    <button class=" h-[3rem] w-[10rem] button-standard">knap</button>
                                </div>
                            </div>
                        </div>

                        <div class="col2  latest-project h-full w-full  shrink">
                            <!-- col2 content -->
                            <img class="w-full h-full object-cover  rounded-md bg-clip-padding opacity-50 border-gray-100" src="../assets/img/Cup_noodles.jpg" alt="">
                        </div>
                    </div>
                </section>
                <!---About me --->
                <section >
                    <h3 class="text-center pb-7 pt-7">branding blah blah</h3>
                    <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2  max-w-none pb-40">
                        <div class="bg-neutral-300 rounded-md flex justify-center md:mr-3 shrink ">
                            <div class=" w-full  rounded-md opacity-50 border-gray-100 p-10 lg:pr-26" >
                                <h2 class="text-5xl lg:text-7xl pb-10 ">Hvem er jeg?</h2>
                                <p class="pb-14">Som multimediedesigner og content creator 
                                    bringer jeg et nyt perspektiv til hvert projekt.
                                    Med færdigheder inden for UX/UI, content creation,
                                    web development og en dedikation til at holde sig op to-date
                                    med de nyeste trends.</p>
                                    <button class=" h-[3rem] w-[10rem] button-standard">knap</button>
                            </div>
                                
                        </div>
                        <div class=" mt-4 sm:mt-0 h-full w-full  shrink">
                            <img class="object-cover w-full h-full rounded-md opacity-50 border-gray-100" src="../assets/img/Cup_noodles.jpg" alt="">
                        </div>
                        
                    </div>
                </section>
            </div>
            
        </div>
    </main>
</template>

<script setup>
import useProjects from '../modules/useProjects.js';
import { onMounted, ref, computed } from 'vue';

const { projects, getProjectsData, } = useProjects();

const selectedCategory = ref('All');

// const changeCategory = (category) => {
//   selectedCategory.value = category;
// };

const filteredProjects = computed(() =>
  selectedCategory.value === 'All'
    ? projects.value
    : projects.value.filter((project) => project.projectCategory.includes(selectedCategory.value))
);


onMounted(async () => {
   getProjectsData();
});
</script>

<style>

</style>