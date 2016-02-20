# WritNote
Programming Style NoteTaking
Concept by Ennis Massey, 6/02/2016

# Possible coding format

## Formatting

### Headings
Each consequent one could be one heading smaller unless 
specified using html type heading tags (h1, h2, e.t.c.)
example: `//(h1) (Text here)`

### Lists
List are defined as such.
```listName: [
	'item1',
	'item2',
];```

### Hyperlinks
Hyperlinks are defined as such.
`"text here".hyperlink("url here"); || "text here".hl("url here");`

### Definitions
In the event that you need to put something like this down:
```Stick:
	Long, Brown and Sticky,
	Context: Terrible Jokes```

Use this syntax.
//(d)"Stick":{
	"Long, Brown and Sticky".def(),
	"Terrible Jokes".ctext(),
};

### Step-by-step
Uses a switch like format to produce instructions to do a task, step-by-step
```task("name here"){
	step 1:
		"text here",
		"more text",
	step 2:
		"some other text",
		"MOAR TEXT",
}```

`"<text here>"` = text
Additional Properties could be specified as such
`"<text here>".b();` = bold text
`"<text here>".i();` = italics
`"<text here>".u();` = underlined
`"<text here>".Ss();` = superscript
`"<text here>".ss();` = subscript

