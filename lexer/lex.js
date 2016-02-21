/**
 * Created by Ennis on 21/02/16.
 */
var lexer = new Lexer();


var doLexer = function () {
    var lexer = new Lexer();
    lexer.addRule(/[a-zA-Z0-9]+/, function (lexeme) {
        return lexeme;
    }
    )
}

