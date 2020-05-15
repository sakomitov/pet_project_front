declare namespace HeaderStyleModuleCssModule {
  export interface IHeaderStyleModuleCss {
    primaryHeader: string;
  }
}

declare const HeaderStyleModuleCssModule: HeaderStyleModuleCssModule.IHeaderStyleModuleCss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: HeaderStyleModuleCssModule.IHeaderStyleModuleCss;
};

export = HeaderStyleModuleCssModule;
