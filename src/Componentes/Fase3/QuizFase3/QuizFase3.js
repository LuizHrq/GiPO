import React, { useState } from 'react';
import './QuizFase3.css';
import { FaArrowRight, FaTrophy, FaSyncAlt} from 'react-icons/fa';

export default function QuizFase3() {
  const [questaoIndex, setquestaoIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [restartQuiz, setRestartQuiz] = useState(false);
  const [answeredQuestion, setAnsweredQuestion] = useState(false);

  const questoes = [
    {
      pergunta: '1) O que é o ROADSHOW?',
      alternativa1: 'A ) Um pitch de vendas.',
      alternativa2: 'B ) Um espetáculo apresentado na Broadway.',
      alternativa3: 'C ) Uma série de apresentações para possíveis investidores.',
      alternativa4: 'D ) Uma reunião semanal com os investidores.',
      resposta: 'alternativa3'
    },
    {
      pergunta: '2) Quais profissionais representam a empresa no ROADSHOW?',
      alternativa1: "A ) Somente o presidente.",
      alternativa2: 'B ) Somente o CEO.',
      alternativa3: 'C ) CEO e conselheiros de administração.',
      alternativa4: 'D ) Presidente e principais executivos.',
      resposta: 'alternativa4'
    },
    {
      pergunta: '3) Quais destes são potenciais investidores institucionais no ROADSHOW?',
      alternativa1: 'A ) Empresários e políticos.',
      alternativa2: 'B ) Seguradoras, bancos e fundos de investimento.',
      alternativa3: 'C ) Somente bancos.',
      alternativa4: 'D ) Pessoas físicas.',
      resposta: 'alternativa2'
    },
    {
      pergunta: '4) O que é um PROSPECTO?',
      alternativa1: 'A ) Um documento que não contém informações sobre a empresa e a oferta.',
      alternativa2: 'B ) Um documento que contém informações sobre a empresa e a oferta.',
      alternativa3: 'C ) Um planejamento da área financeira da empresa.',
      alternativa4: 'D ) Nenhuma das alternativas estão corretas.',
      resposta: 'alternativa2'
    },
    {
      pergunta: '5) Quais os dois eixos de um PROSPECTO?',
      alternativa1: 'A ) Lucro e prejuízo.',
      alternativa2: 'B ) Ebitida e lucro líquido.',
      alternativa3: 'C ) Empresa e a oferta em si.',
      alternativa4: 'D ) Business plan e valuation.',
      resposta: 'alternativa3'
    }
  ];

  const handleRestartQuiz = () => {
    setRestartQuiz(true);
    setquestaoIndex(0);
    setShowResult(false);
    setShowCongratulations(false);
    setAnswer('');
    setAnsweredQuestion(false);
  };

  const currentQuestion = questoes[questaoIndex];

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer === currentQuestion.resposta) {
      setIsCorrect(true);
      if (questaoIndex === questoes.length - 1) {
        setShowCongratulations(true);
      }else {
        setShowCongratulations(false);
      }
    } else {
      setIsCorrect(false);
      setShowCongratulations(false);
      setAnswer('');
    }
    setShowResult(true);
    setAnsweredQuestion(true);
  };

  const nextQuestion = () => {
    if (restartQuiz) {
      setRestartQuiz(false);
      setquestaoIndex(0);
      setShowResult(false);
      setShowCongratulations(false);
      setAnswer('');
    } else {
      setquestaoIndex(questaoIndex + 1);
      setAnswer('');
      setIsCorrect(false);
      setShowResult(false);
    }
  };

  const goToNextPhase = () => {
    window.location.href = "/fase4";
  };

  return (
    <>
        <div className='containerquiz'>

            <div className='cabecalhoteste'>
              <h1>Teste seu conhecimento:</h1>
            </div>

            <h2>Mediante os conteúdos abordados, responda:</h2>
            <p>{currentQuestion.pergunta}</p>

            <form className='formularioquiz' onSubmit={handleSubmit}>
              <label>
                  <input
                  type="radio"
                  value="alternativa1"
                  checked={answer === 'alternativa1'}
                  onChange={handleAnswerChange}/>
                  {currentQuestion.alternativa1}
              </label>
              <label>
                  <input
                  type="radio"
                  value="alternativa2"
                  checked={answer === 'alternativa2'}
                  onChange={handleAnswerChange}/>
                  {currentQuestion.alternativa2}
              </label>
              <label>
                  <input
                  type="radio"
                  value="alternativa3"
                  checked={answer === 'alternativa3'}
                  onChange={handleAnswerChange}/>
                  {currentQuestion.alternativa3}
              </label>
              <label>
                  <input
                  type="radio"
                  value="alternativa4"
                  checked={answer === 'alternativa4'}
                  onChange={handleAnswerChange}/>
                  {currentQuestion.alternativa4}
              </label>
              <br />

              <button type="submit">Verificar resposta</button>
            </form>

            {showResult && isCorrect && (<p className="quiz-result correct">Parabéns, sua resposta está correta!</p>)}
            {showResult && !isCorrect && (<p className="quiz-result incorrect">Resposta incorreta, Tente novamente.</p>)}

            {showCongratulations && (<div className="quiz-result-final">
              <FaTrophy className="icon-trophy"/>
              <p>Você concluiu essa fase com sucesso!</p>
              <FaTrophy className="icon-trophy"/></div>)}
        </div>

        <div className="containerbotoes">

          {showResult && answeredQuestion && (
              <button id="reiniciar" onClick={handleRestartQuiz}>
              <FaSyncAlt/><br/>
              <span>Reiniciar</span>
              </button>)}

          {/*MOSTRE OS BOTÕES PROX QUESTAO*/}
          {showResult && isCorrect && questaoIndex < questoes.length - 1 && (
            <button id="proxima-questao" onClick={nextQuestion}>
              <FaArrowRight /><br/>
              <span>Próxima pergunta</span>
            </button>
          )}

          {/*MOSTRE O BOTão PROX FASE*/}
          {showResult && isCorrect && questaoIndex === questoes.length - 1 && (
            <button id="proxima-fase" onClick={goToNextPhase}>
              <FaArrowRight />
              <br />
              <span>Próxima fase</span>
            </button>
          )}

        </div>
    </>
);}