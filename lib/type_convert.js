const regex = {
  integer: /^-?\d+$/,
  decimal: /^-?\d*\.?\d+$/,
  boolean: /^(true|false)$/,
  null: /^null$/,
  undefined: /^undefined$/,
};

const parseValue = (value) => {
  if (regex.integer.test(value)) {
    return parseInt(value, 10);
  } else if (regex.decimal.test(value)) {
    return parseFloat(value);
  } else if (regex.boolean.test(value)) {
    return value === 'true';
  } else if (regex.null.test(value)) {
    return null;
  } else if (regex.undefined.test(value)) {
    return undefined;
  }
  return value;
};

function convertObject (objectData) {
  const convertResult = {};
  Object.keys(objectData).filter(n => n).forEach((key) => {
    const value = objectData[key];
    convertResult[key] = Array.isArray(value) ? value.map(n => parseValue(n)) : parseValue(value);
  });
  return convertResult;
}

module.exports = {
  convertObject
};
