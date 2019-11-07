import React from 'react';
import {
    BrowserRouter,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';

import Inicio from './pages/Inicio';
import Cursos from './pages/Cursos';
import Contato from './pages/Contato';
import Sobre from './pages/Sobre';
import Eventos from './pages/Eventos';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/inicio" component={Inicio}/>
            <Route path="/sobre" component={Sobre}/>
            <Route path="/contato" component={Contato}/>
            <Route path="/cursos" component={Cursos}/>
            <Route path="/eventos" component={Eventos}/>
            <Redirect to= "/inicio" />
          </Switch>
    </BrowserRouter>
);

export default Rotas;