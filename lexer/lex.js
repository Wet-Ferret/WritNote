/**
 * Created by Ennis on 21/02/16.
 */
var lexer = new Lexer();

lexer.addRule(/\S+/, function () {
    }
);

lexer.addRule(/[a-zA-Z0-9]+/, function (lexeme) {
    for (var i = 0; i <= (arguments.length()-1); i++) {
        console.log(arguments[i]);
    }
    }
);


var doLexer = parseToMD();

var parseToMD = function () {
    var lexer = new Lexer();
    lexer.addRule(/[a-zA-Z0-9]+/, function (lexeme) {
        return lexeme;
    }
    )
}