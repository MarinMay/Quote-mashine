'use strict';

(function () {
  var DATA_QUOTE = [
    {
      quote: 'Все испытывают страх в тот миг, когда могут изменить свою судьбу',
      autor: 'Пауло Коэльо'
    },
    {
      quote: 'Проблема в том, что вы постоянно думаете, будто у вас есть время.',
      autor: 'Будда'
    },
    {
      quote: 'Не важно, как часто вы видитесь — важно, что эти встречи значат для вас.',
      autor: 'Эрих Мария Ремарк'
    },
    {
      quote: 'Практически любые отношения со временем себя изживают. Люди меняются, и далеко не всегда в лучшую сторону.',
      autor: 'Олег Рой'
    },
    {
      quote: 'Забыть плохое — значит впустить хорошее.',
      autor: 'Аму Мом'
    },
    {
      quote: 'Он, видимо, готов был умереть скорее, чем признаться, что ему трудно.',
      autor: 'Лев Толстой'
    },
    {
      quote: 'Обычным оружием убивают только однажды, а словом убивают снова и снова.',
      autor: 'Терри Пратчетт'
    },
    {
      quote: 'Если моё отсутствие ничего не меняет в вашей жизни, то моё присутствие в ней уже не имеет никакого значения.',
      autor: 'Бернард Шоу'
    },
    {
      quote: 'Никогда человек не бывает доволен тем, что у него есть.',
      autor: 'Антон Чехов'
    },
    {
      quote: 'Вот он я. Лучше не будет. Бери или уходи.',
      autor: 'Чак Паланик'
    },
    {
      quote: 'Не тот велик, кто никогда не падал, а тот велик — кто падал и вставал.',
      autor: 'Конфуций'
    },
    {
      quote: 'Уже поздно возвращаться назад, чтобы все правильно начать, но еще не поздно устремиться вперед, чтобы правильно закончить.',
      autor: 'Ошо'
    },
    {
      quote: 'Если бы вы знали, как редко нас правильно понимают, вы бы чаще молчали.',
      autor: 'Гёте'
    },
    {
      quote: 'Люди говорят, что время проходит, а время говорит, что проходят люди.',
      autor: 'Тибетская мудрость'
    },
    {
      quote: 'Я всегда ищу в людях только хорошее. Плохое они сами покажут',
      autor: 'Владимир Высоцкий'
    },
    {
      quote: 'Хорошо, когда есть такой человек, с которым бесконечно хорошо.',
      autor: 'Л. Толстой'
    },
    {
      quote: 'Там, где кончается терпение, начинается выносливость.',
      autor: 'Конфуций'
    },
    {
      quote: 'Если хочешь понять жизнь, то перестань верить тому, что говорят и пишут, а наблюдай и чувствуй.',
      autor: 'Антон Чехов'
    },
    {
      quote: 'Замысел без действия — грезы. \n Действие без замысла — кошмарный сон',
      autor: 'Японская пословица'
    },
    {
      quote: 'Простота — одно из лучших качеств человека.',
      autor: 'Конфуций'
    }
  ];

  var buttonNext = document.querySelector('.next-quote');
  var quoteContainer = document.querySelector('.quote__text');
  var quoteSource = document.querySelector('.quote__source');
  var quoteWrapper = document.querySelector('.quote-wrapper');
  var startHeightQuoteWrapper = quoteWrapper.offsetHeight;
  var fontSize = Number(getComputedStyle(quoteContainer, null).getPropertyValue('font-size').slice(0, -2));
  var currentNumberQuote = 0;

  // усли текст не влезает в высоту блока - то уменьшает его знаяение
  function resizeText() {
    var newFontSize = fontSize;

    // обнуляет значение предыдущей цитаты
    quoteContainer.style.fontSize = fontSize + 'px';

    while (quoteWrapper.offsetHeight > startHeightQuoteWrapper) {
      newFontSize = newFontSize - 2;
      quoteContainer.style.fontSize = newFontSize + 'px';
    }
  }

  function getRandomNumber(maxNumber) {
    var randomNumber = Math.floor(Math.random() * maxNumber);
    if (randomNumber === currentNumberQuote) {
      getRandomNumber(maxNumber);
    }

    return randomNumber;
  }

  function onButtonNextClick() {
    var quoteCount = getRandomNumber(DATA_QUOTE.length);
    quoteContainer.textContent = DATA_QUOTE[quoteCount].quote;
    quoteSource.textContent = DATA_QUOTE[quoteCount].autor;
    resizeText();
    document.querySelector('meta[name="description"]').setAttribute('content', DATA_QUOTE[quoteCount].quote +" " + DATA_QUOTE[quoteCount].autor);
  }

  buttonNext.addEventListener('click', onButtonNextClick);

})();

