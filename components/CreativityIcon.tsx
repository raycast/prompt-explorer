import {
  Circle,
  CircleProgress25,
  CircleProgress50,
  CircleProgress75,
  CircleProgress100,
} from "@raycast/icons";
import { Command } from "../data/prompts";

export default function CreativityIcon({
  creativity,
}: {
  creativity: Command["creativity"];
}) {
  if (creativity === "none") {
    return <Circle />;
  }

  if (creativity === "low") {
    return <CircleProgress25 />;
  }

  if (creativity === "medium") {
    return <CircleProgress50 />;
  }

  if (creativity === "high") {
    return <CircleProgress75 />;
  }

  if (creativity === "maximum") {
    return <CircleProgress100 />;
  }
}
