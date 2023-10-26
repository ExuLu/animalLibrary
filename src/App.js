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
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  function addAnimal(animal) {
    setAnimals((animals) => [...animals, animal]);
    setShowAddForm(false);
  }

  function handleAddAnimalButton() {
    setShowAddForm((showAddForm) => !showAddForm);
    setSelectedAnimal(null);
  }

  function handleSelection(animal) {
    setSelectedAnimal(animal.id === selectedAnimal?.id ? null : animal);
    setShowAddForm(false);
  }

  return (
    <div>
      <Header />
      <div className='app'>
        <div className='sidebar'>
          <AnimalsList
            animals={animals}
            onSelection={handleSelection}
            selectedAnimal={selectedAnimal}
          />
          {showAddForm && <FormAddAnimal onAddAnimal={addAnimal} />}
          <Button onClick={handleAddAnimalButton}>
            {showAddForm ? 'Close' : 'Add animal'}
          </Button>
        </div>
        {selectedAnimal && <Information animal={selectedAnimal} />}
      </div>
    </div>
  );
}

function Header() {
  return <h1 className='header'>Animal Library</h1>;
}

function AnimalsList({ animals, onSelection, selectedAnimal }) {
  return (
    <ul>
      {animals.map((animal) => (
        <Animal
          animal={animal}
          key={animal.id}
          onSelection={onSelection}
          selectedAnimal={selectedAnimal}
        />
      ))}
    </ul>
  );
}

function Animal({ animal, onSelection, selectedAnimal }) {
  const isSelect = selectedAnimal?.id === animal.id;

  return (
    <li className={isSelect ? 'selected' : ''}>
      <img src={animal.image} alt={animal.name}></img>
      <h3>{animal.name}</h3>
      <Button onClick={() => onSelection(animal)}>
        {isSelect ? 'Close' : 'Read About'}
      </Button>
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

function Information({ animal }) {
  return (
    <div className='info'>
      <h2>{animal.name}</h2>
      <label>{animal.description}</label>
      <img src={animal.image} alt={animal.name} />
    </div>
  );
}
