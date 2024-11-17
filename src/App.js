import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
   } from "react-router-dom";
import { ModeProvider } from './ModeContext';
import Layout from './Components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PropgrammingLayout from './Components/ProgrammingLayout';
import Courses, {loader as coursesLoader}  from './pages/programmingPages/Courses';
import Projects from './pages/programmingPages/Projects';
import Resources from './pages/programmingPages/Resources';
import Sections, {loader as SectionsLoader} from './pages/programmingPages/Sections';


const router = createBrowserRouter(createRoutesFromElements(
  
  <Route element={<Layout/>}>
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About/>} />
    <Route path='programming' element={<PropgrammingLayout />}>    
      <Route index element={<Sections />} loader={SectionsLoader} />
      <Route path=':id' element={<Courses />} loader={coursesLoader} />
      <Route path=':id' element={<Projects/>} />
      <Route path=':id' element={<Resources/>} />
    </Route>
  </Route>
))
function App() {
  return (
    <ModeProvider>
      <RouterProvider router={router}/>
    </ModeProvider>
    
  );
}

export default App;
