import Title from "../Title/Title";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Nav from "../Nav/Nav";
import Presantation from "../Presantation/Presantation";
import Project from "../Project/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <Title />
      <Nav />
      <Presantation />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
