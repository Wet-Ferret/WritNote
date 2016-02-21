/**
 * Created by Ennis on 21/02/16.
 */

// Set lexer to read from user-input
lexer.setInput(document.getElementById('user_output').value = lexer.lex());

// Whitespace Ignore
lexer.addRule(/\s+/, function () {

    }
);
// Add string handling
lexer.addRule(/[a-zA-Z0-9]+/, function (lexeme) {
        return lexeme;
    }
);
// Integers
lexer.addRule(/[0-9]+\.[0-9]+/, function (lexeme) {
    return lexeme;
    }
);
// Change text function
var changeText = function () {
    doLexer();
};


