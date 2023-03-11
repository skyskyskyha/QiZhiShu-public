import logo from './logo.svg';
import './App.css';
import NavigateBar from "./components/NavigateBar";
import 'font-awesome/css/font-awesome.min.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import CoursePage from "./components/Course/CoursePage";
import CourseInfoPage from "./components/Course/CourseInfoPage";
import ProblemPage from "./components/Problem/ProblemPage";
import { Provider } from 'react-redux';
import store from './store'
import ErrorPage from './components/ErrorPage';
import CompetitionPage from "./components/Competition/CompetitionPage";
import Index from './components/Index/Index'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <NavigateBar/>
          <ErrorPage />

          <section className="main-wrap">
              <Routes>
                  <Route path="/" element={<Index/>} />

                  <Route path="market">
                      <Route index element={<Navigate to={'/course/overview'}/>}/>
                      <Route path="overview" element={<CoursePage/>}/>
                      <Route path="info/:id" element={<CourseInfoPage/>}/>
                  </Route>

                  <Route path="course">
                      <Route index element={<Navigate to={'/course/overview'}/>}/>
                      <Route path="overview" element={<CoursePage/>}/>
                      <Route path="info/:id" element={<CourseInfoPage/>}/>
                  </Route>

                  <Route path="competition" element={<CompetitionPage/>}/>


                  <Route path="problem/:id" element={<ProblemPage/>}/>

              </Routes>
          </section>
      </div>
    </Provider>
  );
}

export default App;
