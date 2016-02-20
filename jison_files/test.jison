/* just testing */

/* Lex grammar */

%lex

%%

\s+		/* Skips whitespace */
[a-zA-Z]+	return 'STRING'
[\"]?[a-zA-Z0-9]+[\"]?	return 'STRINGARG'
<<EOF>>		return 'EOF'

/lex

%start output

%% /* Language grammar */

output
	: EOF out
		{return $1;}
	;

out
	: STRING
		{$$ = $1.length;}
	| STRINGARG
		{$$ = $1}
	;
