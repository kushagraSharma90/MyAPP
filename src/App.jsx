import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import  { DataTableDemo } from "./pages/DataTableDemo"


function App() {
  return (
   
<div>
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/datatable" element={<DataTableDemo />} />
        

      </Routes>
    </Layout>
  </Router>
</div>
   
  )
}

export default App

