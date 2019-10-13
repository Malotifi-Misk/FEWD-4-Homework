##Selector identification

Identify the selectors in each style and what HTML element(s) they target.
Also, which of these examples have errors? What are they?

###1
```
p {
  color: white;
}
```
Error
You should write like this
p {
  text-color: white;
}
###2
```
span {
  padding: 15px;
}
```ß

###3
```
table td {
  color: #222;
}
```
Error
You should write like this
table, td {
  color: #222;
}
###4
```
.lede-section #left-side {
  position: absolute;
}
```
Error
You should write like this
.lede-section, #left-side {
  position: absolute;
}
###5
```
#section-9 {
  display: block
  text-decoration: underline;
  font-weight: bold;
}
```
Error
You should write like this
section-9 {
  display: block
  text-decoration: underline;
  font-weight: bold;
}
with out # because it's not ID
##What's different about the following three selectors?

###6
```
.fewd25-page-section .another-class {
  text-align: center;
}
```
Error No comma

###7
```
.fewd25-page-section, .another-class {
  text-align: center;
}
```
Correct

###8
```
.fewd25-page-section.another-class {
  text-align: center;
}
```
Error No comma & No Space
