// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDWc3o8xng32vZBT2v7Gp4WArFwlfSjyPQ",
  authDomain: "programmer-s-gide.firebaseapp.com",
  projectId: "programmer-s-gide",
  storageBucket: "programmer-s-gide.appspot.com",
  messagingSenderId: "855360627072",
  appId: "1:855360627072:web:d0366990cd36fe30d52165",
  measurementId: "G-TEZ3S0TZ4W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


//get vans from database

export const getCourses = async () => {
  const coursesSnapshot = await getDocs(collection(db, 'data'));
  const courses = await Promise.all(coursesSnapshot.docs.map(async (doc) => {
    const itemsSnapshot = await getDocs(collection(doc.ref, 'items'));
    const items = await Promise.all(itemsSnapshot.docs.map(async (itemDoc) => {
      const linksSnapshot = await getDocs(collection(itemDoc.ref, 'links'));
      const links = linksSnapshot.docs.map(linkDoc => ({ id: linkDoc.id, ...linkDoc.data() }));
      
      return { id: itemDoc.id, ...itemDoc.data(), links }; // Add links to each item
    }));
    
    return { id: doc.id, ...doc.data(), items }; // Add items to the course object
  }));
  
  console.log(courses);
  return courses;
}

// export const getProjects = async () => {
//   const projectsSnapshot = await getDocs(collection(db, 'projects'));
//   const projects = await Promise.all(projectsSnapshot.docs.map(async (doc) => {
//       const itemsSnapshot = await getDocs(collection(doc.ref, 'items'));
//       const items = itemsSnapshot.docs.map(itemDoc => ({ id: itemDoc.id, ...itemDoc.data() }));
      
//       return { id: doc.id, ...doc.data(), items }; // Add items to the course object
//   }));
  
//   console.log(projects);
//   return projects;
// }
export const loginUser = async () => {
  const usersSnapshot = await getDocs(collection(db, 'users'))
  const users = usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
  return users
}  

