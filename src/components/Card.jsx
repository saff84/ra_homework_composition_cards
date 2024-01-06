import React from 'react';

export default function Card(props) {
    const { card } = props;
    return (
        <div className="card">
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{card.header}</h5>
                <p className="card-text">{card.text}</p>
                <button href="#" className="btn btn-primary">{card.btnText}</button>
            </div>
        </div>
    )
}