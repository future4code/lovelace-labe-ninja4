import { JobCardContainer } from "./styled";
import { convertDate } from "../../utils/converDate";

const JobCard = ({ job, goToDetailPage, addToCart }) => {
  return (
    <JobCardContainer>
      <h3>{job.title}</h3>
      <p>
        <b>Preço:</b> R${job.price.toFixed(2)}
      </p>
      <p>
        <b>Prazo:</b> {convertDate(job.dueDate)}
      </p>
      <button onClick={() => goToDetailPage(job.id)}>Ver Detalhes</button>
      <button onClick={() => addToCart(job)}>Adicionar ao Carrinho</button>
    </JobCardContainer>
  );
};

export default JobCard;
