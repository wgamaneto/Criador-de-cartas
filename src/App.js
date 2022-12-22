import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Delete from './components/Delete';

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

  handleDelete = (elementName, cardTrunfo) => {
    const { data } = this.state;
    const newArray = data.filter((element) => element.cardName !== elementName);
    this.setState({
      data: newArray,
    });
    if (cardTrunfo) {
      this.setState({
        hasTrunfo: !cardTrunfo,
      });
    }
  };

  filter = (name, rare, filterSuper) => {
    const { data } = this.state;
    if (filterSuper) {
      return data.filter((e) => e.cardTrunfo);
    }
    // this.setState({ disabledFilters: false });
    if (name) {
      return data.filter((e) => e.cardName.includes(name));
    }
    if (rare === 'todas') {
      return data;
    }
    if (name && rare) {
      return data.filter((e) => e.cardRare === rare
      && e.cardName.includes(name));
    }
    return data.filter((e) => e.cardRare === rare);
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
      filterForName,
      filterForRarity,
      filterForSuper,
      // dataOn,
      // data,
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
        <input
          type="text"
          name="filterForName"
          data-testid="name-filter"
          onChange={ this.onInputChange }
          value={ filterForName }
          disabled={ filterForSuper }
        />

        <select
          name="filterForRarity"
          data-testid="rare-filter"
          onChange={ this.onInputChange }
          value={ filterForRarity }
          disabled={ filterForSuper }
        >
          <option value="todas">todas</option>
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>

        <input
          type="checkbox"
          name="filterForSuper"
          data-testid="trunfo-filter"
          onChange={ this.onInputChange }
          value={ filterForSuper }
        />
        {
          this.filter(filterForName, filterForRarity, filterForSuper).map((element) => (
            <div key={ element.cardName }>
              <Card // Dica observada pelo Gustavo Aquino e a Hellen ribas (summer)
                cardName={ element.cardName }
                cardDescription={ element.cardDescription }
                cardAttr1={ element.cardAttr1 }
                cardAttr2={ element.cardAttr2 }
                cardAttr3={ element.cardAttr3 }
                cardImage={ element.cardImage }
                cardRare={ element.cardRare }
                cardTrunfo={ element.cardTrunfo }
              />
              <Delete // Dica obsrvado pelo Henrik e pelo Thiago Lopes
                handleDelete={ this.handleDelete }
                elementName={ element.cardName }
                cardTrunfo={ element.cardTrunfo }
              />
            </div>
          ))
        }
      </div>
    );
  }
}

export default App;
