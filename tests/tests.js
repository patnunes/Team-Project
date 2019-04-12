var counter =1;

describe('', ()=> {
    var description= "EmailValidation - Null input test\n";    
    it('', ()=> {
        var parameter="";
        var result = ValidateEmail(parameter);
        console.log(`Testing #${counter++}: ${description}\nInput '' should return false`);
        expect(result).toBe(false);
    });
});

describe('', ()=> {
    var description= "EmailValidation - short input test\n";
    it('', ()=> {
        var parameter="a";
        var result = ValidateEmail(parameter);
        console.log(`Testing #${counter++}: ${description}\nEmails shouldn't be short.\n
        Testing with '${parameter}'\n
        Result should return false`);
        expect(result).toBe(false);
    });
});

describe('', ()=> {
    var description= "EmailValidation3 - without @ input test\n";    
    it('', ()=> {
        var parameter="ab.com";
        var result = ValidateEmail(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting with '${parameter}'\n
        Invalid email input should return false`);
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "EmailValidation4 - without . input test\n";    
    it('', ()=> {
        var parameter="ab@abdozdakcom";
        var result = ValidateEmail(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting with '${parameter}'\n
        Invalid email input should return false`);
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "UsernameValidation - Empty input test\n";    
    it('', ()=> {
        var parameter="";
        var result = ValidateUsername(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting username with ''\n
        Empty username should return false`);
        expect(result).toBe(false);
    });
});

describe('', ()=> {
    var description= "UsernameValidation - short input test\n";    
    it('', ()=> {
        var parameter="a";
        var result = ValidateUsername(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting username with '${parameter}'\n
        Invalid username should return false`);
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "UsernameValidation - not to start with numbers test\n";    
    it('', ()=> {
        var parameter="1abcdefg";
        var result = ValidateUsername(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting username with '${parameter}'\n
        Usernames shouldn't begin with a number`);
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "UsernameValidation - short input test\n";    
    it('', ()=> {
        var parameter="ABC";
        var result = ValidateUsername(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting with '${parameter}'\n
        Usernames shouldn't be short`);
        expect(result).toBe("abc");

    });
});
describe('', ()=> {
    var description= "PasswordValidation - Empty input test\n";    
    it('', ()=> {
        var parameter="";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting password with ''\n
        Password shouldn't be empty`);
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "PasswordValidation - short input test\n";    
    it('', ()=> {
        var parameter="1a";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting password with '${parameter}'\n
        Short passwords aren't accepted`);
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "PasswordValidation - should contain numbers test\n";    
    it('', ()=> {
        var parameter="AbCdEf";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting password with '${parameter}'\n
        Passwords must contain numbers`);
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "PasswordValidation - should contain capital letters test\n";    
    it('', ()=> {
        var parameter="1abcdefg";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting password with '${parameter}'\n
        Passwords must contain at least 1 capital letter`);
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "PasswordValidation - should contain numbers&capital letters test\n";    
    it('', ()=> {
        var parameter="AbCdEf123";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting password with '${parameter}'
        Passwords must contain at least 1 number and at least 1 capital letter`);
        expect(result).toBe(true);

    });
});
describe('', ()=> {
    var description= "TweetContent - empty content test\n";
    it('', ()=> {
        var parameter="";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting Tweets with ''\n
        Tweets shouldn't be empty`);
        expect(result).toBe(false);
    });
});
describe('', ()=> {
    var description= "TweetContent - short length content test\n";    
    it('', ()=> {
        var parameter="A";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting Tweets with '${parameter}'\n
        Tweets must not be short`);
        expect(result).toBe(false);
    });
});
describe('', ()=> {
    var description= "TweetContent - long length content test\n";    
    it('', ()=> {
        var parameter="ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG\
        ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG\
        ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG\
        ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG\
        ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG\
        ABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFGABCDEFG";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting Tweets with '${parameter}'\n
        Tweets must not be very long`);
        expect(result).toBe(false);
    });
});
describe('', ()=> {
    var description= "TweetContent - curse content test\n";    
    it('', ()=> {
        var parameter="asdasdhasfasdafuck";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting Tweets with '${parameter}'\n
        Tweets must not contain curse words`);
        expect(result).toBe(false);
    });
});
describe('', ()=> {
    var description= "TweetContent - curse content test\n";    
    it('', ()=> {
        var parameter="asdasdhasfaasdshitasdasd";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter}: ${description}\nTesting Tweets with '${parameter}'\n
        Tweets must not contain curse words`);
        expect(result).toBe(false);
    });
});
describe('', ()=> {
    var description= "TweetContent - curse content test\n";    
    it('', ()=> {
        var parameter="asdasdhasfaasdsbitchezdasda";
        var result = ValidatePassword(parameter);
        console.log(`Testing #${counter++}: ${description}\nTesting Tweets with '${parameter}'\n
        Tweets must not contain curse words`);
        expect(result).toBe(false);
    });
});

describe('', ()=> {
    var description= "Testing Like Feature\n";    
    it('', ()=> {
        var username = "NoahForReal"
        var tweetID = 45;
        var result = userLikesTweet(username, tweetID);
        console.log(`Testing #${counter++}: ${description}\nUser '${username}' likes Tweet ID '${tweetID}`);
        expect(result).toBe(true);
    });
});

describe('', ()=> {
    var description= "Testing Like Feature\n";    
    it('', ()=> {
        var username = "NoahForReal";
        var tweetID = 450;
        var result = userDoesntLikeTweet(username, tweetID);
        console.log(`Testing #${counter++}: ${description}\nUser '${username}' doesn't like Tweet ID '${tweetID}'`);
        expect(result).toBe(false);
    });
});

describe('', ()=> {
    var description= "Testing Search Feature\n";    
    it('', ()=> {
        var query = "lion"
        var result = searchForTweet(query);
        console.log(`Testing #${counter++}: ${description}\nTesting Search with query '${query}'`);
        expect(result).toBe(22);
    });
});

describe('', ()=> {
    var description= "Testing Following Feature\n";    
    it('', ()=> {
        var user = "NoahForReal"
        var following = "alexalexalex"
        var result = userFollows(user, following);
        console.log(`Testing #${counter++}: ${description}\nUser '${user}' follows user '${following}'`);
        expect(result).toBe(true);
    });
});

describe('', ()=> {
    var description= "Testing Tweet Feature\n";    
    it('', ()=> {
        var tweet = "hi everyone"
        var user = "alexalexalex"
        var result = userTweeted(user, tweet)
        console.log(`Testing #${counter++}: ${description}\nUser '${user}' has tweeted '${tweet}'`);
        expect(result).toBe(true);
    });
});
