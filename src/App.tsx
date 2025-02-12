import { HomeScreen } from "./components/views";
import { AppContextProvider } from "./context/Provider";

function App() {
  return (
    <AppContextProvider>
      <HomeScreen />
    </AppContextProvider>
  );
}

export default App;
