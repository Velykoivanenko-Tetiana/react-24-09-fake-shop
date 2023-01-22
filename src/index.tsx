import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './container/App/App'
import {Provider} from 'react-redux'
import {store} from 'redux/store'
// import Content from './Content'
// JSX
// const h1 = <h1>Hello world</h1>
// const h1 = React.createElement('h1',
// {id:'title', classname:'test'},
// 'Hello React'
// )
// type TitleProps = {
//   title:string | number
//   text?:string
// }
// const Title = ({title,text = 'TEST'}:TitleProps) => {
//   return <h1>{text} {title}</h1>
// }
// const App = () => {
//   return(
//     <>
//     <Title text = "Hello" title ={10}/>
//       <Title text = "Hi"title ="React"/>
//       <Title title ="About"/>
// <Content 
// p1="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quod est qui laborum ea fugit quia adipisci explicabo, maiores fuga earum possimus voluptates impedit. Doloribus illo culpa hic totam nisi."
// p2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut quod est qui laborum ea fugit quia adipisci explicabo, maiores fuga earum possimus voluptates impedit. Doloribus illo culpa hic totam nisi."

// />
      
//     </>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <App/>
  </Provider>
  </BrowserRouter>
  </React.StrictMode>)







