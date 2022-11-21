import Logo from "../components/Logo/Logo.js";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Container, Input, Button, Form, StyledLink} from "../styles/styles.js";
import {Url} from "../services/Api.js";
import { useState } from "react";




export default function SignUp() {
    const [formData, setFormData] = useState({ name: '',email: '', password: '', repeatPassword: '' });
    const [isLoading, setIsLoading] = useState(false);
  
   
    const navigate = useNavigate();
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    function handleSubmit() {
      
  
      setIsLoading(true);
      const promise = axios.post(`${Url}/sign-up`, { ...formData });
     
      promise.then((response) => {
        setIsLoading(false);
        navigate("/");
      });
      promise.catch((err) => {
        setIsLoading(false);
  
        alert(err.response.message);
      });
      console.log(formData);
    }
  
    return (
      <Container>
        <Logo />
  
        <Form onSubmit={handleSubmit}>
        <Input
            type="name"
            placeholder="nome"
            name="name"
            onChange={handleChange}
            value={formData.name}
            disabled={isLoading}
            required
          />
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
                <Input
            type="password"
            placeholder="repita a senha"
            name="repeatPassword"
            onChange={handleChange}
            value={formData.repeatPassword}
            disabled={isLoading}
            required
          />
      
  
        </Form>


        <Button type="submit" disabled={isLoading} onClick={handleSubmit}>
            Cadastrar
          </Button>

        <StyledLink to="/">
          Já tem uma conta? Então, faça Login!
        </StyledLink>
      </Container>
    );};





