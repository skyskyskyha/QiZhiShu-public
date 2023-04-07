import './App.css'
import NavigateBar from "./components/NavigateBar"
import 'font-awesome/css/font-awesome.min.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import CoursePage from "./components/Course/CoursePage"
import CourseInfoPage from "./components/Course/CourseInfoPage"
import ProblemPage from "./components/Problem/ProblemPage"
import {Provider, useDispatch} from 'react-redux'
import store from './store'
import CompetitionPage from "./components/Competition/CompetitionPage"
import Index from './components/Index/Index'
import "./App.scss"
import JudgingStatus from "./components/Course/JudgingStatus"
import ProblemList from "./components/Problem/ProblemList";
import {GetUserInfo} from "./util";
import {signInUser} from "./api/User";
import {signIn} from "./redux/SignInSlice";

function AutoLogin(){
    const dispatch = useDispatch()
    if (Object.keys(GetUserInfo()).length!==0){
        console.log(GetUserInfo())
        signInUser(GetUserInfo())
            .then((res)=>{
                const token = res.data.Token
                localStorage.setItem("token",token)
                dispatch(signIn({
                }))
            })
    }
}

function App() {
  return (
    <Provider store={store}>
        <AutoLogin/>
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
