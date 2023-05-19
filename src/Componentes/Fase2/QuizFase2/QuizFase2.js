import React, { useState } from 'react';
import './QuizFase2.css';
import { FaArrowRight, FaTrophy, FaSyncAlt} from 'react-icons/fa';

export default function QuizFase2() {
  const [questaoIndex, setquestaoIndex] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [restartQuiz, setRestartQuiz] = useState(false);
  const [answeredQuestion, setAnsweredQuestion] = useState(false);

  const questoes = [
    {
      pergunta: '1) Após a empresa decidir abrir seu capital, o que ela deve fazer?',
      alternativa1: 'A ) Contatar a B3 e a CVM.',
      alternativa2: 'B ) Fazer um planejamento e auditoria',
      alternativa3: 'C ) Contratar uma empresa de auditoria e contabilidade.',
      alternativa4: 'D ) Nenhuma das alternativas.',
      resposta: 'alternativa2'
    },
    {
      pergunta: '2) Quantos anos de balanços auditados precisa-se apresentar?',
      alternativa1: "A ) 3 anos.",
      alternativa2: 'B ) Nenhum, não há necessidade.',
      alternativa3: 'C ) 1 ano.',
      alternativa4: 'D ) 3 anos e 6 meses.',
      resposta: 'alternativa1'
    },
    {
      pergunta: '3) Do início ao fim, qual a média de tempo para abrir o IPO?',
      alternativa1: 'A ) 10 meses.',
      alternativa2: 'B ) 36 meses.',
      alternativa3: 'C ) 12 meses.',
      alternativa4: 'D ) 24 meses.',
      resposta: 'alternativa3'
    },
    {
      pergunta: '4) De que forma a etapa de auditoria pode ficar mais fácil?',
      alternativa1: 'A ) Se a empresa já tem um setor de auditoria.',
      alternativa2: 'B ) Se a empresa deixou atrasar apenas 1 ano de balanço.',
      alternativa3: 'C ) Através do uso regular do Excel.',
      alternativa4: 'D ) Se a empresa já tem os balanços auditados.',
      resposta: 'alternativa4'
    },
    {
      pergunta: '5) O que a empresa deverá divulgar ao mercado após abrir seu capital?',
      alternativa1: 'A ) Promoções e novos produtos.',
      alternativa2: 'B ) Seu lucro mensal.',
      alternativa3: 'C ) Resultados trimestrais.',
      alternativa4: 'D ) Percentual de ações que foram vendidas.',
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
    window.location.href = "/fase3";
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