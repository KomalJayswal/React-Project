import Button from "../Button/Button";
import ContactHeader from "../ContactHeader/ContactHeader";
import styles from "./Contact.module.css";

const ContactForm = () => {
  console.log(styles);

  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <ContactHeader/>
        <Button/>
      </div>
      <div className={styles.contact_image}></div>
    </section>
  );
};

export default ContactForm;
