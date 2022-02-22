import "./App.css";
import { Home } from "./components/Home";
import { DarkModeContext } from "./context/DarkModeContext";
import { PokemonApi } from "./components/PokemonApi";

const App = () => {
  return (
    <DarkModeContext>
      {/* <Home /> */}
      <PokemonApi />
    </DarkModeContext>
  );
};

export default App;
