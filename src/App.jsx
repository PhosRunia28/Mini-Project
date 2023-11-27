import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import CareersLayout from "./layout/CareersLayout";
import HelpLayout from "./layout/HelpLayout";
import Project from "./layout/Project";
import Calculator from "./pages/Calculator";
import CareerDetail, { CareerDetailLoader } from "./pages/careers/CareerDetail";
import CareerError from "./pages/careers/CareerError";
import Careers, { CareersLoader } from "./pages/careers/Careers";
import Contact, { actionContact } from "./pages/help/Contact";
import Quiz from "./pages/Quiz";
import Todo from "./pages/Todo";
export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Project />} path="/">
        <Route element={<Calculator />} index />
        <Route element={<Todo />} path="todo" />
        <Route element={<Quiz />} path="quiz" />

        <Route element={<HelpLayout />} path="help">
          <Route element={<Contact />} path="contact" action={actionContact} />
        </Route>

        <Route
          element={<CareersLayout />}
          path="careers"
          errorElement={<CareerError />}
        >
          <Route element={<Careers />} loader={CareersLoader} index />
          <Route
            element={<CareerDetail />}
            loader={CareerDetailLoader}
            path=":id"
          />
        </Route>
      </Route>,
    ),
  );

  return <RouterProvider router={router} />;
}
