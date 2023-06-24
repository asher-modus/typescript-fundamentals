const prefix = '🐉 ';

function displayProductInfo(id: number, name: string) {
  console.log(`${prefix} typed parameters`);
  console.log(`product id=${id} and name=${name}`);
}

function runTheLearningSamples() {
  displayProductInfo(10, 'Pizza');
}

runTheLearningSamples();

export default async function updateOutput(id: string) {
  // TODO: Implement the updateOutput function
}
