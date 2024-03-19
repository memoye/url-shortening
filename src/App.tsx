import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-svh bg-neutral-100/20 max-w-[1440px] mx-auto">
      <Toaster
        toastOptions={{
          className: "text-xs bg-accent text-white items-start",
        }}
      />
      <Header />
      <div className="h-20 bg-white" />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
