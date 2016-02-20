// Define tokens

%lex
%%
\s+		/* Skips Whitespace */
//(h1)		return 'HEADER1'
//(h2)		return 'HEADER2'
//(h3)		return 'HEADER3'
\"[a-zA-Z0-9]+\"	return 'STRINGARG'
<<EOF>>			return 'EOF'

/lex

%start parse

%% /* Language Grammar */


