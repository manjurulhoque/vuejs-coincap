export const toCurrency = (number) => {
    const standardFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
  
    const expandedFormat = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 4
    });

    if (standardFormat.format(number) === '$0') {
        return expandedFormat.format(number);
    }
  
    return standardFormat.format(number);
};

export const toNumber = (number) => {
    return new Intl.NumberFormat().format(number);
}