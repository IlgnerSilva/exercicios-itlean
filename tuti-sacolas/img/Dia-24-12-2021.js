
//Crie aqui seu componente App com as instruções dadas
//Utilize uma tag HTML que tenha valor semântico de conteúdo principal da página
//Crie aqui seu componente App com as instruções dadas
//Utilize uma tag HTML que tenha valor semântico de conteúdo principal da página
import React, {Component} from "react";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
    };

    this.onCounterClick = this.onCounterClick.bind(this);
  }

  onCounterClick() {
    this.setState({ contador: this.state.contador + 1 });
  }

  render() {
    
    return (
      <main>
         <h1 id="h1">Cliques:{this.state.contador}</h1>
        <button id="button" onClick={this.onCounterClick}>Clique!</button>
      </main>
    )
  }
}

export default App;



//======================================================

//Crie aqui seu componente App com as instruções dadas
import React, {Component} from "react";


class App extends Component {
  constructor(){
    super()
    this.state = { nome: " "}
  }
  componentDidMount() {
    this.setState({ nome: "Joaquim" });
    
  }
  
  render(){
    
     return (
      <div>
         <h1 id="h1">Nome: {this.state.nome}</h1>
      </div>
    )
  }
   
}

export default App;



//=============================================================


//Crie aqui seu componente App com as instruções dadas

//Crie aqui seu componente App com as instruções dadas
import React, {Component} from "react";


class App extends Component {
  constructor(){
    super()
    this.state = { cor: " azul"}
     
  }
  
  
 componentDidMount() {
        this.timer = setTimeout(
            () => this.setState(prevState => ({ cor: "branca" })),
            1000,
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }
  componentDidUpdate() {
    alert(this.state.cor)
  }

  render(){
    
    return (
      <div>
         <h1 id="h1">Nome: {this.state.cor}</h1>
      </div>
    )
      
    
  }
   
}

export default App;


//=======================================================
