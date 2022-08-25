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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      data: [],
      // dataOn: false,
    };
  }

  onSaveButtonClick = (obj) => {
    const { cardTrunfo, hasTrunfo } = this.state;
    this.setState({
      hasTrunfo: hasTrunfo || cardTrunfo,
    });
    this.setState((prev) => ({
      data: [...prev.data, obj],
    }), () => {
      this.setState({
        cardAttr1: 0,
        cardAttr2: 0,
        cardAttr3: 0,
        cardRare: 'normal',
        cardTrunfo: false,
        cardName: '',
        cardImage: '',
        cardDescription: '',
      });
    });
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
      hasTrunfo,
      cardImage,
      cardRare,
      cardTrunfo,
      isSaveButtonDisabled,
      // dataOn,
      data,
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
          hasTrunfo={ hasTrunfo }
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
        {
          data.map((element) => (
            <Card
              key={ element.cardName }
              cardName={ element.cardName }
              cardDescription={ element.cardDescription }
              cardAttr1={ element.cardAttr1 }
              cardAttr2={ element.cardAttr2 }
              cardAttr3={ element.cardAttr3 }
              cardImage={ element.cardImage }
              cardRare={ element.cardRare }
              cardTrunfo={ element.cardTrunfo }
            />
          ))
        }
      </div>
    );
  }
}

export default App;
