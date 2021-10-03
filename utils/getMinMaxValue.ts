export const getMinMaxValue = (array: number[]) => {
  let min = null;
  let max = null;

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (!min || value < min) {
      min = value;
    }
    if (!max || value > max) {
      max = value;
    }
  }

  return {
    min,
    max,
  };
};

export const getStringInterval = (array: number[], unit: string) => {
  const { min, max } = getMinMaxValue(array);

  if (min !== max) {
    return `${min}${unit} -> ${max}${unit}`;
  }
  return `${min}${unit}`;
};
