import { useState } from 'react';
import Button from './Button';

export default function FormAddAnimal({ onAddAnimal }) {
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
