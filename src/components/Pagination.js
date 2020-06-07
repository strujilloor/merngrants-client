import React from 'react';

const Pagination = ({ grantsPerPage, totalGrants, currentPage, paginate }) => {
    const pageLinks = [];

    for (let i = 1; i <= Math.ceil(totalGrants / grantsPerPage); i++) {
        let active = currentPage === i ? 'active' : '';

        pageLinks.push(
            <li 
                className={ `page-item ${active}` } 
                key={ i } 
                onClick={ () => paginate( i ) } 
                // eslint-disable-next-line
            ><a className={ `page-link ${active}` } href="#">{ i }</a></li>
        );
    }

    return (
        <nav>
            <ul className="pagination">
                { 
                    currentPage > 1 ?
                        <li 
                            className={ `page-item` }
                            onClick={ () => paginate( currentPage - 1 ) } 
                            // eslint-disable-next-line
                        ><a className={ `page-link` } href="#">Previous</a></li>
                    : null
                }

                { pageLinks }

                { 
                    currentPage < Math.ceil(totalGrants / grantsPerPage) ?
                        <li 
                            className={ `page-item` }
                            onClick={ () => paginate( currentPage + 1 ) } 
                            // eslint-disable-next-line
                        ><a className={ `page-link` } href="#">Next</a></li>
                    : null
                }
            </ul>
        </nav>
    );
};

export default Pagination;
