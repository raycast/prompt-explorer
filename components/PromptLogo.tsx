import { Icon } from "./Icon";
import styles from "./PromptLogo.module.css";

export function PromptLogo() {
  return (
    <span className={styles.logo}>
      <Icon.Stars data-icon="stars" />
      <Icon.RaycastLogoNeg data-icon="raycast" />
    </span>
  );
}
