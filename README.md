[![minified-gzipped-size](https://img.shields.io/bundlephobia/minzip/cursor-flashlight.svg)](https://bundlephobia.com/result?p=cursor-flashlight)
# `cursor-flashlight` 🔦

A tiny library to add flashlight effect to your website 🔦

[Try it on CodeSandbox](https://codesandbox.io/s/cursor-flashlight-demo-w8o5t?file=/src/App.js)

![demo](assets/demo.gif)

> Note:
> The effect won't show on devices without mouse (e.g.: smartphones)

## Usage

Simply import the module and enable the flashlight with the size of the flashlight circle.

```ts
import { enable } from 'cursor-flashlight';

enable({ size: '15vmax' });
```

### Example with React

```tsx
import React from 'react';
import {
  enable,
  disable,
  isEnabled,
} from 'cursor-flashlight';

const App = () => {
  const handleToggleFlashlight = () => {
    if (isEnabled()) {
      disable()
    } else {
      enable({ size: '15vmax' })
    }
  }

  return (
    <div>
      Lorem ipsum stuffs
      <button onClick={handleToggleFlashlight}>Toggle flashlight</button>
    </div>
  )
};
```
