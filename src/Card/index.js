import './Card.css';

function Card({
  id,
  createdAt,
  name,
  image,
  price,
  inCart,
  onClick
}) {
  const buttonText = inCart ? 'Remove from Cart' : 'Add to Cart'
  const buttonClass = inCart ? 'btn-danger' : '';
  return (
    <div className="card card--margin">
      <img src={image} alt={name} />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <h5 className="card-subtitle">${price}</h5>
        <button className={buttonClass} onClick={() => onClick()}>{buttonText}</button>
      </div>
    </div>
  );
}

export default Card;
