/* just testing */

/* Lex grammar */

%lex
/* Named REGEXPs */
/* Going to comment everything cause this shit is impossible to understand otherwise */
// Integer Handling
Int [0-9]
Ints [0-9]+
NonZeroInt [1-9]
// Done that
// Now for Scientific/Computer integer shit
SignedInt [+-]?[0-9]+
ExponentIntMod [eE]
// Now for what the user will actually enter
// Her der
IntLiteral [0]| ({NonZeroInt}{Ints}*)
ExponentInt {ExponentIntMod}{SignedInt}
// Thats Done (Thank god)



%%

\s+		/* Skips whitespace */
[a-zA-Z]+	return 'STRING'
		return 'STRINGARG'
<<EOF>>		return 'EOF'

/lex

%start output

%% /* Language grammar */

output
	: strings
		{return $1;}
	;

strings
	: STRINGARG
		{ $$ = $1 }
	| STRING
		{ $$ = $1 }
	;
