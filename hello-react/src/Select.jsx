import './Select.css';

import { useEffect, useRef, useState } from 'react';

function Select({ value = '', items = [], onValueChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const hostRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', (event) => {
      if (!hostRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    });
  }, []);

  function handleItemClick(item) {
    onValueChange(item);
  }

  return (
    <div ref={hostRef} className="Select" onClick={() => setIsOpen(!isOpen)}>
      <div className="value">{value}</div>
      {isOpen && (
        <div className="menu">
          {items.map((item) => (
            <div key={item} className="item" onClick={() => handleItemClick(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
