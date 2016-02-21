/**
 * Created by Ennis on 21/02/16.
 */
// Initialize Lexer
var lexer = new Lexer();
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


var doLexer = function () {
    for (i = 0; i < document.getElementById('user_input').value.length; i++) {
        try {
            document.getElementById('user_output').value = lexer.lex();
        } catch (e) {
            console.log(e);
        }
    }
};

