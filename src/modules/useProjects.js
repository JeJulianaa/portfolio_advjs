import { db, storage } from '../firebase.js'

import { ref } from 'vue'
import { collection, onSnapshot, doc, deleteDoc, addDoc, updateDoc, } from 'firebase/firestore';
import { ref as storageRef, uploadBytes,} from 'firebase/storage'; // Import Firebase Storage functions




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
  
    projectImg:'',
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
   
    projectImg:'',
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
    await addDoc(collection(db, 'projects'), {
      projectName: AddProjectData.value.projectName,
      projectDescription: AddProjectData.value.projectDescription,
      projectDate: AddProjectData.value.projectDate,
      githubLink: AddProjectData.value.githubLink,
      onedriveLink: AddProjectData.value.onedriveLink,
      youtubeLink: AddProjectData.value.youtubeLink,
      projectTeam: AddProjectData.value.projectTeam,
      projectTech: AddProjectData.value.projectTech,
      
      projectImg: AddProjectData.value.projectImg,

     

    });
    // Clear the text field after adding the project
    AddProjectData.value.projectName = ''; // Reset the projectName field
    // Clear other fields as needed
    AddProjectData.value.projectDescription = '';
    AddProjectData.value.projectDate = '';
    AddProjectData.value.githubLink = '';
    AddProjectData.value.onedriveLink = '';
    AddProjectData.value.youtubeLink = '';
    AddProjectData.value.projectTeam = '';
    AddProjectData.value.projectTech = '';
   
    AddProjectData.value.projectImg = '';
    console.log('Item is added');

    
  }

  const firebaseUpdateSingleItem = async(project) => { 
    await updateDoc(doc(projectDataRef, project), {
        projectName: projects.value.find(project => project.id === project.id).projectName, 
        projectDescription: projects.value.find(project => project.id === project.id).projectDescription,
        projectDate: projects.value.find(project => project.id === project.id).projectDate,
        githubLink: projects.value.find(project => project.id === project.id).githubLink,
        onedriveLink: projects.value.find(project => project.id === project.id).onedriveLink,
        youtubeLink: projects.value.find(project => project.id === project.id).youtubeLink,
        projectTeam: projects.value.find(project => project.id === project.id).projectTeam,
        projectTech: projects.value.find(project => project.id === project.id).projectTech,
       
        projectImg: projects.value.find(project => project.id === project.id).projectImg,

       // productName: UpdateProductData.value.productName, 
       // projectDescription: 200
    }).then(() => {
     // UpdateProductData.value.productName = ''
      console.log('updated');
    })
  }

  


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