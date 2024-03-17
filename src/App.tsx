import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  return (
    <div className="min-h-svh bg-neutral-100/20">
      <Header />
      <div className="h-20 bg-white" />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
