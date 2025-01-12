4;
/**
 * Нужно превратить файл в ts и указать типы аргументов и типы возвращаемого значения
 * */
export const removePlus: (string: string) => string = (string) => string.replace(/^\+/, '');

export const addPlus: (string: string) => string = (string) => `+${string}`;

export const removeFirstZeros: (value: string) => string = (value) => value.replace(/^(-)?[0]+(-?\d+.*)$/, '$1$2');

export const getBeautifulNumber: (value: string | number, separator: string) => string = (
  value: string | number,
  separator = ' '
) => value?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator);

export const round: (value: number, accuracy: number) => number = (value: number, accuracy = 2) => {
  const d = 10 ** accuracy;
  return Math.round(value * d) / d;
};

const transformRegexp =
  /(matrix\(-?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, -?\d+(\.\d+)?, )(-?\d+(\.\d+)?), (-?\d+(\.\d+)?)\)/;

type GetTransformFromCss = (transformFromCssProps: string) => { x: number; y: number };

export const getTransformFromCss: GetTransformFromCss = (transformCssString: string) => {
  const data = transformCssString.match(transformRegexp);
  if (!data) return { x: 0, y: 0 };
  return {
    x: parseInt(data[6], 10),
    y: parseInt(data[8], 10),
  };
};

type GetColorContrastValue = ([red, green, blue]: [number, number, number]) => number;

export const getColorContrastValue: GetColorContrastValue = ([red, green, blue]) =>
  // http://www.w3.org/TR/AERT#color-contrast
  Math.round((red * 299 + green * 587 + blue * 114) / 1000);

type GetContrastType = (contrastValue: number) => 'black' | 'white';
export const getContrastType: GetContrastType = (contrastValue) => (contrastValue > 125 ? 'black' : 'white');

export const shortColorRegExp = /^#[0-9a-f]{3}$/i;
export const longColorRegExp = /^#[0-9a-f]{6}$/i;

type CheckColor = (color: string) => never | undefined;

export const checkColor: CheckColor = (color) => {
  if (!longColorRegExp.test(color) && !shortColorRegExp.test(color)) throw new Error(`invalid hex color: ${color}`);
};

type Hex2rgb = (color: string) => [number, number, number];

export const hex2rgb: Hex2rgb = (color: string) => {
  checkColor(color);
  if (shortColorRegExp.test(color)) {
    const red = parseInt(color.substring(1, 2), 16);
    const green = parseInt(color.substring(2, 3), 16);
    const blue = parseInt(color.substring(3, 4), 16);
    return [red, green, blue];
  }
  const red = parseInt(color.substring(1, 3), 16);
  const green = parseInt(color.substring(3, 5), 16);
  const blue = parseInt(color.substring(5, 8), 16);
  return [red, green, blue];
};

type GetNumberedArray = <T>(arr: Array<T>) => Array<{ value: T; number: number }>;

export const getNumberedArray: GetNumberedArray = (arr) => arr.map((value, number) => ({ value, number }));

type ToStringArray = (arr: Array<{ value: unknown; number: number }>) => Array<string>;

export const toStringArray: ToStringArray = (arr) => arr.map(({ value, number }) => `${value}_${number}`);

type TCustomer = {
  id: string | number;
  name: string;
  age: number;
  isSubscribed: boolean;
};

type TransformCustomers = (customers: TCustomer[]) => { [key: TCustomer['id']]: Omit<TCustomer, 'id'> };

export const transformCustomers: TransformCustomers = (customers) => {
  return customers.reduce<ReturnType<TransformCustomers>>((acc, customer) => {
    acc[customer.id] = { name: customer.name, age: customer.age, isSubscribed: customer.isSubscribed };
    return acc;
  }, {});
};
