import logo from './logo.svg';
import './App.css';
import NavigateBar from "./components/NavigateBar";
import 'font-awesome/css/font-awesome.min.css';
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import CoursePage from "./components/CoursePage";
import CourseInfoPage from "./components/CourseInfoPage";
import ProblemPage from "./components/ProblemPage";
function App() {
  return (
    <div className="App">
        <NavigateBar/>
        <section className="main-wrap">
            <Routes>
                <Route path="course">
                    <Route index element={<Navigate to={'/course/overview'}/>}/>
                    <Route path="overview" element={<CoursePage/>}/>
                    <Route path="info/:id" element={<CourseInfoPage/>}/>
                </Route>
                <Route path="problem/:id" element={<ProblemPage/>}/>
            </Routes>
        </section>
    </div>
  );
}

export default App;
