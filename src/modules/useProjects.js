import { db } from '../firebase.js'

import { ref,} from 'vue'
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc, } from 'firebase/firestore';





const useProjects = () => {

  const projects = ref([]); // to store data from firebase
  const projectDataRef = collection(db, 'projects');





  const AddProjectData = ref({
    projectName: '',
    projectDescription: '',
    projectDate:'',
    githubLink:'',
    onedriveLink:'',
    youtubeLink:'',
    projectTeam:'',
    projectTech:'',
    projectCategory:[],
  
    //projectImg:'',
  })

  const UpdateProjectData = ref({
    projectName: '',
    projectDescription: '',
    projectDate:'',
    githubLink:'',
    onedriveLink:'',
    youtubeLink:'',
    projectTeam:'',
    projectTech:'',
    projectCategory:[],
   
   // projectImg:'',
  })

  const getProjectsData = () => {
    onSnapshot(projectDataRef, (snapshot) => {
      projects.value = snapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
          //projectName: doc.data().projectName,
          //productPrice: doc.data().productPrice
         
        }
      })
    })
    console.log("test", projects)
  }

  const firebaseDeleteSingleItem = async(id) => {
    await deleteDoc(doc(db, "projects", id));
    console.log("is deleted", id)
  }

  const firebaseAddSingleItem = async () => {
    await addDoc(collection(db, "projects"), {
      projectName: AddProjectData.value.projectName,
      projectDescription: AddProjectData.value.projectDescription,
      projectDate: AddProjectData.value.projectDate,
      githubLink: AddProjectData.value.githubLink,
      onedriveLink: AddProjectData.value.onedriveLink,
      youtubeLink: AddProjectData.value.youtubeLink,
      projectTeam: AddProjectData.value.projectTeam,
      projectTech: AddProjectData.value.projectTech,
      projectCategory: AddProjectData.value.projectCategory,
    });
  
    console.log('Item is added');

    
  }

  const firebaseUpdateSingleItem = async (project) => {
    const projectRef = doc(projectDataRef, project.id); // Assuming project.id is the document ID
  
    await updateDoc(projectRef, {
      projectName: project.projectName,
      projectCategory: project.projectCategory,
      projectDate: project.projectDate,
      projectDescription: project.projectDescription,
      projectTeam: project.projectTeam,
      projectTech: project.projectTech,
      githubLink: project.githubLink,
      onedriveLink: project.onedriveLink,
      youtubeLink: project.youtubeLink,
     
     
    }).then(() => {

     
      // Clear the form data if needed
      UpdateProjectData.value.projectName = '';
      UpdateProjectData.value.projectCategory = '';
      UpdateProjectData.value.projectDate = '';
      UpdateProjectData.value.projectDescription = '';
      UpdateProjectData.value.projectTeam = '';
      UpdateProjectData.value.projectTech = '';
      UpdateProjectData.value.githubLink = '';
      UpdateProjectData.value.onedriveLink = '';
      UpdateProjectData.value.youtubeLink = '';
     
   
    });
  };

 
  
  


  return {
    getProjectsData,
    projects,
    firebaseDeleteSingleItem,
    firebaseAddSingleItem,
    AddProjectData,
    firebaseUpdateSingleItem,
    UpdateProjectData,
    
  }
 }

  export default useProjects;
 
