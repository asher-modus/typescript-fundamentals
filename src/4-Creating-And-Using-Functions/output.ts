export default async function updateOutput(id: string) {
  runTheLearningSamples();
}

const prefix = '🐉 ';

function runTheLearningSamples() {
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }

  displayProductInfo(10, 'Pizza');
}
