import { defineConfig } from '@rsbuild/core'
import { pluginReact } from '@rsbuild/plugin-react'

export const rsbuild = defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: './index.tsx',
    },
    define: {
      'process.env.PUBLIC_URL': '"/"',
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    },
  },
  html: {
    title: 'EPIC Framework',
    template: './index.html',
  },
  output: {
    assetPrefix: '/epic-framework/',
  },
  tools: {
    rspack: {
      resolve: {
        alias: {
          react: 'epic-jsx',
          'react/jsx-runtime': 'epic-jsx',
          'react/jsx-dev-runtime': 'epic-jsx',
        },
      },
    },
  },
})

export const gitignore = 'bundle'
export const vscode = 'biome'
export const biome = {
  extends: 'recommended',
  linter: {
    rules: {
      correctness: {
        useImportExtensions: 'off',
        noUndeclaredDependencies: 'off', // Absolute imports.
      },
    },
  },
  files: {
    ignore: ['rsbuild.config.ts'],
  },
}

export const typescript = {
  extends: 'web',
  compilerOptions: {
    paths: {
      react: ['./node_modules/epic-jsx'],
      'react/jsx-runtime': ['./node_modules/epic-jsx'],
      'react/jsx-dev-runtime': ['./node_modules/epic-jsx'],
    },
  },
  files: ['index.tsx'],
}
