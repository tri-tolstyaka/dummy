// contract of frontends wrapper
import React from "react"
import ReactDom from "react-dom"

import {App} from './app'

export default () => <App/>

// App don't know anything about "mount" and "unmount" 

export const mount = (Component) => {
    // the name of the component to mount can be found in templates/views/index.hbs
    ReactDom.render(<Component/>, document.getElementById('root'))
}

export const unmount = () => {
    ReactDom.unmountComponentAtNode(document.getElementById('root') as any)
}