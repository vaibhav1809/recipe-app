import React from 'react';

export default function Header() {
    return (
        <div className="bg-primary p-3 d-flex justify-content-between align-items-center">
            <h1 className="text-white h4">Recipe</h1>
            <div className="bg-white text-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                VS
            </div>
        </div>
    );
}
