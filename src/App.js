import { useState } from 'react';
import initialAnimals from './data';
import Button from './Button';
import Header from './Header';
import AnimalsList from './AnimalsList';
import FormAddAnimal from './FormAddAnimal';
import Information from './Information';

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
