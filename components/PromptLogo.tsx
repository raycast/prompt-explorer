import { Icon, RaycastLogoIcon } from "./Icon";
import styles from "./PromptLogo.module.css";

export function PromptLogo() {
  return (
    <span className={styles.logo}>
      <Icon.Stars />
      <RaycastLogoIcon size={16} />
    </span>
  );
}
