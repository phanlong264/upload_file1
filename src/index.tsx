import React from 'react';
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
import type Entity from '@ant-design/cssinjs/es/Cache';
import { renderToString } from 'react-dom/server';

/*const App = () => {
  // SSR Render
  const cache = React.useMemo<Entity>(() => createCache(), []);
  const html = renderToString(
    <StyleProvider cache={cache}>
      <MyApp />
    </StyleProvider>,
  );

  // Grab style from cache
  const styleText = extractStyle(cache);

  // Mix with style
  return `
    <!DOCTYPE html>
    <html>
      <head>
        ${styleText}
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
};

export default App;*/