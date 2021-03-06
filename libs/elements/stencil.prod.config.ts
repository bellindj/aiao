import { resolve } from 'path';

import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'aiao-elements',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
      dir: 'lib',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'docs-vscode',
      file: resolve(__dirname, 'lib/html.html-data.json'),
      sourceCodeBaseUrl: 'https://github.com/aiao-io/aiao/tree/master/libs/elements'
    },
    angularOutputTarget({
      componentCorePackage: '@aiao/elements',
      directivesProxyFile: resolve(__dirname, '../elements-angular/src/lib/directives/proxies.ts'),
      directivesUtilsFile: resolve(__dirname, '../elements-angular/src/lib/directives/proxies-utils.ts'),
      directivesArrayFile: resolve(__dirname, '../elements-angular/src/lib/directives/proxies-list.txt'),
      excludeComponents: []
    }),
    reactOutputTarget({
      componentCorePackage: '@aiao/elements',
      proxiesFile: resolve(__dirname, '../elements-react/src/lib/proxies.ts')
    })
    // {
    //   type: 'docs-readme'
    // }
  ],
  copy: [],
  bundles: [
    { components: ['aiao-code-editor'] },
    { components: ['aiao-elements-editor', 'aiao-elements-editor-preview'] },
    { components: ['aiao-elements-form'] },
    { components: ['aiao-elements-view'] },
    { components: ['aiao-img'] }
  ],
  tsconfig: 'tsconfig.json',
  globalScript: 'src/lib/global/global.ts'
};
