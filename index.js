function decode(param) {
  const stringified = decodeURIComponent(param);
  const parts = stringified.split('_');
  const obj = {};
  parts.forEach((part) => {
    if (!part) {
      return;
    }
    const [key, ...value] = part.split('-');
    obj[key] = value.join('-');
  });
  return obj;
}

function encode(param) {
  const stringified = Object.keys(param)
    .map((key) => `${key}-${param[key]}`)
    .join('_');
  return encodeURIComponent(stringified);
}

module.exports = {
  decode,
  encode,
};
