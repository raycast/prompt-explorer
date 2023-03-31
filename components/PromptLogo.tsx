import { Stars, RaycastLogoNeg } from "@raycast/icons";
import styles from "./PromptLogo.module.css";

export function PromptLogo() {
  return (
    <span className={styles.logo}>
      <Stars data-icon="stars" />
      <RaycastLogoNeg data-icon="raycast" />
    </span>
  );
}
