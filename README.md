# Steps Process
<!-- description -->
Steps Process is a simple library to create a process with steps.

## Installation

```bash
npm install steps-process
```

## Usage

> ⚠ You may have to add a container for this package cause it's depends on the parent width.

### VueJs

```html
<template>
  <div class='container'>
      <StepsProgress :current="2" cercleActiveColor="#42b883" 
      cercleHeight="30px"
      progressColor="#656cff"
      otherCercleColor="#656cff" cercleNotActiveColor="#646cff" 
      cercleWidth="30px" 
      backgroundHeight="10px" 
      :end="5"
      backgroundColor="#42b883">
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
> use for set current counter number.```2```

 ```end:Number```
> use for the end point number.like ```2```

 ```cercleActiveColor:String```
> use for selected cercle Color. most have value and unit like ```'#42b883'```

 ```otherCercleColor:String```
> use for current cercle Color. most have value and unit like ```'#42b883'```

 ```cercleNotActiveColor:String```
> use for not selected cercle Color. most have value and unit like ```'#42b883'```

 ```backgroundColor:String```
> use for progress background line Color. most have value and unit like ```'#42b883'```

 ```progressColor:String```
> use for progress line Color. most have value and unit like ```'#42b883'```

 ```backgroundHeight:String```
> use progress line height. most have value and unit like ```'8px'```

 ```cercleHeight:String```
> use cercle height. most have value and unit like ```'20px'```

 ```cercleWidth:String```
> use cercle width. most have value and unit like ```'20px'```

## Example

<!-- gif-->
![Exampls](./Files/videos/exampels.gif)
