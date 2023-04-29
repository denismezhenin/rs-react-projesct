import { PreloadedState } from "@reduxjs/toolkit";
import { ReactNode } from "react";
import { RootState } from "../src/store/index";

interface HTMLProps {
  preloadedState: PreloadedState<RootState>;
  children: ReactNode;
}

export const HTML = ({ children, preloadedState }: HTMLProps) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        {
          <script
            type="module"
            dangerouslySetInnerHTML={{
              __html: `
                import RefreshRuntime from '/@react-refresh';
                RefreshRuntime.injectIntoGlobalHook(window);
                window.$RefreshReg$ = () => {};
                window.$RefreshSig$ = () => (type) => type;
                window.__vite_plugin_react_preamble_installed__ = true;
                `,
            }}
          />
        }
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>React SSR</title>
      </head>
      <body>
        <div id="root">{children}</div>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__PRELOADED_STATE__ = ${JSON.stringify(
              preloadedState
            ).replace(/</g, "\\u003c")}`,
          }}
        />
      </body>
    </html>
  );
};
