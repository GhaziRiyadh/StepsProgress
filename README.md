# Steps Process
<!-- description -->
Steps Process is a simple library to create a process with steps.

## Installation

```bash
npm i steps-progress
```

## Usage

> ⚠ You may have to add a container for this package cause it's depends on the parent width.

### VueJs

```html
<template>
  <div class='container'>
      <StepsProgress circleRadius="9999px" :current="count" height="30px" :end="5" backgroundColor="#42b883">
          <!-- use this for selected element -->
        <template #selected>
          <span>S</span>
        </template>
          <!-- use this for not selected element -->
        <template #not-selected>
          <span>N</span>
        </template>
          <!-- use this for current -->
        <template #current>
          <span>C</span>
        </template>
    </StepsProgress>
  </div>
</template>
```

```css
.container {
  width: 500px;
}
```

```js
import StepsProgress from 'steps-process'
export default{
    components: {
        StepsProgress
    },
    ...
}
```

## Props

```current:Number```  
> Use for set current counter number.```2```

 ```end:Number```
> Use for the end point number.like ```2```

 ```backgroundColor:String```
> Use for progress background line Color. most have value and unit like ```'#42b883'```

 ```progressColor:String```
> Use for progress line Color default value is ```'#fff'```. most have value and unit like ```'#42b883'```

 ```height:String```
> Use for circle height. most have value and unit like ```'20px'```

 ```circleRadius:String```
> Use for circle radius default value is ```'9999px'```. most have value and unit like ```'9999px'```

## Github

### Source Code

> [github.com](https://github.com/GhaziRiyadh/StepsProgress)

### Issues

> [github.com](https://github.com/GhaziRiyadh/StepsProgress/issues)

## Example

<!-- gif-->
![Exampls](./Files/videos/exampels.gif)

## Issue

### Error

```Unhandled error during execution of render function error```

### Solosion

> If you use vite you can add this code for solotion to vite.config.js

```js
import path from 'path'
...

export default defineConfig({
  plugins: [vue()],
  ...
  resolve: {
    alias: {
      vue: path.resolve("./node_modules/vue"),
      ...
    },
  }
  ...
})
```

> [solotion in stackoverflow.com](https://stackoverflow.com/questions/72403717/using-vue-slots-in-library-gives-currentrenderinginstance-is-null)
