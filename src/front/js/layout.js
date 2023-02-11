import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Courses } from "./pages/Courses.jsx";
import { Events } from "./pages/Events.jsx";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import { Prueba } from "./pages/prueba.jsx";
import { Profile } from "./pages/profile.jsx";
import { CourseDetail } from "./pages/CourseDetail.jsx"
import { CreatePost } from "./component/CreatePost.jsx";
import { EventDetail } from "./pages/EventDetail.jsx"
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";


//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Routes>
<<<<<<< HEAD
          
            <Route element={<CreatePost />} path="/publicar" />
=======
            <Route element={<Profile />} path="/profile" />
>>>>>>> c5d6f9422374dd3b43d600eb1c243d549cfc7a42
            <Route element={<Prueba />} path="/prueba" />
            <Route element={<Home />} path="/" />
            <Route element={<Courses />} path="/cursos" />
            <Route element={<Events />} path="/eventos" />
            <Route element={<CourseDetail />} path="/curso/:id" />
            <Route element={<EventDetail />} path="/evento/:id" />

            <Route element={<Single />} path="/single/:theid" />
            <Route element={<h1>Not found!</h1>} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
