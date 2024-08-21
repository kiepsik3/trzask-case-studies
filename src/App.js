import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CaseStudies from "./pages/caseStudies/CaseStudies";
import CaseStudyDetails from "./pages/caseStudyDetails/CaseStudyDetails";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import useFetch from "./hooks/useFetch";
import { Helmet } from "react-helmet";
import { Newsletter } from "./components/Newsletter/Newsletter";

const domain = window.location.origin;

function App() {
  const { data: caseStudies } = useFetch(`${domain}/case-studies-pl.json`);

  return (
    <div className="App">
      <Helmet>
        <title>TRZ / CASE STUDIES</title>
        <meta
          name="description"
          content="Profesjonalne studio animacji specjalizujące się w reklamie internetowej. Tworzymy interaktywne rich media, grywalne playable ads, gry na landing page'ach, reklamy video oraz spektakularne animacje wszelkiej maści."
        />
        <meta name="keywords" content={caseStudies?.keywords?.join(", ")} />
        <link rel="canonical" href={window.location.href} />
      </Helmet>
      <Router>
        <Header menu={caseStudies?.menu} />
        <ScrollToTop />
        <Switch>
          {caseStudies && (
            <Route
              path={"/pl/case-studies"}
              exact
              render={() => <CaseStudies {...caseStudies} />}
            />
          )}
          {caseStudies && (
            <Route
              path={`/pl/case-studies/:slug`}
              render={() => <CaseStudyDetails {...caseStudies} />}
            />
          )}
        </Switch>
      </Router>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
