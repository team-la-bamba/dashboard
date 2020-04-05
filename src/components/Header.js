import React from 'react';

function Header({ children }) {
  return (
    <div>
      <h1 className="mt-6 text-center text-5xl leading-9 font-bold text-gray-900">
        Kristempen{' '}Dashboard{' '}
        <span role="img" aria-label="fever-emoji">
          🤒
        </span>
      </h1>

      <p className="mt-4 text-center text-m leading-6 text-gray-700 max-w">
        {children}
      </p>
    </div>
  );
}

export default Header;
