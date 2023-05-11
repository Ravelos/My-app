import styles from "./ProjectForm.module.css";
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Project's name"
        name="name"
        placeholder="Type project's name"
      />
      <Input
        type="number"
        text="Project's estimated budget"
        name="budget"
        placeholder="Type project's total budget"
      />
      <Select name="category id" text="Select a category" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;
