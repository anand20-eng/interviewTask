import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import AddNewPerson from './component/addNewPerson';
import UpdateUser from './component/updateUser';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ParentComponent from './component/parentComponent';
import Board from './component/squareTable/boardComponent';
import Clock from './component/squareTable/clock';
import FavoriteColor from './component/hooks/hook1'
import Car from './component/hooks/hook1';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ParentComponent />} />
          <Route path="/add" element={<AddNewPerson />} />
          <Route path="/update/:id" element={<UpdateUser />} />
          <Route path="/board" element={<Board />} />
          <Route path="/clock" element= {<Clock />} />
          <Route path="/hook" element= {<FavoriteColor />} />
          <Route path="/car" element= {<Car />} />


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
