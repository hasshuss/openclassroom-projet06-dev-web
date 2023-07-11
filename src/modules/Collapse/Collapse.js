import React, { useState } from 'react';
import Vector from '../../images/Vector.png';
import './Collapse.scss'

const Collapse = ({ title, content, isOpen }) => {
  const [isCollapsed, setIsCollapsed] = useState(!isOpen);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className='colapse'>
      <h3 onClick={handleToggle}>{title}</h3><img src={Vector}></img>
      {!isCollapsed && <div>{content}</div>}
    </div>
  );
};

export default Collapse;