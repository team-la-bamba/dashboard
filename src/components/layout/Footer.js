import React from 'react';

function Footer() {
  return (
    <footer className="text-white pb-8 px-9 fixed w-full bottom-0 left-0 right-0 text-gray-500">
      <div className="flex justify-between align-center items-center flex-col sm:flex-row">
        <ul className="flex pb-5 sm:pb-0">
          <li>
            <a
              href="https://app.labamba.space/"
              className="mr-3 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kristempen app
            </a>
          </li>
          <li>
            <a
              href="https://app.labamba.space/policy"
              className="mr-3 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Data policy
            </a>
          </li>
          <li>
            <a
              href="https://app.labamba.space/pitch"
              className="mr-3 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Our pitch
            </a>
          </li>
        </ul>

        <span>
          {' '}
          Created by{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/team-la-bamba"
            className="underline"
          >
            TeamLaBamba
          </a>{' '}
          for{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
            href="https://www.hackthecrisis.se/"
          >
            HacktheCrisis Sweden
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
