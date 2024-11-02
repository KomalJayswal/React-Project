import styles from "./FormControl.module.css";

const FormControl = (props) => {
  console.log(props);

  return (
    <div className={styles.form_control}>
      <label htmlFor="name">{props.text}</label>
      <input type="text" name="name" />
    </div>
  );
};

export default FormControl;
