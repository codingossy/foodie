export function calculateNairaEquivalent(dollarPrice, exchangeRate = 1600) {
    const nairaEquivalent = (dollarPrice * exchangeRate).toLocaleString('en-NG', {
        style: 'currency',
        currency: 'NGN',
        minimumFractionDigits: 0,
    });
    return nairaEquivalent;
}
