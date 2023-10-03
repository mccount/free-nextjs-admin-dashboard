"use client";
import { useState } from 'react';
import createUUID from '../helpers/createUUID';

interface CheckBox {
  checkedOnInit?: boolean,
  text?: string,
  initId?: string
}

const CheckboxThree = ({checkedOnInit, text, initId = createUUID()} : CheckBox) => {
  const [isChecked, setIsChecked] = useState<boolean>(checkedOnInit ? checkedOnInit : false);

  return (
    <div>
      <label
        htmlFor={initId}
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id={initId}
            className="sr-only"
            onChange={() => {
              console.log("setting " + (!isChecked))
              setIsChecked(!isChecked);
            }}
          />
          <div
            className={`box mr-4 flex h-5 w-5 items-center justify-center rounded border ${
              isChecked && 'border-primary bg-gray dark:bg-transparent'
            }`}
          >
            <span
              className={`text-primary opacity-0 ${
                isChecked && '!opacity-100'
              }`}
            >
              <svg
                className="h-3.5 w-3.5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </span>
          </div>
        </div>
        {text ? text : ""}
      </label>
    </div>
  );
};

export default CheckboxThree;