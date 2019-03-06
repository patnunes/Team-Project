var counter =1;
var description= "Test "

describe(description + counter, ()=> {
    
    it('should return true', ()=> {
        var parameter=true;
        var result = testFunc(parameter);
        console.log("Testing "+description+" "+counter );
        counter++;
        expect(result).toBe(true);

    });
});