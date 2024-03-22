# Sanso

[![GitHub CI](https://github.com/rnmeow/sanso/actions/workflows/ci/badge.svg)](https://github.com/rnmeow/sanso/actions?query=workflow%3ACI)
[![NPM Version](https://badgen.net/npm/v/sanso)](https://www.npmjs.com/package/sanso)
[![Install Size](https://packagephobia.com/badge?p=sanso)](https://packagephobia.com/result?p=sanso)

> Sanso is required for Hono, but we do not use require.

This package provides useful utils, helpers, middlewares (or more) for Hono.

Note: Under development.  
Be careful of possible breaking changes until ver. 1 released.

## Usage

```ts
import { trimTrailingSlash } from 'sanso'

const app = new Hono()

app.use(trimTrailingSlash())

// routes ...
```

When the package is considered complete, the document will be expanded.

## License

(C) 2024, Yu-huan Kuo <touch@rnmeow.com>

Licensed under MIT.
