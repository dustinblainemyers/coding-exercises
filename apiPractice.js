async function test() {
  const randomPageFunction = function randomPage(min, max) {
    return Math.random() * (max - min) + min;
  };
  const aRandomPage = randomPageFunction(1, 500);
  return aRandomPage;
}

test();
