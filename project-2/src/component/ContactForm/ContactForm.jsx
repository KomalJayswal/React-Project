import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button";
import styles from "./Contact.module.css";
import FormControl from "../FormControl/FormControl";

const ContactForm = () => {
  console.log(styles);

  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <div>
          <Button
            isOutline={true}
            text="VIA EMAIL FORM"
            icon={<HiMail fontSize="24px" />}
          />
        </div>

        <form>
          <FormControl text="Name" />
        </form>

        <form>
          <FormControl text="E-Mail" />
        </form>

        <form>
          <FormControl text="TEXT" />
        </form>

        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button text="SUBMIT BUTTON" />
        </div>
      </div>

      <div className={styles.contact_image}>
        <img src="images/service.svg" alt="contact image" />
      </div>
    </section>
  );
};

export default ContactForm;
