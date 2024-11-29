import './App.css';

function App() {
    return (
        <div className="App">

            <div className="App">
                <div className="App-header">
                    <header>
                        MyFinance
                        <span><a className="App-link" href="#home">Home</a></span>
                        <span><a className="App-link" href="#transacoes">Transações</a></span>
                    </header>
                </div>
                <div className="App-body">
                    <p class="App-phome">Transações</p>
                    <div class="App-tabela">
                        <table>
                            <colgroup>
                                <col class="colunas"></col>
                            </colgroup>
                            <tr class="App-colunas">
                                <th scope="col">Código</th>
                                <th scope="col">Descrição</th>
                                <th scope="col">Entrada</th>
                                <th scope="col">Saída</th>
                                <th scope="col">Total</th>
                            </tr>
                            <tr class="App-colunas">
                                <td>1</td>
                                <td>Salário</td>
                                <td>5000</td>
                                <td>0</td>
                                <td>5000</td>
                            </tr>
                            <tr class="App-colunas">
                                <td>2</td>
                                <td>Aluguel</td>
                                <td>0</td>
                                <td>1500</td>
                                <td>-1500</td>
                            </tr>
                            <tr class="App-colunas">
                                <td>3</td>
                                <td>Supermercado</td>
                                <td>0</td>
                                <td>300</td>
                                <td>-300</td>
                            </tr>
                            <tr class="App-colunas">
                                <td>4</td>
                                <td>Internet</td>
                                <td>0</td>
                                <td>100</td>
                                <td>-100</td>
                            </tr>
                            <tr class="App-colunas">
                                <td>5</td>
                                <td>Transporte</td>
                                <td>0</td>
                                <td>150</td>
                                <td>-150</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className="footer">
                Desenvolvido por Gabriel Costa Merlo
            </div>
        </div>
    );
}

export default App;
