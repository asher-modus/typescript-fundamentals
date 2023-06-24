const prefix = '🐉 ';

export default async function updateOutput(id: string) {
  //TODO
}

//run our samples
runTheLearningSamples();

function runTheLearningSamples() {
  //hoisted?
  function displayProductInfo(id: number, name: string) {
    console.log(`${prefix} typed parameters`);
    console.log(`product id=${id} and name=${name}`);
  }
  displayProductInfo(10, 'Pizza');
}
