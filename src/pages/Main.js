import Logo from "../components/Logo/Logo.js";
import {Navigate, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {Container, Top, Content, Buttons} from "../styles/styles.js";
import { Link } from "react-router-dom";
import {Url} from "../services/Api.js";
import { useState, useEffect } from "react";
import {UserContext} from "../App.js";
import axios from "axios";

export default function Main() {
  const {user} = useContext(UserContext);
  const {setUser} = useContext(UserContext);

   const [transactions, setTransactions] = useState([]);
    const navigate = useNavigate();
  
 useEffect(() => {
    const promise = axios.get(`${Url}/accounts`, {headers: {Authorization: `Bearer ${user.token}`}});
    promise.then((response) => {
      setTransactions(response.data);
      console.log(transactions);
    });
    promise.catch((err) => {
      console.log(err);
    });
  
 }, []);

 function exit(){
  setUser(null);
  navigate("/");
 }
  
    return (
      <Container>
        <Top>
        <div>Olá, {user.name}!!!</div>
        <ion-icon onClick={exit} name="exit-outline"></ion-icon>
        </Top>
        <Content>
      {transactions === [] ? <div className="warn">Não há registros de entrada ou saída</div> : 
      transactions.map((transaction) => {
        return (
          <div>
            <div className="date">{transaction.date}</div>
            <div className="descripition">{transaction.titleDescription}</div>
            <div className="value" color={transaction.type === 'in' ? 
            "green" : "red"}>{transaction.value}</div>
          </div>
        )
      })}
        </Content>
        <Buttons>
          <Link to="/new-in">
          <div className="in">
            Nova Entrada
          </div>
          </Link>
          <Link to="/new-out">
          <div className="out">
            Nova Saída
          </div>
          </Link>
        </Buttons>
  
      </Container>
    );};





