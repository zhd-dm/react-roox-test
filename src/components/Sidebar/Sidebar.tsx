import React, {FC} from 'react';
import './Sidebar.scss';
import Button from '../UI/Button/Button';

const Sidebar = () => {
    return (
      <div className="sidebar-wrapper">
          <span className="sidebar-title">
            Сортировка
          </span>
          <Button
            onClick={() => console.log('hello')}
            title="по городу"
            className=""
          />
          <Button
            onClick={() => console.log('hello')}
            title="по компании"
            className=""
          />
      </div>
    );
  }
  
  export default Sidebar;