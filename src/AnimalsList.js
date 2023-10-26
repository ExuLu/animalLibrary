import Animal from './Animal';

export default function AnimalsList({ animals, onSelection, selectedAnimal }) {
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
