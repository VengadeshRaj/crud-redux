import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import Table from "./pages/Table";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}
