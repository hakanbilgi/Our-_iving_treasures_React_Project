
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import data from "./assest/data"

function App() {
  return (
    <>
      <Header />
      <Main data={data} />
      <Footer />
    </>
  );
}

export default App;
