import logo from './assets/logo.svg';
import HeroImage from './images';
function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <HeroImage style={styles.desktop} />
      <h1>First
      </h1>
    </div>
  );
}

const styles = {
  desktop: {
    display: 'none',
    '@media (min-width: 1440px)': {
      display: 'block',
    }
  }
};
export default App;
