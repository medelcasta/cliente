function ADN_a_ARN(adn) {
    let arn = " ";
    for (let i = 0; i < adn.length; i++) {
        let base = adn[i]; 
        if (base === 'T') {
            arn += 'U';
        } else {
            arn += base;
        }
    }

    return arn; 
}

console.log(ADN_a_ARN("GCAT"));
console.log(ADN_a_ARN("GCATCGTA")); 
console.log(ADN_a_ARN(""));           
console.log(ADN_a_ARN("TTAGCG"))