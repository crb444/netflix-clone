
import './App.css';
import Row from './Row'
import requests from './DatabaseRoutes'
import Highlight from './Highlight'
import Banner from './Banner' 


function App() {
  return (
    <div className="App">
      <Banner />
      <Highlight fetch={requests.fetchMostPopular} />
      <Row name="Most Popular" fetch={requests.fetchMostPopular} isImportant/>
      <Row name="Action" fetch={requests.fetchAction} />
      <Row name="Adventure" fetch={requests.fetchAdventure} />
      <Row name="Animation" fetch={requests.fetchAnimation} />
      <Row name="Comedy" fetch={requests.fetchComedy} />
      <Row name="Crime" fetch={requests.fetchCrime} />
      <Row name="Documentary" fetch={requests.fetchDocumentary} />
      <Row name="Drama" fetch={requests.fetchDrama} />
      <Row name="Family" fetch={requests.fetchFamily} />
      <Row name="Fantasy" fetch={requests.fetchFantasy} />
      <Row name="Horror" fetch={requests.fetchHorror} />
      <Row name="Sci-Fi" fetch={requests.fetchScifi} />
      <Row name="Romance" fetch={requests.fetchRomance} />
    </div>
  );
}

export default App;


