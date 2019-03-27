var counter =1;

describe('', ()=> {
    var description= "EmailValidation - Null input test\n";    
    it('', ()=> {
        var parameter="";
        var result = ValidateEmail(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Input '' should return false");
        counter++;
        expect(result).toBe(false);

    });
});

describe('', ()=> {
    var description= "EmailValidation - short input test\n";
    it('', ()=> {
        var parameter="a";
        var result = ValidateEmail(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Emails shouldn't be short. Testing with " + parameter);
        console.log("Result should return false")
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
        console.log("Testing with 'ab.com'");
        console.log("Invalid email input should return false");
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
        console.log("Testing with " + parameter);
        console.log("Invalid email input should return false");
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
        console.log("Testing username with ''");
        console.log("Empty username should return false");
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
        console.log("Testing username with 'a'");
        console.log("Invalid username should return false");
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
        console.log("Testing username with '1abcdefg'");
        console.log("Usernames shouldn't begin with a number");
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
        console.log("Testing with 'ABC'");
        console.log("Usernames shouldn't be short");
        counter++;
        expect(result).toBe("abc");

    });
});
describe('', ()=> {
    var description= "PasswordValidation - Empty input test\n";    
    it('', ()=> {
        var parameter="";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing password with ''");
        console.log("Password shouldn't be empty");
        counter++;
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "PasswordValidation - short input test\n";    
    it('', ()=> {
        var parameter="1a";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing password with '1a'");
        console.log("Short passwords aren't accepted");
        counter++;
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "PasswordValidation - should contain numbers test\n";    
    it('', ()=> {
        var parameter="AbCdEf";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing password with 'AbCdEf'");
        console.log("Passwords must contain numbers");
        counter++;
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "PasswordValidation - should contain capital letters test\n";    
    it('', ()=> {
        var parameter="1abcdefg";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing password with '1abcdefg'");
        console.log("Passwords must contain at least 1 capital letter");
        counter++;
        expect(result).toBe(false);

    });
});
describe('', ()=> {
    var description= "PasswordValidation - should contain numbers&capital letters test\n";    
    it('', ()=> {
        var parameter="AbCdEf123";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing password with 'AbCdEf123'");
        console.log("Passwords must contain at least 1 number and at least 1 capital letter");
        counter++;
        expect(result).toBe(true);

    });
});
describe('', ()=> {
    var description= "TweetContent - empty content test\n";
    it('', ()=> {
        var parameter="";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing Tweets with ''");
        console.log("Tweets shouldn't be empty");
        counter++;
        expect(result).toBe(false);
    });
});
describe('', ()=> {
    var description= "TweetContent - short length content test\n";    
    it('', ()=> {
        var parameter="A";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing Tweets with 'A'");
        console.log("Tweets must not be short");
        counter++;
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
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing Tweets with '" + parameter + "'");
        console.log("Tweets must not be very long");
        counter++;
        expect(result).toBe(false);
    });
});
describe('', ()=> {
    var description= "TweetContent - curse content test\n";    
    it('', ()=> {
        var parameter="asdasdhasfasdafuck";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing Tweets with '" + parameter + "'");
        console.log("Tweets must not contain curse words");
        counter++;
        expect(result).toBe(false);
    });
});
describe('', ()=> {
    var description= "TweetContent - curse content test\n";    
    it('', ()=> {
        var parameter="asdasdhasfaasdshitasdasd";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing Tweets with '" + parameter + "'");
        console.log("Tweets must not contain curse words");
        counter++;
        expect(result).toBe(false);
    });
});
describe('', ()=> {
    var description= "TweetContent - curse content test\n";    
    it('', ()=> {
        var parameter="asdasdhasfaasdsbitchezdasda";
        var result = ValidatePassword(parameter);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log("Testing Tweets with '" + parameter + "'");
        console.log("Tweets must not contain curse words");
        counter++;
        expect(result).toBe(false);
    });
});

describe('', ()=> {
    var description= "Testing Like Feature\n";    
    it('', ()=> {
        var username = "Filip"
        var tweetID = 11;
        var result = userLikesTweet(username, tweetID);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log(`User '${username}' likes Tweet ID '${tweetID}`);
        counter++;
        expect(result).toBe(true);
    });
});

describe('', ()=> {
    var description= "Testing Like Feature\n";    
    it('', ()=> {
        var username = "Filip";
        var tweetID = 4;
        var result = userDoesntLikeTweet(username, tweetID);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log(`User '${username}' doesn't like Tweet ID '${tweetID}'`);
        counter++;
        expect(result).toBe(false);
    });
});

describe('', ()=> {
    var description= "Testing Search Feature\n";    
    it('', ()=> {
        var query = "THIRD"
        var result = searchForTweet(query);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log(`Testing Search with query '${query}'`);
        counter++;
        expect(result).toBe(4);
    });
});

describe('', ()=> {
    var description= "Testing Following Feature\n";    
    it('', ()=> {
        var user = "user1"
        var following = "test2"
        var result = userFollows(user, following);
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log(`User '${user}' follows user '${following}'`);
        counter++;
        expect(result).toBe(true);
    });
});

describe('', ()=> {
    var description= "Testing Tweet Feature\n";    
    it('', ()=> {
        var tweet = "quick maths"
        var user = "test2"
        var result = userTweeted(user, tweet)
        console.log("Testing: test no"+counter+", comment: "+description);
        console.log(`User '${user}' has tweeted '${tweet}'`);
        counter++;
        expect(result).toBe(true);
    });
});