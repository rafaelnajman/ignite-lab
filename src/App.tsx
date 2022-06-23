import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/apollo";
import { Router } from "./Router";
import { NavContextProvider, NavContext } from "./Context";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavContextProvider>
          <Router />
        </NavContextProvider>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
