import "./App.css";
import Navigation from "./component/Navigation/Navigation.jsx";
import ContactHeader from "./component/ContactHeader/ContactHeader.jsx";
import ContactForm from "./component/ContactForm/ContactForm.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
