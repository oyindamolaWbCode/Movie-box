import { useState } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./Components/Home";
import Movie from "./Components/Movie";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/movie" element={<Movie />} />
    </Route>
  )
);
function App({ routes }) {
  return (
    <>
      <div className="the-body">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
