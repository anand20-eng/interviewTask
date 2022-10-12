import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import Task1 from './component/form';
import Display from './component/displayFiled';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />} />
          <Route path="/add" element={<Task1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
