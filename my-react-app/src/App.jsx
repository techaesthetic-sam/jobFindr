import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Landing, Dashboard, Error, Register } from "./pages";
function App() {
  return (
    <BrowserRouter>
      {/* <Landing /> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
