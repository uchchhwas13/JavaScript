const val = {
  name: 'John',
  age: 30};

if ('name' in val) {
  console.log('Name exists in val');
}
if ('hobbies' in val) {
  console.log('Hobbies exists in val');
}
if ('age' in val) {
  console.log('Age exists in val');
}
if ('hello' in val) {
    console.log('Hello exists in val');
}
else {
    console.log('Hello does not exist in val');
}
