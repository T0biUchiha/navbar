import './App.css';
import Logo from './components/Logo';
import Links from './components/Links';
import Button from './components/Button';

function App() {
  const links =["Services","Projects","About"]

  return (
    <div className="App">
      <Logo className="Logo" />
      <Links className="Links" links={links}/>
      <Button className="Button"/>
    </div>
  );
}

export default App;
