const {sum,fromEuroToDollar,fromDollarToYen,fromYenToPound} = require('./app.js');
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.58333333333334 yens", function(){
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(106.58333333333334); 
})

test("One yen should be 0.006254886630179828 pounds", function(){
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBe(0.006254886630179828); 
})