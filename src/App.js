import { Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavouritesPage from "./pages/Favourites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetupsPage />} />
        <Route path="/favourites" element={<FavouritesPage />} />
        <Route path="/new-meetups" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
