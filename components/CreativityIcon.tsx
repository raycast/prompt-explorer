import * as Tooltip from "@radix-ui/react-tooltip";

import {
  CircleIcon,
  CircleProgress25Icon,
  CircleProgress50Icon,
  CircleProgress75Icon,
  CircleProgress100Icon,
} from "@raycast/icons";
import { Prompt } from "../data/prompts";

import styles from "./CreativityIcon.module.css";

export default function CreativityIcon({
  creativity,
}: {
  creativity: Prompt["creativity"];
}) {
  let component = null;
  if (creativity === "none") {
    component = <CircleIcon />;
  }

  if (creativity === "low") {
    component = <CircleProgress25Icon />;
  }

  if (creativity === "medium") {
    component = <CircleProgress50Icon />;
  }

  if (creativity === "high") {
    component = <CircleProgress75Icon />;
  }

  if (creativity === "maximum") {
    component = <CircleProgress100Icon />;
  }

  const creativityText = {
    none: "No creativity",
    low: "Low creativity",
    medium: "Medium creativity",
    high: "High creativity",
    maximum: "Maximum creativity",
  };

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild>
          <button className={styles.button}>{component}</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className={styles.tooltip} sideOffset={5}>
            {creativityText[creativity]}
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
