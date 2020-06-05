import React from 'react';

const Grant = ({ grant }) => {
    return (
        <li>
            <button
                type="button"
                className="btn btn-blank"
            >{grant.title} </button>
        </li>
    );
};

export default Grant;
