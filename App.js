import logo from './logo.svg';
import './App.css';
import ThemeContextProvider from './Context/ThemeContextProvider';
import BookContextProvider from './Context/BookContextProvider';
import Books from './Components/Books'
import FunctionContextApi from './Context/FunctionContextApi';

function App() {
  return (
   <ThemeContextProvider>{/*Class context */}
     
     <BookContextProvider>  {/*function context */}
    
     <Books/>

     </BookContextProvider>
  
   </ThemeContextProvider>


 



  // <BookContextProvider>
  //   <RenderBookContext/>
  // </BookContextProvider>

  );
}

export default App;
