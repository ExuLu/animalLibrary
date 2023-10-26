export default function Information({ animal }) {
  return (
    <div className='info'>
      <h2>{animal.name}</h2>
      <label>{animal.description}</label>
      <img src={animal.image} alt={animal.name} />
    </div>
  );
}
