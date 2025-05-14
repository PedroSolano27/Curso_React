// Formulário de Avaliação
import {BsFillEmojiFrownFill, BsFillEmojiNeutralFill, BsFillEmojiSmileFill, BsFillEmojiHeartEyesFill} from "react-icons/bs";

function ReviewForm({ data, update }) {
    return (
      <section className="review-form">
          <section className="form-control score-container">
            <label className="radio-container">
              <input type="radio" value="unsatisfied" name="review" 
                required checked={data.review === "unsatisfied"} onChange={function(e){update("review", e.target.value)}}/>
              <BsFillEmojiFrownFill/>
              <p>Insatisfeito</p>
            </label>

            <label className="radio-container">
              <input type="radio" value="neutral" name="review" 
                required checked={data.review === "neutral"} onChange={function(e){update("review", e.target.value)}}/>
              <BsFillEmojiNeutralFill/>
              <p>Neutro</p>
            </label>

            <label className="radio-container">
              <input type="radio" value="satisfied" name="review" 
                required checked={data.review === "satisfied"} onChange={function(e){update("review", e.target.value)}}/>
              <BsFillEmojiSmileFill/>
              <p>Satisfeito</p>
            </label>

            <label className="radio-container">
              <input type="radio" value="very-satisfied" name="review" 
                required checked={data.review === "very-satisfied"} onChange={function(e){update("review", e.target.value)}}/>
              <BsFillEmojiHeartEyesFill/>
              <p>Muito Satisfeito</p>
            </label>
          </section>

          <section className="form-control">
            <label htmlFor="comment">Comentário:</label>
            <textarea name="comment" id="comment" placeholder="Deixe seu comentário aqui..." 
              required value={data.comment || ""} onChange={function(e){update("comment", e.target.value)}}></textarea>
          </section>
      </section>
    );
  }
  
  export default ReviewForm;