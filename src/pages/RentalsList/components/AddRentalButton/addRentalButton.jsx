import { Button } from "./styles";
import { useNavigate } from "react-router-dom";

export default function AddRentalButton() {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate("/criarLocacao")}>Novo Empréstimo</Button>
  );
}
