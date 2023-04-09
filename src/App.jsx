import React,{lazy,Suspense} from 'react'
import {Route,Routes,Link} from 'react-router-dom'
const Home = lazy(()=>import(/* webpackChunkName:"home" */"./pages/Home"))
const About = lazy(()=>import(/* webpackChunkName:"about" */"./pages/About/"))
function App(){
    return (
        <div>
            <h1>APP---</h1>
            <ul>
                <li><Link to="/home">home</Link></li>    
                <li><Link to="/about">about</Link></li>    
            </ul>  
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path='/home' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App