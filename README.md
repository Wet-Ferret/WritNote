# WritNote
<i>Copyright Wet-Ferret 2016</i>

## Concept
The concept of this project is to create a flexible,
programming style note-taking language. The language will
incorporate common programming syntax such as switches for
step-by-step instructions and for loops for quick insertion of phrases
and other such stuff

## Implementation
The implentation of this concept is going to be primarily achieved through the
use of parser creation languages such as [Bison](https://www.gnu.org/software/bison/ "Bison GNU Project"),
[Yacc](http://dinosaur.compilertools.net/yacc/, "Yet Another Compiler"), [Flex](https://en.wikipedia.org/wiki/Flex_(lexical_analyser_generator) "Flex - Wikipedia")
and [LEX](http://dinosaur.compilertools.net/lex/index.html "LEX Manual"). As this is a web-app we are going
to use a tool called [Jison](http://zaa.ch/jison/ "Jison - Home"). This tool allows you to use Bison type syntax
and convert it into a Javascript parser as opposed to a C based parser. This allows us to effectively integrate it
into a web-app environment.