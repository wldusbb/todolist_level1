import React from 'react';
import Header from './components/header/Header';
import Todo from './components/todo/Todo';
import Form from './components/form/Form';

const App = () => {
        // input의 갯수가 늘어날때마다 state와 handler가 같이 증가한다.
    // const [title, setTitle] = useState("");
    // const [description,setDescription] = useState("");
    // const onChangeTitleHandler = (event) => {
    //     setTitle(event.target.value);
    //   };
    // const onChangeDescriptionHandler =(event) => {
    //     setDescription(event.target.value);
    // };  
    
    

   return(
     <>
        <Header />
        <Todo />
        <Form />  
     </>
       
   )}
 

export default App;