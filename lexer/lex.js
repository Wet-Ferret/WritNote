/**
 * Created by Ennis on 21/02/16.
 */
var lexer = new Lexer();


var doLexer = function () {
    // String handling
    var lexer = new Lexer();
    lexer.addRule(/[a-zA-Z0-9]+/, function (lexeme) {
        return arguments;
    }
    )
    // Whitespace Ignore
    lexer.addRule(/\S+/, function (lexeme) {

    }
    )

}

