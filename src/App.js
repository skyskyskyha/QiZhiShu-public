import logo from './logo.svg';
import './App.css';
import NavigateBar from "./components/NavigateBar";
import 'font-awesome/css/font-awesome.min.css';
import {Routes, Route, Link} from 'react-router-dom'
import CoursePage from "./components/CoursePage";
function App() {
  return (
    <div className="App">
        <NavigateBar/>
        <section className="main-wrap">
            <Routes>
                <Route path="/course/*" element={<CoursePage/>}></Route>
            </Routes>
        </section>
    </div>
  );
}

export default App;
