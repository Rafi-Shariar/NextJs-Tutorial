import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className='flex min-h-screen gap-5'>

            <div className='flex-2'>
                {children}
            </div>
            <div className='flex-1 bg-sky-100 p-5 text-blue-700 justify-center items-center'>
                <h2 className='text-3xl font-semibold'>Welcome For Authentication</h2>
            </div>

            
        </div>
    );
};

export default AuthLayout;