import React, {useState} from 'react'

function Character({ char, planets }) { 
  // ❗ Add the props

  const { id, name, homeworld } = char;
  
  
  
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const[showHomeworld, setShowHomeworld] = useState(false)
  
  //find the characters homeworld that matches with the corresponding planet id
 
  
  const characterHomeworld =
  planets && planets.find((planet) => planet.id === homeworld);
const actualHomeworldName = characterHomeworld ? characterHomeworld.name : null;
  

    
  




  // ❗ Create a "toggle" click handler to show or remove the homeworld
const toggleHomeworld = () => {
  setShowHomeworld(!showHomeworld)
}

  return (
    <div className='character-card'
    onClick={() =>{
      toggleHomeworld()
    }}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className='character-name'>{name}</h3>
      {showHomeworld && <p>Planet: <span className='character-planet'>{actualHomeworldName}</span></p>}

      

    </div>
  )
}

export default Character
