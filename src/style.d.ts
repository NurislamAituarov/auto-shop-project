declare module '*.scss' {
  const value: Record<string, string>;
  export default value;
}
declare module '*.svg?inline' {
  const content: any;
  export default content;
}

declare module '*.svg' {
  const content: any;
  export default content;
}
declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
