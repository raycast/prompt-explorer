import { Icon } from "./Icon";
import { Command } from "../data/prompts";

export default function CreativityIcon({
  creativity,
}: {
  creativity: Command["creativity"];
}) {
  if (creativity === "none") {
    return <Icon.Circle />;
  }

  if (creativity === "low") {
    return <Icon.CircleProgress25 />;
  }

  if (creativity === "medium") {
    return <Icon.CircleProgress50 />;
  }

  if (creativity === "high") {
    return <Icon.CircleProgress75 />;
  }

  if (creativity === "maximum") {
    return <Icon.CircleProgress100 />;
  }
}
