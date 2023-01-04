import PropTypes from 'prop-types';
import React, { useState } from 'react';
import style from './MainMenu.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const MainMenu = (props) => {
  const [name, setName] = useState(props.name);

  return (
    <div>
      <h3>this is a test</h3>
      <p>
      <a href="#" class="btn btn-primary my-2">Main call to action</a>
      <a href="#" class="btn btn-secondary my-2">Secondary action</a>
    </p>
    </div>
  );
};

MainMenu.propTypes = {
  name: PropTypes.string.isRequired, // this is passed from the Rails view
};

export default MainMenu;
