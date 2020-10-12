export const imports = {
  'src/Button/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-button-index" */ 'src/Button/index.mdx'
    ),
}
