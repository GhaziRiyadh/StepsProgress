import { createApp } from 'vue'
import App from './App.vue'

const app = createApp({})

app.use(myPlugin, { option1: 'foo', option2: 'bar' })

const myPlugin = {
    install(app, options) {
        // 1. add global method or property
        app.myGlobalMethod = function () {
            // some logic ...
        }

        // 2. add a global asset
        app.directive('my-directive', {
            // some logic ...
        })

        // 3. inject some component options
        app.mixin({
            // some logic ...
        })

        // 4. add an instance method
        app.config.globalProperties.$myMethod = function (methodOptions) {
            // some logic ...
        }
    }
}
