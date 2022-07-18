import "./App.css";
import Dashboard from "./pages/dashboard/dashboard.page";
import { Routes, Route } from "react-router-dom";
const Temp =()=>{
  return(<h1>hello</h1>)
}
const App = () => {
  return (
    <Routes>
      <Route to="/">
        <Route index element={<Dashboard />}></Route>
        <Route path="/:module_name" element={<Temp />}/>
      </Route>
    </Routes>
  );
};

export default App;
