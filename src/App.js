import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import {IntlProvider} from 'react-intl';
import Home from "./components/Home";
import Layout from "./components/Layout";
import mn from "./locales/mn.json";
import en from "./locales/en.json";
import Corporate from "./components/Corporate";
import About from "./components/About";

const messages = {
  mn: mn,
  en: en
}

function App() {
  const [locale, setLocale] = useState("mn");

  useEffect(() => {
    const l = localStorage.getItem('language_local');

    if (l) {
      setLocale(l);
    } else {
      localStorage.setItem('language_local', 'mn');
    }
  }, []);

  return (
    <IntlProvider messages={messages[locale]} locale={locale}>
      <Router>
        <Routes>
          <Route element={<Layout setLocale={setLocale} />}>
            <Route path="/" element={<Home />} />
            <Route path="/corporate" element={<Corporate />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;
