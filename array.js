// tasks:

1. Write a code snippet to find the length of an array.
var a = [1, 2, "mounika", "BTECH"]
console.log(a.length)

2. How do you add an element to the end of an array?
var b = [1, 2, "ramu", "rani"]
b.push("btech")
console.log(b)

3. How do you remove the last element from an array?
var c = [1, 2, "ramu", "rani"]
c1 = c.pop()
console.log(c)

4. How do you add an element to the beginning of an array?
var d = [1, 2, "ramu", "rani"]
d.unshift("btech")
console.log(d)

5. How can you remove the first element from an array?
var e = ["name", 1, 2, "ramu", "rani"]
e.shift()
console.log(e)

6. How do you reverse the elements in an array?
var f = ["name", 1, 2, "ramu", "rani"]
f.reverse()
console.log(f)

7. How can you find the index of a specific value in an array?
var g = ["name", 1, 2, "ramu", "rani"]
console.log(g.indexOf("ramu"))
console.log(g.indexOf("rani"))
console.log(g.indexOf("name"))
console.log(g.indexOf(1))
console.log(g.indexOf(2))

8. How can you check if a certain value exists in an array?
var h = ["name", 1, 2, "ramu", "rani"]
console.log(h.includes("ramu"))
console.log(h.includes("rani"))
console.log(h.includes("name"))
console.log(h.includes(1))
console.log(h.includes(2))

9. How can you sort the elements of an array in ascending order?
var i = [5, 2, 8, 1, 9]
i.sort()
console.log(i)

10. How can you convert an array to a string using commas as separators?
var j = [1, 2, 3, 4, 5]
console.log(j.join(","))

// Questions with Multiple Array Methods:

1. Write a code snippet that adds an element to the end of an array, then removes the first element.
var k = [1, 2, 3, 4, 5]
k1 = k.push(6)
k2 = k.shift()
console.log(k1)
console.log(k)

2. How can you reverse an array and then join the elements into a string?
var l = [1, 2, 3, 4, 5]
l.reverse()
console.log(l.join(","))

3. Write a code that first sorts an array in ascending order, then removes the last element.
var m = [5, 2, 8, 1, 9]
m.sort()
m.pop()
console.log(m)

4. How do you add two elements at the beginning of an array, then remove the first element and find the length of the array?
var n = [1, 2, 3, 4, 5]
n.unshift(6, 7)
n.shift()
console.log(n.length)
console.log(n)

5. How do you combine two arrays, sort the combined array, and then remove the last element?
var o = [1, 2, 3, 4, 5]
var p = [6, 7, 8, 9, 10]
o = o.concat(p)
o.sort()
o.pop()
console.log(o)
