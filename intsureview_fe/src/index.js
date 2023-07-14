import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css'
import Header from './components/Header'
import Content from './components/Content';

const App = () => {
    return (
        <div>
            <Header> </Header>
        <Content>
            
        </Content>

        </div>
    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));