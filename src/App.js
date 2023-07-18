import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Autor from './componentes/Autor';
import Livro from './componentes/Livro';
import Emprestimo from './componentes/Emprestimo';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/autor/:id" component={Autor} />
        <Route path="/livro/:id" component={Livro} />
        <Route path="/emprestimo/:id" component={Emprestimo} />
      </Switch>
    </Router>
  );
}

export default App;
