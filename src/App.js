import './App.css';

function App() {
  return (
    <div className="App">
      <div id="marquee">
    <div>
        <span>I LOVE U JAANU</span>
    </div>
    <div aria-hidden="true">
        <span style={{fontcolor:"red"}}>I M SORRY JAANU</span>
    </div>
  <div aria-hidden="true">
        <span>I LOVE U JAANU</span>
    </div>
</div>
    </div>
  );
}

export default App;
