import './App.css';
import { Question1 } from './Task1/Question1';
import { Question2 } from './Task2/Question2';
import { Question3 } from './Task3/Question3';
import { createContext } from 'react'
import { ComponentA } from './Task4/Components/ComponentA';
import { ComponentB } from './Task4/Components/ComponentB';
import { ComponentC } from './Task4/Components/ComponentC';
import { ComponentD } from './Task4/Components/ComponentD';
import { Question4 } from './Task4/Question4';
import { Question5 } from './Task5/Question5';
import { Question6 } from './Task6/Question6';
import { Question7 } from './Task7/Question7';
export const UserContext = createContext();

function App() {
  const userName = "Muddassir"
  return (
    <>
    <Question1/>
    <hr></hr>
    <Question2/>
    <hr></hr>
    <Question3/>
    <hr></hr>
    <UserContext.Provider value={userName}>
      <Question4/>
      <ComponentA/>
      <ComponentB/>
      <ComponentC/>
      <ComponentD/>
    </UserContext.Provider>
    <hr></hr>
    <Question5/>
    <hr></hr>
    <Question6/>
    <hr></hr>
    <Question7/>
    </>
      
  );
}

export default App;
