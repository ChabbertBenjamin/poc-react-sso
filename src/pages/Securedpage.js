import React from 'react';
import RequestComponent from '../request/RequestComponent'

const Secured = () => {

    return (
        <div>
            <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
            <RequestComponent/>
        </div>
    );
};

export default Secured;