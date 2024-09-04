const isNumeric = (value: any): boolean => !isNaN(Number.parseFloat(value)) && isFinite(value);

export default isNumeric;
