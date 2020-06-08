import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import grantContext from '../../context/grants/grantContext';
import { Link } from 'react-router-dom';

const GrantDetail = () => {

    // Getting grants state
    const grantsContext = useContext( grantContext );
    const { grantDetails, getGrantDetails, loading } = grantsContext;
    
    // Get Grant id
    const { id } = useParams();
    console.log(id);

    // Get grantDetails when component loads
    useEffect(() => {
        getGrantDetails( id );
        // eslint-disable-next-line
    }, []);

    console.log('grantdetails:', grantDetails);

    return (
        <div>
            <Link className="back-button" to="/">{ '< Back' }</Link>
            <h2>VIEW GRANT OPPORTUNITY</h2>
            {
                loading ? <p>Loading...</p> :

                grantDetails ?

                <div className="card">
                    <div className="header">
                        <p>{ grantDetails.details.opportunityNumber }</p>
                        <p>{ grantDetails.details.opportunityTitle }</p>
                        <p>{ grantDetails.details.topAgencyDetails.agencyName }</p>
                        <p>{ grantDetails.details.agencyDetails.agencyName }</p>
                    </div>

                    <div className="general-info">
                        <p className="uppercase-bold">General Information</p>
                        <div className="column-2">
                            <p><b>Funding Opportunity Number:</b> { grantDetails.details.opportunityNumber }</p>
                            <p className="text-align-right"><b>Version:</b> Synopsis { grantDetails.details.synopsis.version }</p>
                            <p><b>Funding Opportunity Title:</b> { grantDetails.details.opportunityTitle }</p>
                            <p className="text-align-right"><b>Posted Date</b>: { grantDetails.details.synopsis.postingDate }</p>
                            <p><b>Opportunity Category:</b> { grantDetails.details.opportunityCategory.description }</p>
                            <p className="text-align-right"><b>Last Updated Date:</b> { grantDetails.details.synopsis.lastUpdatedDate }</p>
                            <p><b>Funding Instrument Type:</b> { grantDetails.details.synopsis.fundingInstruments[0].description }</p>
                            <p className="text-align-right"><b>Archive Date:</b> { grantDetails.details.synopsis.archiveDate }</p>
                            <p><b>Category of Funding Activity:</b> { grantDetails.details.synopsis.fundingActivityCategories[0].description }</p>
                            <p className="text-align-right"><b>Estimated Total Program Funding</b> ${ grantDetails.details.synopsis.estimatedFundingFormatted }</p>
                            <p><b>Expected Number of Awards:</b> { grantDetails.details.synopsis.numberOfAwards }</p>
                            <p className="text-align-right"><b>Award Ceiling:</b> ${ grantDetails.details.synopsis.awardCeilingFormatted }</p>
                            <p><b>CFDA Number(s):</b> { grantDetails.details.cfdas[0].cfdaNumber } -- { grantDetails.details.cfdas[0].programTitle }</p>
                            <p className="text-align-right"><b>Award Floor:</b> ${ grantDetails.details.synopsis.awardFloor }</p>
                        </div>
                    </div>
                    <p className="padding-3 text-align-right"><b>Grantor Contact Information:</b> If you have difficulty accessing the full announcement electronically, please contact: { grantDetails.details.synopsis.agencyContactEmail }</p>
                </div>

                : null
            }
        </div>
    );
};

export default GrantDetail;
