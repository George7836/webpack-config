declare module '*.module.scss' {
  interface ClassNames {
    [className: string]: string;
  }
  const classNames: ClassNames
  export = classNames
}
declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
declare module '*.png' {
  const content: string;
  export default content;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}
declare module '*.jpeg' {
  const content: string;
  export default content;
}
declare module '*.svg?url' {
  const content: string;
  export default content;
}
declare module "*.svg" {
  import React from "react";
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}
declare module "*.webp" {
  const content: string;
  export default content;
}
declare module "*.woff" {
  const content: string;
  export default content;
}

declare module "*.woff2" {
  const content: string;
  export default content;
}
