import { useState } from 'react';
import { initialAnimals } from './data';

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className='button'>
      {children}
    </button>
  );
}

export default function App() {
  const [animals, setAnimals] = useState(initialAnimals);
  const [showAddForm, setShowAddForm] = useState(false);

  function addAnimal(animal) {
    setAnimals((animals) => [...animals, animal]);
    setShowAddForm(false);
  }

  function handleAddAnimalButton() {
    setShowAddForm((showAddForm) => !showAddForm);
  }

  return (
    <div>
      <Header />
      <div className='app'>
        <div className='sidebar'>
          <AnimalsList animals={animals} />
          {showAddForm && <FormAddAnimal onAddAnimal={addAnimal} />}
          <Button onClick={handleAddAnimalButton}>
            {showAddForm ? 'Close' : 'Add animal'}
          </Button>
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
        <Animal animal={animal} key={animal.id} />
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

function FormAddAnimal({ onAddAnimal }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  function handleSumbitAdding(e) {
    e.preventDefault();
    if (!name || !description || !image) return;

    const newAnimal = { name, description, image, id: crypto.randomUUID() };
    onAddAnimal(newAnimal);
  }

  return (
    <form className='form-add-animal'>
      <label>🦁 Animal name</label>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🐼 Description</label>
      <input
        type='text'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label>📸 Image URL</label>
      <input
        type='text'
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button onClick={handleSumbitAdding}>Add</Button>
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
