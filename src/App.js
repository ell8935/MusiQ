import { Provider } from "react-redux";
import "./App.css";
import MainScreen from "./modules/main/screens/MainScreen";
import { store } from "./shared/hooks/redux/store";

function App() {
  return (
    <Provider store={store}>
      <MainScreen />;
    </Provider>
  );
}

export default App;
