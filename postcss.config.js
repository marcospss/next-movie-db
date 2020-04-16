const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: [
      './libs/**/*.ts',
      './models/**/*.ts',
      './services/**/*.ts',
      './settings/**/*.ts',
      './components/**/*.js',
      './pages/**/*.js',
      './components/**/*.ts',
      './pages/**/*.ts',
      './components/**/*.tsx',
      './pages/**/*.tsx',
    ],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
