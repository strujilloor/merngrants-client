import React from 'react';

const Grant = ({ grant }) => {
    
    return (
        <li className="grant">

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


            

            {/* <p>{grant.title} </p>

            <div className="estado">
                {grant.estado 
                ?  
                    (
                        <button
                            type="button"
                            className="completo"
                        >Completo</button>
                    )
                : 
                    (
                        <button
                            type="button"
                            className="incompleto"
                        >{grant.oppStatus}</button>
                    )
                }
            </div>

            <div className="acciones">
                <button 
                    type="button"
                    className="btn btn-primario"
                >{od.getFullYear()}</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                >{cd.getFullYear()}</button>
            </div> */}
        </li>
    );
};

function dateTransform( dateString ) {
    // const date = new Date( dateString );
    // return `${date.getMonth()}/${date.getTime()}/${date.getFullYear()}`;
    // Formatenado la fecha:
    const dateObject = new Date( '07/20/2020' );
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const humanDateFormat = dateObject.toLocaleString('en-419', options);

    return humanDateFormat;
}

export default Grant;
