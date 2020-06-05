import React from 'react';
import UpdateGrant from '../grants/UpdateGrant';

const Sidebar = () => {
    return (
        <aside>
            <h1>MERN<span>Grants</span></h1>

            <UpdateGrant />

            <div className="proyectos">
                <h2>
                    <span 
                        role="img" 
                        aria-label="hand"
                    >☝</span> Update DB
                </h2>
            </div>
        </aside>
    );
};

export default Sidebar;
