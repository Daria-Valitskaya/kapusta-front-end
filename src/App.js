import "./App.module.css";

import Container from "./Сomponents/Container";
import Header from "./Сomponents/Header";
import ContainerTabs from "./Сomponents/ContainerTabs";

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
