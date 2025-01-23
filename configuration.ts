import { defineConfig as definePlaywrightConfig, devices } from '@playwright/test'
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

export const gitignore = ['extends:bundle', 'test-results']
export const vscode = 'biome'
export const biome = [
  {
    extends: 'epic',
    linter: {
      rules: {
        correctness: {
          useImportExtensions: 'off',
          noUndeclaredDependencies: 'off', // Absolute imports.
        },
      },
    },
    files: {
      ignore: ['rsbuild.config.ts', 'test', 'playwright.config.ts'],
    },
  },
  {
    folder: 'test',
    extends: 'test',
  },
]

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

export const playwright = definePlaywrightConfig({
  testDir: './test',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  use: {
    // biome-ignore lint/style/useNamingConvention: Given by configuration.
    baseURL: 'http://localhost:3000',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'bun rsbuild build && bun rsbuild preview',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
