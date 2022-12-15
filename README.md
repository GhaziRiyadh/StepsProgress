# Steps Process
<!-- description -->
Steps Process is a simple library to create a process with steps.

## Installation

```bash
npm install steps-process
```

## Usage

> Wor

### VueJs

```html
<template>
 <StepsProgress :current="2" cercleActiveColor="#42b883" progressHeight="8px" cercleHeight="30px"
      otherCercleColor="#656cff" cercleNotActiveColor="#646cff" cercleWidth="30px" backgroundHeight="10px" :end="5"
      backgroundColor="#42b883">
        <!-- use this for selected element -->
      <template #selected>
        <span>S</span>
      </template>
        <!-- use this for not selected element -->
      <template #not-selected>
        <span>O</span>
      </template>
        <!-- use this for current -->
      <template #current>
        <span>C</span>
      </template>
</StepsProgress>
</template>
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

## Example

<!-- video-->
[![Example](https://img.youtube.com/vi/1Q2Q3Q4Q5Q6/0.jpg)](https://www.youtube.com/watch?v=1Q2Q3Q4Q5Q6)
