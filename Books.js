import React,{useContext} from 'react'
import {ThemeContext} from '../Context/ThemeContextProvider'
//import {FunctionContext} from '../Context/FunctionContextApi'
import {BookContext} from '../Context/BookContextProvider'

function Books() {
    const {isLight,light,dark}=useContext(ThemeContext);//destructuring the arrays of objects
    const {books,setbooks} = useContext(BookContext);
    const nextId=books.length+1;
     const ui=isLight?light:dark;
   const abc=books;
    //const abc=haveBooks? books: []
     // const [bookList,setbooks]=useState([
    //     {name:'HtmlCss',author:'John ducket'},
    //     {name:'React',author:'john ducket'}, 
    //     {name:'JS',author:'Mark'}
    // ])
    console.log('isLight')
    return (
      
        <div style={{backgroundColor:ui.bg,color:ui.text}}>
            {/* <ul>
                {bookList.map((item)=>(
                    <li key={item.name}>{` ${item.name} is written by ${item.author}`}</li>
                ))}
            </ul> */}
            <button onClick={()=>setbooks([...books,{name:'abc',author:'xyz',id:{nextId}}])}>Add Book</button>
            <ul>
                {abc.map((item)=>(
                    <li key={item.id}>{` ${item.name} is written by ${item.author}`}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default Books
