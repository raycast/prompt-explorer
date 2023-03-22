import {
  CircleIcon,
  CircleProgress100Icon,
  CircleProgress25Icon,
  CircleProgress50Icon,
  CircleProgress75Icon,
} from "../components/Icons";
import { Command } from "../data/prompts";

export default function CreativityIcon({
  creativity,
}: {
  creativity: Command["creativity"];
}) {
  if (creativity === "none") {
    return <CircleIcon />;
  }

  if (creativity === "low") {
    return <CircleProgress25Icon />;
  }

  if (creativity === "medium") {
    return <CircleProgress50Icon />;
  }

  if (creativity === "high") {
    return <CircleProgress75Icon />;
  }

  if (creativity === "maximum") {
    return <CircleProgress100Icon />;
  }
}
