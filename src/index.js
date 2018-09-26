// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let H, Q, D, N, P, remainder, result = {};
    if(currency <= 0) {
        return {};
    }

    if(currency > 10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};        
    }

    H = Math.floor(currency / 50);
    remainder = currency % 50;
    Q = Math.floor(remainder / 25);
    remainder = remainder % 25;
    D = Math.floor(remainder / 10);
    remainder = remainder % 10;
    N = Math.floor(remainder / 5);
    remainder = remainder % 5;
    P = remainder / 1;

    if(H != 0) {
        result['H'] = H;
    }
    if(Q != 0) {
        result['Q'] = Q;
    }
    if(D != 0) {
        result['D'] = D;
    }
    if(N != 0) {
        result['N'] = N;
    }
    if(P != 0) {
        result['P'] = P;
    }
    return result;
}
