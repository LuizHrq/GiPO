import React, { useState } from 'react';
import './QuizFase2.css';

function Quiz2() {
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false); // nova variável de estado para controlar a exibição da mensagem de resposta

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === 'alternativa correta') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowResult(true);
  };

  return (
    <div className='containerquiz'>
        <div className='cabecalhoteste'>
            <h1>Teste seu conhecimento:</h1>
        </div>
      <p>Mediante os conteúdos abordados, responda: <br></br>O que é um IPO? </p>

        <form className='formularioquiz' onSubmit={handleSubmit}>
            <label>
                <input type="radio" value="alternativa 1" checked={answer === 'alternativa 1'} onChange={handleAnswerChange} />
                A - Declaração de falência de uma companhia.
                </label>
            <label>
                <input type="radio" value="alternativa 2" checked={answer === 'alternativa 2'} onChange={handleAnswerChange} />
                B - Investir em ações na Bolsa de Valores do Brasil.
            </label>
            <label>
                <input type="radio" value="alternativa correta" checked={answer === 'alternativa correta'} onChange={handleAnswerChange} />
                C - Abertura do capital de valores de uma companhia na Bolsa de Valores do Brasil.
            </label>
            <label>
                <input type="radio" value="alternativa 4" checked={answer === 'alternativa 4'} onChange={handleAnswerChange} />
                D - Todas as alternativas estão corretas.
            </label>
            <br />

            <button type="submit">Verificar resposta</button>
        </form>
        {showResult && isCorrect && <p className="quiz-result correct">Parabéns, sua resposta está correta!</p>}
        {showResult && !isCorrect && <p className="quiz-result incorrect">Resposta incorreta.</p>}
    </div>
  );
}

export default Quiz2;