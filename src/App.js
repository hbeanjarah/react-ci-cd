import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="form-container">
        <p>CircleCi CI/CD testing</p>
        <input name="username" type="text" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <button type="submit">Login</button>
      </div>
    </div>
  )
}

export default App;
