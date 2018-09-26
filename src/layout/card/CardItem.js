import React from 'react';
import { Link } from 'react-router-dom';

const CardItem = card => {
  return (
    <div className="col-sm-12 mb-3">
      <div className="view overlay z-depth-1-half">
        <div className="card flex-row flex-wrap">
          <div className="view overlay hm-white-slight col-md-6">
            <img src={card.images[0]} className="img-fluid" alt="" />
          </div>
          <div className="card-body col-md-6">
            <h5 className="card-title">{card.full_address}</h5>
            <div className="card-text">{card.description}</div>
            <span className="card-text">{card.total_rooms} комнаты </span>
            <span className="card-text">{card.public_date} </span>
            <Link
              to={`/cards/${card.id}`}
              className="btn btn-info btn-md mdb-color darken-2 mt-2"
            >
              Купить за {card.price} $<i className="fa fa-play ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
