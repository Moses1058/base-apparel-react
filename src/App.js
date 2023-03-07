import logo from './assets/logo.svg';
import HeroImage from './Images';
import Input from './Input';

import './app.css';

function App() {
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <HeroImage />
      <div className="content">
        <h1><span>WE'RE<br /></span>COMING<br />SOON</h1>
        <p className="caption">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        <Input />
      </div>
    </div>
  );
}

export default App;
