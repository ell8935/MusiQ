// import { Provider } from "react-redux";
// import "./App.css";
// import MainScreen from "./modules/main/screens/MainScreen";
// import { store } from "./shared/hooks/redux/store";
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
import { AuthenticatedApp } from "./modules/main/components/AuthenticatedApp";
import { UnauthenticatedApp } from "./modules/main/components/UnauthenticatedApp";
import { useAuth } from "./shared/hooks/useAuth";

function App() {
  const { user } = useAuth();

  return (
    <div className="container">
      <h1>💬 Chat Room</h1>
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
