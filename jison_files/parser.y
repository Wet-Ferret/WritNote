// Ennis Massey 2016
// C Imports
%{
#include <cstdio>
#include <iostream>
using namespace std;

// Tell bison about flex vars
extern "C" int yylex();
extern "C" int yyparse();
extern "C" FILE *yyin;
// Create header style function decl
void yyerror(const char *s);
%}

// Define values to prevent any value being defined where it shouldn't
%union {
    	long int big;
	int ival;
	char *string;
	float fval;
}

// Define Terminal Tokens
// ival is INT
%token <ival> INT
// fval is FLOAT
%token <fval> FLOAT
// sval is STRING
%token <sval> STRING

// Start of grammar definitions
%%

