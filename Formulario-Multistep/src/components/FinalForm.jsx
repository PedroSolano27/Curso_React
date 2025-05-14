// Formulário de Fim
import {BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill, BsFillEmojiHeartEyesFill} from "react-icons/bs";

function FinalForm({ data }) {
  const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied:<BsFillEmojiSmileFill/>,
    verySatisfied: <BsFillEmojiHeartEyesFill/>,
  }

  return (
    <section className="final-container">
        <h2>Falta pouco...</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque laudantium voluptates exercitationem architecto in vitae quod accusantium deleniti facere.</p>
        <p>Itaque beatae, amet cum accusantium perspiciatis maiores vitae deleniti et ipsum?</p>
        
        <h3>Resumo da avaliação de {data.name}</h3>

        <p className="review-data"><span>Satisfação:</span>{emojiData[data.review]}</p>
        <p className="review-data"><span>Comentário:</span> {data.comment}</p>
    </section>
  );
  }
  
  export default FinalForm;