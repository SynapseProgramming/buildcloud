import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './MainMenu.module.css';

const MainMenu = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <h3>this is a test</h3>
    </div>
  );
};

MainMenu.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default MainMenu;
