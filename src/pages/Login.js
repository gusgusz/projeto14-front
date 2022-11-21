import Logo from "../components/Logo/Logo.js";
import { useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import { UserContext } from "../App.js";
import {Container, Input, Button, Form, StyledLink} from "../styles/styles.js";
import { Link } from "react-router-dom";
import {Url} from "../services/Api.js";



export default function Login() {
  const {setUser} = useContext(UserContext);
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isLoading, setIsLoading] = useState(false);
   
    const navigate = useNavigate();
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    function handleSubmit() {
     
  
      setIsLoading(true);
      const promise = axios.post(`${Url}/sign-in`,{ ...formData });
      promise.then((response) => {
        setIsLoading(false);
  
        setUser(response.data);
        navigate("/accounts");
      });
      promise.catch(() => {
        setIsLoading(false);
  
        alert('Erro, tente novamente');
      });
      console.log(formData);
    }
  
    return (
      <Container>
        <Logo />
  
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            disabled={isLoading}
            required
          />
          <Input
            type="password"
            placeholder="senha"
            name="password"
            onChange={handleChange}
            value={formData.password}
            disabled={isLoading}
            required
          />
  
         
        </Form>

        <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
            Entrar
          </Button>
  
        <StyledLink to="/sign-up">
          Não tem uma conta? Cadastre-se!
        </StyledLink>
      </Container>
    );};





