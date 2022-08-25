// Dica oberservada pelo Henrik e pelo Thiago Lopes

import PropTypes from 'prop-types';
import React from 'react';

class Delete extends React.Component {
  render() {
    const { handleDelete, elementName, cardTrunfo } = this.props;
    return (
      <button
        type="button"
        data-testid="delete-button"
        onClick={ () => { handleDelete(elementName, cardTrunfo); } }
      >
        Delete
      </button>
    );
  }
}

Delete.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  elementName: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Delete;
