import "./App.module.css";

import Container from "./Components/Container";
import Header from "./Components/Header";
import ContainerTabs from "./Components/ContainerTabs/ContainerTabs";

function App() {
  return (

    <Container>
      <div className="App">
        <Header />
      <ContainerTabs />
    </div>
    </Container>

  );
}

export default App;
