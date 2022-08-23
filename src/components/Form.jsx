import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <input
          type="text"
          data-testid="name-input"
          onChange={ onInputChange }
          value={ cardName }
        />
        <textarea
          data-testid="description-input"
          onChange={ onInputChange }
          value={ cardDescription }
        />
        <input
          type="number"
          data-testid="attr1-input"
          onChange={ onInputChange }
          value={ cardAttr1 }
        />

        <input
          type="number"
          data-testid="attr2-input"
          onChange={ onInputChange }
          value={ cardAttr2 }
        />

        <input
          type="number"
          data-testid="attr3-input"
          onChange={ onInputChange }
          value={ cardAttr3 }
        />

        <input
          type="text"
          data-testid="image-input"
          onChange={ onInputChange }
          value={ cardImage }
        />

        <select data-testid="rare-input" onChange={ onInputChange } value={ cardRare }>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <input
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        />

        <button
          type="button"
          data-testid="save-button"
          onClick={ onSaveButtonClick }
          disabled={ isSaveButtonDisabled }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,

};

export default Form;
