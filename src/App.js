import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }llllll

  onSaveButtonClick = (event) => {
    const { cardTrunfo } = this.stage;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  };

  valor = (elemento) => {
    const max = 90;
    if (Number(elemento) >= 0 && Number(elemento) <= max) {
      return true;
    }
  };

  onInputChange = ({ target }) => {
    const { name, type } = target;
    const value = type === 'checkbox' ? target.checked : target.value;
    this.setState({ [name]: value }, () => {
      const max = 210;
      const { cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardName,
        cardDescription,
      } = this.state;
      const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
      const att1 = this.valor(cardAttr1);
      const att2 = this.valor(cardAttr2);
      const att3 = this.valor(cardAttr3);
      if (cardName && cardDescription && cardImage
         && cardRare && sum <= max && att1 && att2 && att3) {
        this.setState({ isSaveButtonDisabled: false });
      } else {
        this.setState({ isSaveButtonDisabled: true });
      }
    });
  };

  render() {
    const { cardName, cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
    } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form
          onInputChange={ this.onInputChange }
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
