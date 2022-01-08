import Login from "./components/login/login";

function App({authService}) {
  return (
    <main>
      <Login authService={authService} />
    </main>
  )
}

export default App;
