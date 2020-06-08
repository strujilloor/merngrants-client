import React from 'react';
import { useHistory } from "react-router-dom";

const Grant = ({ grant }) => {

    const history = useHistory();
    
    const goToGrantDetail = () => {
        history.push(`/grant/${ grant.id }`);
    }

    return (
        <li onClick={ goToGrantDetail } className="grant">

            <div className="grant-column-1">
                <div className="value">{ grant.title }</div>
                <div className="name">Opportunity Title</div>

                <div className="value-2">{ grant.number }</div>
                <div className="name">Opportunity Number</div>
            </div>

            <div className="grant-column-2">
                <div className="value">{ grant.agencyCode }</div>
                <div className="name">Agency</div>

                <div className="value-2">{ grant.oppStatus }</div>
                <div className="name">Opp Status</div>
            </div>

            <div className="grant-column-3">
                <div className="value">{ dateTransform(grant.openDate) }</div>
                <div className="name">📅 Posted Date</div>

                <div className="value-2">{ dateTransform(grant.closeDate) }</div>
                <div className="name">📅 Close Date</div>
            </div>

        </li>
    );
};

function dateTransform( dateString ) {
    const dateObject = new Date( dateString );
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const humanDateFormat = dateObject.toLocaleString('en-419', options);

    return humanDateFormat;
}

export default Grant;
