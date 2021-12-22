declare const __DEV__: boolean

declare module '*.vue' {
  const component: any
  export default component
}

declare interface Window {
  onesConfig: Record<string, unknown>
  buildOnesProcessEnv: Record<string, unknown>
}
