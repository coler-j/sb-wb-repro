declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.gif";
declare module "*.png";
declare module "*.jpeg";
declare module "*.jpg";

declare module "ckeditor4";

declare module "*.mdx" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module "request";
