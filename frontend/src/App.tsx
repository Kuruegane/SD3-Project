import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <> 
      <NavBar />
      <div className="container">
        <h1 className="text-primary">Olá Todos !</h1>
        <DataTable />
      </div>
      <Footer />
    </> /*Fim Fragmentação*/
  );
}

export default App;
