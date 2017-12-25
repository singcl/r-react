import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

// import jsx后缀不能省略
import Author from '@/components/author/index.jsx'
import Category from '@/components/category/index.jsx'
import Book from '@/components/book/index.jsx'

import '@/styles/index.scss'
// 和引入js文件一样
import _header from '@/styles/header.scss'
import _menu from '@/styles/menu.scss'

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <div> Hello World </div>
//         <div>hello China</div>
//       </div>
//     )
//   }
// }
function App() {
  return (
    <Router>
      <div>
        {/* 和使用对象一样使用类名 */}
        <div className={_header.container}>
          <Link to="/author">作者</Link>
          <Link to="/category">分类</Link>
          <Link to="/book">书籍</Link>
        </div>
        {/* eslint-disable dot-notation */}
        <div className={_menu['container']}>
          <Route path="/author" component={Author} />
          <Route path="/category" component={Category} />
          <Route path="/book" component={Book} />
        </div>
      </div>
    </Router>
  )
}

export default App
