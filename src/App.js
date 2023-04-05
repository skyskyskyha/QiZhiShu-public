import './App.css'
import NavigateBar from "./components/NavigateBar"
import 'font-awesome/css/font-awesome.min.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import CoursePage from "./components/Course/CoursePage"
import CourseInfoPage from "./components/Course/CourseInfoPage"
import ProblemPage from "./components/Problem/ProblemPage"
import { Provider } from 'react-redux'
import store from './store'
import CompetitionPage from "./components/Competition/CompetitionPage"
import Index from './components/Index/Index'
import "./App.scss"
import JudgingStatus from "./components/Course/JudgingStatus"
import ProblemList from "./components/Problem/ProblemList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <NavigateBar/>
          {/*<ErrorPage />*/}
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
                  <Route path="judgingstatus" element={<JudgingStatus/>}/>
                  <Route path="problemlist" element={<ProblemList/>}/>
              </Routes>
          </section>
      </div>
    </Provider>
  );
}

export default App;
