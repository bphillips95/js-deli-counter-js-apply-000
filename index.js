function takeANumber(katzDeliLine,name) {
  katzDeliLine.push(name)
 return  `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
function nowServing(katzDeliLine) {
  if(katzDeliLine.length>0) 
   return `Currently serving ${katzDeliLine.shift()}.`
   if (katzDeliLine.length===0) 
   return 'There is nobody waiting to be served!'
}
function currentLine(katzDeliLine) {
  var array = []
  for(let i=0;katzDeliLine.length>i;i++)
   array.push(`${i+1}. ${katzDeliLine[i]}`)
   if (katzDeliLine.length>0) 
    return 'The line is currently: ' + array.join(', ')
    if(katzDeliLine.length===0)
    return 'The line is currently empty.'
}