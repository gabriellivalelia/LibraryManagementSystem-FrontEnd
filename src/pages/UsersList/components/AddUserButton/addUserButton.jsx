import { Button } from "./styles";
import { useNavigate } from "react-router-dom";

export default function AddBookButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/cadastrarUsuario")}>
      Cadastrar Usuário
    </Button>
  );
}
