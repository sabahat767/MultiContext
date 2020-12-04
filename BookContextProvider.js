import React, { Component,createContext,useState } from 'react'
export const BookContext=createContext();

function BookContextProvider(props) {
    const [ books, setbooks] = useState(
       [
       {id:1, name:'HtmlCss',author:'John ducket'},
       {id:2,name:'React',author:'john ducket'}, 
       {id:2,name:'JS',author:'Mark'}
    ]
)
    return (
        <BookContext.Provider value={{books,setbooks}}>
                {props.children}
             </BookContext.Provider>
    )
}

export default BookContextProvider
//***********same kam class s ***********
// export class BookContextProvider extends Component {
//     state={
//         // isLight:false,
//         // light:{text:'black',bg:'white'},
//         // dark:{text:'white',bg:'black'}
//         haveBooks: true,
//         books:[
//             {name:'HtmlCss',author:'John ducket'},
//             {name:'React',author:'john ducket'}, 
//             {name:'JS',author:'Mark'}
//         ]
//     }
//     render() {
//         return (
//             <BookContext.Provider value={{...this.state}}>
//                {this.props.children}
//             </BookContext.Provider>
//         )
//     }
// }

// export default BookContextProvider
