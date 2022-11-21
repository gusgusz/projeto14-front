import { Container, Input, Button, Form } from "../styles/styles";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Url} from "../services/Api";
import { UserContext } from "../App";
import axios from "axios";

export default function NewIn() {

    const [formData, setFormData] = useState({ value: 0, titleDescription: "", description: "", type: "in" });
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(UserContext);
   
 
   
    const navigate = useNavigate();
  
    function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  
    function handleSubmit() {
      
  
      setIsLoading(true);
      const promise = axios.post(`${Url}/new-in`,  formData, {headers: {authorization: `Bearer ${user.token}`}});
     
      promise.then((response) => {
        setIsLoading(false);
        navigate("/accounts");
      });
      promise.catch((err) => {
        setIsLoading(false);
  
        console.log("o erro ta aqui",err);
      });
      
    }
  


    return(
        <Container>
            <h1>Nova Entrada</h1>
            <Form>

            <Input
            type="number"
            placeholder="valor"
            name="value"
            onChange={handleChange}
            value={formData.value}
            disabled={isLoading}
            required
          />
          <Input
            type="text"
            placeholder="Título"
            name="titleDescription"
            onChange={handleChange}
            value={formData.titleDescription}
            disabled={isLoading}
            required
          />
            <Input
            type="text"
            placeholder="Descrição"
            name="description"
            onChange={handleChange}
            value={formData.description}
            disabled={isLoading}
            required
          />
  
            </Form>

            <Button onClick={handleSubmit} disabled={isLoading}>Salvar Entrada</Button>
        </Container>
    )
}