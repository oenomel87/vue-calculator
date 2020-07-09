function formatNumber(number) {
  if(number == null) {
    return '';
  }
  const str = number + '';
  const leng = str.length;
  let format = '';
  for(let i = 0; i < leng; i++) {
    format = str[leng - i - 1] + format;
    if(i !== 0 && i % 3 === 2) {
      format = ',' + format;
    }
  }
  format = format[0] === ',' ? format.substring(1) : format;
  return format;
}

export default formatNumber;
