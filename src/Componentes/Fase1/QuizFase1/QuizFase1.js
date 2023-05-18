import React, { useState } from 'react';
import './QuizFase1.css';
import { FaArrowRight } from 'react-icons/fa';

export default function Quiz1() {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false); // nova variável de estado para controlar a exibição da mensagem de resposta

  const pergunta = 'O que é um IPO?';
  const alternativa1 = 'A - Declaração de falência de uma companhia.';
  const alternativa2 = 'B - Investir em ações na Bolsa de Valores do Brasil.';
  const alternativa3 = 'C - Abertura do capital de valores de uma companhia na Bolsa de Valores do Brasil.';
  const alternativa4 = 'D - Todas as alternativas estão corretas.'

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === 'alternativa-correta') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };


  const nextFase = (e) => {
    e.preventDefault();
    if( isCorrect === true){
      window.location.href = "/fase2";
    }
  }


  return (
    <>
      <div className='containerquiz'>
          <div className='cabecalhoteste'>
              <h1>Teste seu conhecimento:</h1>
          </div>
          <p>Mediante os conteúdos abordados, responda: <br></br>{pergunta}</p>

          <form className='formularioquiz' onSubmit={handleSubmit}>
              <label>
                  <input type="radio" value="alternativa1" checked={answer === 'alternativa1'} onChange={handleAnswerChange} />
                  {alternativa1}
                  </label>
              <label>
                  <input type="radio" value="alternativa2" checked={answer === 'alternativa2'} onChange={handleAnswerChange} />
                  {alternativa2}
              </label>
              <label>
                  <input type="radio" value="alternativa-correta" checked={answer === 'alternativa-correta'} onChange={handleAnswerChange} />
                  {alternativa3}
              </label>
              <label>
                  <input type="radio" value="alternativa4" checked={answer === 'alternativa4'} onChange={handleAnswerChange} />
                  {alternativa4}
              </label>
              <br />

              <button type="submit">Verificar resposta</button>
          </form>
          {showResult && isCorrect && <p className="quiz-result correct">Parabéns, sua resposta está correta!</p>}
          {showResult && !isCorrect && <p className="quiz-result incorrect">Resposta incorreta.</p>}
      </div>
      

      {showResult && (
        <div className="proxima-fase">{isCorrect && (
          <button onClick={nextFase}><FaArrowRight/><br></br><span>Próxima fase</span>
          </button>)}
        </div>
      )}

    </>

  );
}
