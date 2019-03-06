var counter =1;

describe('', ()=> {
    var description= "\n";    
    it('', ()=> {
        var parameter=true;
        var result = testFunc(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        counter++;
        expect(result).toBe(true);

    });
});

describe('', ()=> {
    var description= "EmailValidation1 - Null input test\n";    
    it('', ()=> {
        var parameter="";
        var result = ValidateEmail(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        counter++;
        expect(result).toBe(false);

    });
});

describe('', ()=> {
    var description= "EmailValidation2 - short input test\n";    
    it('', ()=> {
        var parameter="a";
        var result = ValidateEmail(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        counter++;
        expect(result).toBe(false);

    });
});

describe('', ()=> {
    var description= "EmailValidation3 - without @ input test\n";    
    it('', ()=> {
        var parameter="ab.com";
        var result = ValidateEmail(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        counter++;
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "EmailValidation4 - without . input test\n";    
    it('', ()=> {
        var parameter="ab@abdozdakcom";
        var result = ValidateEmail(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        counter++;
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "UsernameValidation - Empty input test\n";    
    it('', ()=> {
        var parameter="";
        var result = ValidateUsername(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        counter++;
        expect(result).toBe(false);

    });
});

describe('', ()=> {
    var description= "UsernameValidation - short input test\n";    
    it('', ()=> {
        var parameter="a";
        var result = ValidateUsername(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        counter++;
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "UsernameValidation - not to start with numbers test\n";    
    it('', ()=> {
        var parameter="1abcdefg";
        var result = ValidateUsername(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        counter++;
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "UsernameValidation - short input test\n";    
    it('', ()=> {
        var parameter="ABC";
        var result = ValidateUsername(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        counter++;
        expect(result).toBe("abc");

    });
});