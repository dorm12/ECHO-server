const str: string = "halav"
const regex1: RegExp = /[*]/
const regex2: RegExp = /[ha]/
const regex3: RegExp = /[*ava]/
const found = str.match(regex2)
console.log(found)
