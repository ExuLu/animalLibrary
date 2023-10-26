import { useState } from 'react';
import { initialAnimals } from './data';

function Button({ children }) {
  return <button className='button'>{children}</button>;
}

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);

  return (
    <div>
      <Header />
      <div className='app'>
        <div className='sidebar'>
          <AnimalsList animals={animals} />
          <FormAddAnimal />
          <Button>Add animal</Button>
        </div>
        <Information animals={animals} />
      </div>
    </div>
  );
}

function Header() {
  return <h1 className='header'>Animal Library</h1>;
}

function AnimalsList({ animals }) {
  return (
    <ul>
      {animals.map((animal) => (
        <Animal animal={animal} />
      ))}
    </ul>
  );
}

function Animal({ animal }) {
  return (
    <li>
      <img src={animal.image} alt={animal.name}></img>
      <h3>{animal.name}</h3>
      <Button>Read About</Button>
    </li>
  );
}

function FormAddAnimal() {
  return (
    <form className='form-add-animal'>
      <label>🦁 Animal name</label>
      <input type='text' />

      <label>🐼 Description</label>
      <input type='text'></input>

      <label>📸 Image URL</label>
      <input type='text' />

      <Button>Add</Button>
    </form>
  );
}

function Information({ animals }) {
  return (
    <div className='info'>
      <h2>{animals[0].name}</h2>
      <label>{animals[0].description}</label>
      <img src={animals[0].image} alt={animals[0].name} />
    </div>
  );
}
