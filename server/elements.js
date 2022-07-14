class BaseElement {
  constructor(id) {
    this.id = id;
  }

  setValue(value) {
    this.value = value;
    return this;
  }
}

class RowElement extends BaseElement {
  type = 'Row';

  setElement(element) {
    this.element = element;
    return this;
  }
}

class TextElement extends BaseElement {
  type = 'Text';

  setText(text) {
    this.text = text;
    return this;
  }
}

class InputElement extends BaseElement {
  type = 'Input';

  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }
}

class RadioGroupElement extends BaseElement {
  type = 'RadioGroup';

  setItems(items) {
    this.items = items;
    return this;
  }
}

exports.RowElement = RowElement;
exports.TextElement = TextElement;
exports.InputElement = InputElement;
exports.RadioGroupElement = RadioGroupElement;
