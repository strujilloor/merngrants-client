import React from 'react';

const Grant = ({ grant }) => {
    const od = new Date(grant.openDate);
    const cd = new Date(grant.closeDate);
    
    return (
        <li className="tarea">
            <p>{grant.title} </p>

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
            </div>
        </li>
    );
};

export default Grant;
