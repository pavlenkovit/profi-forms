exports.specialization = {
  title: 'Какую специальность хотите подтвердить?',
  elements: [
    {
      id: 'kind-of-psychology',
      type: 'RadioGroup',
      items: [
        {id: 'adult-psychology', value: 'Психология для взрослых'},
        {id: 'kids-psychology', value: 'Детская психология'},
        {
          id: 'family-psychology',
          value: 'Семейная психология и работа с парами',
        },
        {id: 'neuropsychology', value: 'Нейропсихология'},
      ],
    },
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
    {
      id: 'education-info-row',
      type: 'Row',
      element: {
        id: 'education-info',
        type: 'Text',
        text: 'Чтобы откликаться на заказы по опсихологии, нужно психологическое или медицинское высшее образование.',
      },
    },
    {
      id: 'university-row',
      type: 'Row',
      element: {
        id: 'university',
        type: 'Input',
        placeholder: 'ВУЗ',
      },
    },
    {
      id: 'speciality-row',
      type: 'Row',
      element: {
        id: 'speciality',
        type: 'Input',
        placeholder: 'Специальность',
      },
    },
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
    {
      id: 'experience-list',
      type: 'RadioGroup',
      items: [
        {id: 'none', value: 'Нет такого опыта'},
        {id: 'less-than-100', value: 'Менее 100 часов'},
        {id: 'from-100-to-250', value: 'От 100 до 250 часов'},
        {id: 'more-than-250', value: 'Более 250 часов'},
      ],
    },
  ],
  navigations: [
    {
      type: 'secondary',
      text: 'Назад',
      stepId: 'education',
    },
    {
      type: 'primary',
      text: 'Отпарвить',
      stepId: 'final',
    },
  ],
};

exports.final = {
  title: 'Проверяем информацию',
  elements: [
    {
      id: 'final-info',
      type: 'Text',
      text: 'Проверка может занять до трёх дней. Но обычно мы успеваем быстрее.',
    },
  ],
};
