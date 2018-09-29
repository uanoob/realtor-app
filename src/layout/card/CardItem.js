import React from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';

const CardItem = card => {
  return (
    <div className="col-sm-12 mb-3">
      <div className="card flex-row flex-wrap">
        <div className="d-flex flex-column col-md-12 col-lg-6">
          <div className="mt-3">
            <img src={card.images[0]} className="img-fluid mb-2" alt="" />
          </div>
          <p className="mt-3 text-center text-warning">
            <i
              className={classnames('far fa-star fa-lg mr-1', {
                fas: card.rating >= 1 ? true : false,
              })}
            />
            <i
              className={classnames('far fa-star fa-lg mr-1', {
                fas: card.rating >= 2 ? true : false,
              })}
            />
            <i
              className={classnames('far fa-star fa-lg mr-1', {
                fas: card.rating >= 3 ? true : false,
              })}
            />
            <i
              className={classnames('far fa-star fa-lg mr-1', {
                fas: card.rating >= 4 ? true : false,
              })}
            />
            <i
              className={classnames('far fa-star fa-lg mr-1', {
                fas: card.rating >= 5 ? true : false,
              })}
            />
          </p>
        </div>
        <div className="card-body col-md-12 col-lg-6 d-flex flex-column">
          <h5 className="card-title">{card.full_address}</h5>
          <div className="card-text mb-2">{card.description}</div>
          <div className="mb-2 d-flex flex-wrap justify-content-between">
            <span className="card-text mr-2">
              <i className="fas fa-home mr-2" />
              {card.total_rooms} комнаты
            </span>
            <span className="card-text">
              <div>
                <i className="far fa-calendar-alt mr-2" />
                {card.public_date}
              </div>
            </span>
          </div>
          <div className="mt-auto text-right">
            <Link
              to={`/cards/${card.id}`}
              className="btn btn-info darken-2 mt-2"
            >
              <div className="px-4">Купить за</div>
              {card.price} $
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
