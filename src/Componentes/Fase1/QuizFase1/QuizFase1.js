import React, { useState } from 'react';
import './QuizFase1.css';
import { FaArrowRight, FaTrophy, FaSyncAlt} from 'react-icons/fa';

export default function QuizFase1() {
  const [questaoIndex, setquestaoIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [restartQuiz, setRestartQuiz] = useState(false);
  const [answeredQuestion, setAnsweredQuestion] = useState(false);

  const questoes = [
    {
      pergunta: '1) O que é um IPO?',
      alternativa1: 'A ) Declaração de falência de uma companhia.',
      alternativa2: 'B ) Investir em ações na bolsa de valores do Brasil.',
      alternativa3: 'C ) Abertura do capital de valores de uma companhia na bolsa de valores.',
      alternativa4: 'D ) Todas as alternativas estão corretas.',
      resposta: 'alternativa3'
    },
    {
      pergunta: '2) Qual o significado em português da sigla IPO?',
      alternativa1: "A ) Iniciar Postagens de Oportunidades",
      alternativa2: 'B ) Operações Privadas de Investimento',
      alternativa3: 'C ) Initial Public Offering',
      alternativa4: 'D ) Oferta Pública Inicial',
      resposta: 'alternativa4'
    },
    {
      pergunta: '3) Qual o nome que a companhia passa a ter ao abrir seu capital?',
      alternativa1: 'A ) S.A - Sociedade Anônima',
      alternativa2: 'B ) S.A - Sociedade Aberta',
      alternativa3: 'C ) S.I - Sociedade Ilimitada',
      alternativa4: 'D ) S.L - Sociedade Limitada',
      resposta: 'alternativa1'
    },
    {
      pergunta: '4) Quais orgãos regulamentam o processo de IPO no Brasil?',
      alternativa1: 'A ) CVM e B3',
      alternativa2: 'B ) CREA e B3',
      alternativa3: 'C ) OAB e CVM',
      alternativa4: 'D ) Governo Federal e B3',
      resposta: 'alternativa1'
    },
    {
      pergunta: '5) O que significa CVM?',
      alternativa1: 'A ) Comprar e Vender Mantimentos',
      alternativa2: 'B ) Comissão de Valores Mobiliários',
      alternativa3: 'C ) Comissão das Vendas Mobiliárias',
      alternativa4: 'D ) Comissão de Vendas de Mercadorias',
      resposta: 'alternativa2'
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
    }
    setShowResult(true);
    setAnsweredQuestion(true);
  };

  // const nextQuestion = () => {
  //   setquestaoIndex(questaoIndex + 1);
  //   setAnswer('');
  //   setIsCorrect(false);
  //   setShowResult(false);
  // };

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
    window.location.href = "/fase2";
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
                onChange={handleAnswerChange}
                />
                {currentQuestion.alternativa1}
            </label>
            <label>
                <input
                type="radio"
                value="alternativa2"
                checked={answer === 'alternativa2'}
                onChange={handleAnswerChange}
                />
                {currentQuestion.alternativa2}
            </label>
            <label>
                <input
                type="radio"
                value="alternativa3"
                checked={answer === 'alternativa3'}
                onChange={handleAnswerChange}
                />
                {currentQuestion.alternativa3}
            </label>
            <label>
                <input
                type="radio"
                value="alternativa4"
                checked={answer === 'alternativa4'}
                onChange={handleAnswerChange}
                />
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

        <div className="containebotoes">

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