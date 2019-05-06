const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(
  name => name.toUpperCase()
);

console.log('upperizedNames',upperizedNames);

const names = ['Afghanistan', 'Aruba', 'Bahamas', 'Chile', 'Fiji', 'Gabon', 'Luxembourg', 'Nepal', 'Singapore', 'Uganda', 'Zimbabwe'];

const longNames = names.filter(function(name) {
  return name.length > 6;
});

const Nameslong = names.filter(nome =>
 nome.length >6
)

/*A lista de parâmetros aparece antes da flecha da arrow (=>). Caso essa lista só possua um parâmetro, você pode escrevê-la como no exemplo acima, omitindo os parênteses. No entanto, se houver dois ou mais itens na lista de parâmetros ou mesmo não houver nenhum parâmetro na lista, você precisará envolver a lista em parênteses.*/

const greet = name => `Hello ${name}!`;
//greet('Asser');

// lista de parâmetros vazia exige parênteses
const sayHi = () => console.log('Hello Udacity Student!');
sayHi();

// múltiplos parâmetros na lista, parênteses obrigatórios!
const orderIceCream = (flavor, cone) => console.log(`Here's your ${flavor} ice cream in a ${cone} cone.`);
orderIceCream('chocolate', 'waffle');

books:
Array[7]