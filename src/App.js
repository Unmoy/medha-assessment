import "./App.css";
import Header from "./components/Header/Header";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import Share from "./components/Share/Share";

function App() {
  return (
    <div className="homepage">
      <Header />
      <ProfileCard />
      <div className="share_page">
        <Share />
      </div>
    </div>
  );
}

export default App;
