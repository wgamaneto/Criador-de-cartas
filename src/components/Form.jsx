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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick } = this.props;
    return (
      <div>
        <input
          name="cardName"
          type="text"
          data-testid="name-input"
          onChange={ onInputChange }
          value={ cardName }
        />
        <textarea
          name="cardDescription"
          onChange={ onInputChange }
          data-testid="description-input"
          value={ cardDescription }
        />
        <input
          name="cardAttr1"
          type="number"
          data-testid="attr1-input"
          onChange={ onInputChange }
          value={ cardAttr1 }
        />

        <input
          name="cardAttr2"
          type="number"
          data-testid="attr2-input"
          onChange={ onInputChange }
          value={ cardAttr2 }
        />

        <input
          name="cardAttr3"
          type="number"
          data-testid="attr3-input"
          onChange={ onInputChange }
          value={ cardAttr3 }
        />

        <input
          name="cardImage"
          type="text"
          data-testid="image-input"
          onChange={ onInputChange }
          value={ cardImage }
        />

        <select
          name="cardRare"
          data-testid="rare-input"
          onChange={ onInputChange }
          value={ cardRare }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        {
          hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
            <input
              name="cardTrunfo"
              type="checkbox"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          )
        }

        <button
          type="button"
          data-testid="save-button"
          name="isSaveButtonDisabled"
          disabled={ isSaveButtonDisabled }
          onClick={ () => {
            onSaveButtonClick({
              cardName,
              cardDescription,
              cardAttr1,
              cardAttr2,
              cardAttr3,
              cardImage,
              cardRare,
              cardTrunfo,
            });
          } }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
