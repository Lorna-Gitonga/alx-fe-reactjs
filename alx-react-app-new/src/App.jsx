import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <UserProfile
        name="Jane Doe"
        age={25}
        bio="A passionate traveler and React learner."
      />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
