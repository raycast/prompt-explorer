import { RaycastLogoIcon, StarsIcon } from "./Icons";

import styles from "./PromptLogo.module.css";

export function PromptLogo() {
  return (
    <span className={styles.logo}>
      <StarsIcon size={16} />
      <RaycastLogoIcon size={16} />
    </span>
  );
}
