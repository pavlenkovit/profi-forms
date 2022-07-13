export type ElementBase<Type, ExtraProps> = {
  type: Type;
  id: string;
} & ExtraProps;

export enum ElementType {
  text = 'Text',
  input = 'Input',
  radioGroup = 'RadioGroup',
  row = 'Row',
}

export type ElementText = ElementBase<
  ElementType.text,
  {
    text: string;
  }
>;

export type ElementInput = ElementBase<
  ElementType.input,
  {
    value?: string;
    placeholder: string;
  }
>;

export type ElementRadioGroup = ElementBase<
  ElementType.radioGroup,
  {
    activeId?: string;
    items: {
      id: string;
      value: string;
    }[];
  }
>;

export type ElementRow = ElementBase<
  ElementType.row,
  {
    element: ElementVariant;
  }
>;

export type ElementVariant =
  | ElementText
  | ElementInput
  | ElementRadioGroup
  | ElementRow;
