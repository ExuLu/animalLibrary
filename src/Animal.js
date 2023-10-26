import Button from './Button';

export default function Animal({ animal, onSelection, selectedAnimal }) {
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
