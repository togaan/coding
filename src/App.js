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
import Sections, { loader as SectionsLoader } from './pages/programmingPages/Sections';
import Login, { loader, action as loginaction } from './pages/Login';
import Logout from './pages/Logout';
import EmptyPage from './pages/EmptyPage';
import Error from './Components/Error';


const router = createBrowserRouter(createRoutesFromElements(
  
  <Route element={<Layout />}>
    <Route path='*' element={<EmptyPage />}  />
    <Route path='/' element={<Home/>} />
    <Route path='about' element={<About />} />
    <Route path='login' element={<Login />} loader={loader} action={loginaction}  />
    <Route path='logout' element={<Logout/>} />
    <Route path='programming' element={<PropgrammingLayout />}>    
      <Route index element={<Sections />} loader={SectionsLoader} errorElement={<Error/>} />
      <Route path=':id' element={<Courses />} loader={coursesLoader} errorElement={<Error/>}/>
    </Route>
  </Route>
))
function App() {
  return (
    <ModeProvider>
        <RouterProvider router={router} />
    </ModeProvider>
  );
}


export default App;
