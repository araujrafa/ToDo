import React, { Component } from 'react';
import './bootstrap.min.css';

const style = {
  marginTop: "1em",
  td: {
    verticalAlign: "middle"
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      product: '',
      itens: []
    }
    this.onText = this.onText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.removeLine = this.removeLine.bind(this);

  }

  removeLine(e) {
    const itens = this.state.itens;
    if(itens.length > 0 ){
      itens.splice(e.target.value, 1)
    }
    this.setState(
      {
        product: this.state.product,
        itens: itens
      }
    )
  }

  tableRender() {
    const itens = this.state.itens || [];
    return itens.map((elem, index) => {
      return <tr><td style={style.td}>{elem.name}</td><td><button className="btn btn-danger" onClick={this.removeLine} value={index}>Remover</button></td></tr>;
    });
  }

  onText(e) {
    this.setState(
      {
        product: e.target.value,
        itens: this.state.itens
      }
    )
  }

  onSubmit() {
    const prod = this.state.product;
    const newList = this.state.itens;
    newList.push({
      name: prod
    });
    this.setState(
      {
        product: '',
        itens: newList,
      }
    )
  }

  render() {
    return (
      <div className="container">
        <h1>Lista de produtos</h1>
        <label>Digita um produto</label>
        <div className="row">
          <div className="col-11">
            <input type="text" className="form-control" placeholder="digite o produto" value={this.state.product} onChange={this.onText} />
          </div>
          <button onClick={this.onSubmit} className="btn btn-primary" onKeyPress={this._handleKeyPress} >Adicionar</button>
        </div>
        <div className="container" style={style}>
          <div className="row">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Produtos</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {this.tableRender()}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
