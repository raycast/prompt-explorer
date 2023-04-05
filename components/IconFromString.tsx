import { StarsIcon } from "@raycast/icons";
import React, { Suspense, lazy } from "react";

function iconNameToComponentName(iconName) {
  const parts = iconName.split("-");
  const componentName = parts
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");

  return componentName.replace(/16/, "");
}

type IconFromStringProps = {
  name: string;
};

function IconFromString({ name }: IconFromStringProps) {
  const IconComponent = lazy(async () => {
    const iconsModule = await import("@raycast/icons");
    const component = iconsModule[iconNameToComponentName(name)];
    return { default: component ? component : StarsIcon };
  });

  return (
    <Suspense>
      <IconComponent />
    </Suspense>
  );
}

export default IconFromString;
