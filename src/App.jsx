import { useState } from "react";
import './App.css';

const App = () => {

const [team, setTeam] = useState([]);
const [money, setMoney] = useState(100);
const [zombieFighters, setZombieFighters] = useState([
  {
    id: 1,
    name: 'Survivor',
    price: 12,
    strength: 6,
    agility: 4,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
  },
  {
    id: 2,
    name: 'Scavenger',
    price: 10,
    strength: 5,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
  },
  {
    id: 3,
    name: 'Shadow',
    price: 18,
    strength: 7,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
  },
  {
    id: 4,
    name: 'Tracker',
    price: 14,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
  },
  {
    id: 5,
    name: 'Sharpshooter',
    price: 20,
    strength: 6,
    agility: 8,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
  },
  {
    id: 6,
    name: 'Medic',
    price: 15,
    strength: 5,
    agility: 7,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
  },
  {
    id: 7,
    name: 'Engineer',
    price: 16,
    strength: 6,
    agility: 5,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
  },
  {
    id: 8,
    name: 'Brawler',
    price: 11,
    strength: 8,
    agility: 3,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
  },
  {
    id: 9,
    name: 'Infiltrator',
    price: 17,
    strength: 5,
    agility: 9,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
  },
  {
    id: 10,
    name: 'Leader',
    price: 22,
    strength: 7,
    agility: 6,
    img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
  },
]
)

const handleAddFighter = (fighter) => {
  //Check money before purchase
  if (money < fighter.price) {
    console.log('Not enough money')
    return;
  }

  //Add to team
  setTeam([...team, fighter]);

  //Remove from zombieFighters
  const updatedFighters = zombieFighters.filter(
    (f) => f.id !== fighter.id
  );

  //Update State
  setZombieFighters(updatedFighters);

  //Subtract Money
  setMoney(money - fighter.price);

};

const handleRemoveFighter = (fighter) => {
//Add back to zombieFighters
  setZombieFighters([...zombieFighters, fighter]);

  //Remove from Team
  const updatedTeam = team.filter(
    (t) => t.id !== fighter.id
  );

  //Update Team
  setTeam(updatedTeam);

  //Update Money
  setMoney((prevMoney) => prevMoney + fighter.price)
}

const totalStrength = team.reduce((total, t) => {
  return total + t.strength;
}, 0); 

const totalAgility = team.reduce((total, t) => {
  return total + t.agility;
}, 0);

  return(

    <>
    <h1>Zombie Fighters</h1><br />

    <h2>Money: ${money} </h2><br />

    <h2>Team's Total Strength: {totalStrength}</h2><br />

    <h2>Team's Total Agility: {totalAgility}</h2><br />

    <h2>Your Team:</h2>
      {team.length === 0 ? 
      (<p>Pick some team members!</p>
      ) : (
      <ul>
        {team.map((t) => (
          <li key={t.id}> 
            <img src={t.img} alt={t.name} />
            <h2>{t.name}</h2> 
            <p>${t.price}</p>
            <p>Strength: {t.strength}</p>
            <p>Agility: {t.agility}</p>

            <button onClick={() => handleRemoveFighter(t)}> Remove Teammate </button>
          </li>
          ))}
        </ul>
      )}
    
    <br /><h2>Purchase a Fighter:</h2>
      <ul>
        {zombieFighters.map((fighter) => 
         <li key={fighter.id}> 
         <img src={fighter.img} alt={fighter.name} />
         <h2>{fighter.name}</h2> 
         <p>${fighter.price}</p>
         <p>Strength: {fighter.strength}</p>
         <p>Agility: {fighter.agility}</p>
         
         <button onClick={() => handleAddFighter(fighter)}> Add Fighter </button>
         </li>
        )}
      </ul>

    </>

  );
}

export default App;