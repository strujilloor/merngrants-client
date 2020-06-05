import React, { Fragment, useState } from 'react';

const UpdateGrant = () => {

    const [ loading, setLoading ] = useState(false);
    const [ updated, setUpdated ] = useState(false);

    const updateGrants =  async () => {
        const url = 'https://merngrants-server.herokuapp.com/api/grants/update';

        try {
            setUpdated(false);
            setLoading(true); // loading...
            let response = await fetch(url);
            let data = await response.json();
            setLoading(false);
            setUpdated(true); // success
            console.log(data);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setUpdated(false);
        }
        
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ updateGrants }
            >Update DB</button>

            {
                updated ? <p>DB Updated ✔</p> : null
            }
        </Fragment>
    );
};

export default UpdateGrant;
