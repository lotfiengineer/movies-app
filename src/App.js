import React from "react";

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";
// context
import UserProvider from "./context";

// styles
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <GlobalStyle />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieId" element={<Movie />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </UserProvider>
  </Router>
);

export default App;
