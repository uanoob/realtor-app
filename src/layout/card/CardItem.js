import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FilterRating from '../filter/FilterRating';

const CardItem = ({ card, sign }) => {
  const showSign = currencySign => {
    switch (currencySign) {
      case 'UAH':
        return <span>&#8372;</span>;
      case 'USD':
        return <span>&#36;</span>;
      case 'EUR':
        return <span>&#8364;</span>;
      default:
        return <span>&#8372;</span>;
    }
  };
  return (
    <div className='col-sm-12 mb-3'>
      <div className='card flex-row flex-wrap'>
        <div className='d-flex flex-column col-md-12 col-lg-6'>
          <div className='mt-3'>
            <img src={card.images[0]} className='img-fluid mb-2' alt='' />
          </div>
          <div className='mt-3 text-center text-warning'>
            <FilterRating rating={card.rating} />
          </div>
        </div>
        <div className='card-body col-md-12 col-lg-6 d-flex flex-column'>
          <h5 className='card-title'>{card.full_address}</h5>
          <div className='card-text mb-2'>{card.description}</div>
          <div className='mb-2 d-flex flex-wrap justify-content-between'>
            <span className='card-text mr-2'>
              <i className='fas fa-home mr-2' />
              {card.total_rooms}
              {' '}
комнаты
            </span>
            <span className='card-text'>
              <div>
                <i className='far fa-calendar-alt mr-2' />
                {card.public_date}
              </div>
            </span>
          </div>
          <div className='mt-auto text-right'>
            <Link to={`/cards/${card.id}`} className='btn btn-info darken-2 mt-2'>
              <div className='px-4'>Купить за</div>
              {card.price}
              {' '}
              {showSign(sign)}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    full_address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    rating: PropTypes.number.isRequired,
    total_rooms: PropTypes.number.isRequired,
    public_date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  sign: PropTypes.string.isRequired,
};

export default CardItem;
