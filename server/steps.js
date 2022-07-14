const {
  RowElement,
  TextElement,
  InputElement,
  RadioGroupElement,
} = require('./elements');

exports.specialization = {
  title: 'Какую специальность хотите подтвердить?',
  elements: [
    new RadioGroupElement('kind-of-psychology').setItems([
      {id: 'adult-psychology', value: 'Психология для взрослых'},
      {id: 'kids-psychology', value: 'Детская психология'},
      {
        id: 'family-psychology',
        value: 'Семейная психология и работа с парами',
      },
      {id: 'neuropsychology', value: 'Нейропсихология'},
    ]),
  ],
  navigations: [
    {
      type: 'primary',
      text: 'Продолжить',
      stepId: 'education',
    },
  ],
};

exports.education = {
  title: 'Какое у вас высшее образование?',
  elements: [
    new RowElement('education-info-row').setElement(
      new TextElement('education-info').setText(
        'Чтобы откликаться на заказы по опсихологии, нужно психологическое или медицинское высшее образование.',
      ),
    ),
    new RowElement('university-row').setElement(
      new InputElement('university').setPlaceholder('ВУЗ'),
    ),
    new RowElement('speciality-row').setElement(
      new InputElement('speciality').setPlaceholder('Специальность'),
    ),
  ],
  navigations: [
    {
      type: 'secondary',
      text: 'Назад',
      stepId: 'specialization',
    },
    {
      type: 'primary',
      text: 'Продолжить',
      stepId: 'experience',
    },
  ],
};

exports.experience = {
  title: 'Сколько часов индивидуальных консультаций вы провели?',
  elements: [
    new RadioGroupElement('experience-list').setItems([
      {id: 'none', value: 'Нет такого опыта'},
      {id: 'less-than-100', value: 'Менее 100 часов'},
      {id: 'from-100-to-250', value: 'От 100 до 250 часов'},
      {id: 'more-than-250', value: 'Более 250 часов'},
    ]),
  ],
  navigations: [
    {
      type: 'secondary',
      text: 'Назад',
      stepId: 'education',
    },
    {
      type: 'primary',
      text: 'Отправить',
      stepId: 'final',
    },
  ],
};

exports.final = {
  title: 'Проверяем информацию',
  elements: [
    new TextElement('final-info').setText(
      'Проверка может занять до трёх дней. Но обычно мы успеваем быстрее.',
    ),
  ],
};
