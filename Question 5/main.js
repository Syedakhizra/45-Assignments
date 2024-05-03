// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, 
// "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
let personName = " Syeda Khizra ";
console.log(personName);
// \t is used to taken space
// let personName: string= "\tSyeda Khizra";
//console.log(personName);
//  \n is used for new line
//  let personName: string= "\nSyeda Khizra";
//  console.log(personName);
console.groupCollapsed(personName.trim());
export {};
