/**
 * Created by Ennis on 21/02/16.
 */
// Initialize Lexer
var lexer = new Lexer();

// Whitespace Ignore
lexer.addRule(/\S+/, function () {

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
    lexer.setInput(document.getElementById('user_input').value);
    for (i = 0; i < document.getElementById('user_input').value.length; i++) {
        try {
            document.getElementById('user_output').value = lexer.lex() + i.toString();
        } catch (e) {
            console.log(e);
        }
    }
};

