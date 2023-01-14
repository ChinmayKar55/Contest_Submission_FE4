import React, {useEffect, useState} from 'react';
import "./App.css";
import CounterComponent from './CounterComponent';
function App(){
  const[count, setCount] = useState(0);
  useEffect(() => console.log(`The update value is ${count}`), 
  [count])
  return (
   <div className='counter-app'>
   <h1>Counter using React</h1>
   <div className="count">
    <h3>Your Current Count is : <span>{count}</span></h3>
    </div>
    <CounterComponent count={count} setCount={setCount} />
   </div>
  );
}
export default App;  
    
    
   
   


    
     
   
  
  
      
   
  
    
    
    
 

      
             
          
         
   
          
              
              
              
            
        
              
             
             
           
         
          

          
              
              
              
            
        
              
             
             
           
         