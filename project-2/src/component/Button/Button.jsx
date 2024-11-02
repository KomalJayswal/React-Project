import styles from "./Button.module.css";
import { MdMessage } from "react-icons/md";

const Button = () => {
  console.log(styles);

  return (
    <button className={styles.primary_btn}>
       <MdMessage fontSize="24px"/> VIA SUPPORT CHAT
    </button>
  );
};

export default Button;
