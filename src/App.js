// import { Provider } from "react-redux";
// import "./App.css";
// import MainScreen from "./modules/main/screens/MainScreen";
// import { useAuth } from "./shared/hooks/useAuth";

// function App() {
//   const { user } = useAuth();

//   return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
//   return (
//     <Provider store={store}>
//       <MainScreen />
//     </Provider>
//   );
// }

// export default App;

import "./App.css";
import { Provider } from "react-redux";
import { useAuth } from "./shared/hooks/useAuth";
import { AuthenticatedApp } from "./modules/main/components/AuthenticatedApp/AuthenticatedApp";
import { UnauthenticatedApp } from "./modules/main/components/UnauthenticatedApp/UnauthenticatedApp";
import { store } from "./shared/redux/store";

function App() {
  const { user } = useAuth();

  return (
    <Provider store={store}>
      <div className="container">
        <h1>💬 Chat Room</h1>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </div>
    </Provider>
  );
}

export default App;
