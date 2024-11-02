import "./App.css";
import Navigation from "./component/Navigation/Navigation.jsx";
import ContactHeader from "./component/ContactHeader/ContactHeader.jsx";
import ContactForm from "./component/ContactForm/ContactForm.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
    </div>
  );
}

export default App;
