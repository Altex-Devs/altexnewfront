import { useState, useEffect } from "react";
import {
  useNavigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import {IntlProvider} from 'react-intl';
import Home from "./components/Home";
import Layout from "./components/Layout";
import mn from "./locales/mn.json";
import en from "./locales/en.json";
import Corporate from "./components/Corporate";
import About from "./components/About";
import Team from "./components/Team";
import Howto from "./components/Howto";
import TermsOfUse from "./components/TermsOfUse";
import CryptoBasicsTerms from "./components/CryptoBasicsTerms";
import Fee from "./components/Fee";
import Feedback from "./components/Feedback";
import NotFound from "./components/NotFound";
import FAQ from "./components/FAQ";
import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post";
import PrivacyPolicy from "./components/PrivacyPolicy";
import PostEdit from "./components/Posts/PostEdit";
import Auth from "./components/Auth";
import PostsAdmin from "./components/Posts/PostsAdmin";
import Admin from "./components/Admin";

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
            <Route path="/team" element={<Team />} />
            <Route path="/howto" element={<Howto />} />
            <Route path="/termsofuse" element={<TermsOfUse />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/cryptoterms" element={<CryptoBasicsTerms />} />
            <Route path="/fee" element={<Fee />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/posts/:type" element={<Posts />} />
            <Route path="/posts/:type/:postId" element={<Post />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
            <Route path="/admin/posts/:type" element={<RequireAuth><PostsAdmin /></RequireAuth>} />
            <Route path="/admin/posts/:type/create" element={<RequireAuth><PostEdit /></RequireAuth>} />
            <Route path="/admin/posts/:type/edit/:postId" element={<RequireAuth><PostEdit /></RequireAuth>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </IntlProvider>
  );
}

export default App;

function RequireAuth({ children }) {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) navigate("/auth");
  }, [user, loading, navigate]);

  return user && children;
}