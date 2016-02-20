/* just testing */

/* Lex grammar */

%lex

%%

\s+		/* Skips whitespace */
[a-zA-Z]+	return 'STRING'
<<EOF>>		return 'EOF'

/lex

%start output

%% /* Language grammar */

output
	: out EOF
		{print($1); return $1;}
	;

out
	: STRING 
		{$$ = String($1);}
	;
