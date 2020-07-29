//rot13 cipher encrypt and decrypt

function rot13(str) {
  let rot13Output = [];
  const lookupTable = {
    A: "N",
    B: "O",
    C: "P",
    D: "Q",
    E: "R",
    F: "S",
    G: "T",
    H: "U",
    I: "V",
    J: "W",
    K: "X",
    L: "Y",
    M: "Z",
    N: "A",
    O: "B",
    P: "C",
    Q: "D",
    R: "E",
    S: "F",
    T: "G",
    U: "H",
    V: "I",
    W: "J",
    X: "K",
    Y: "L",
    Z: "M",
    a: "n",
    b: "o",
    c: "p",
    d: "q",
    e: "r",
    f: "s",
    g: "t",
    h: "u",
    i: "v",
    j: "w",
    k: "x",
    l: "y",
    m: "z",
    n: "a",
    o: "b",
    p: "c",
    q: "d",
    r: "e",
    s: "f",
    t: "g",
    u: "h",
    v: "i",
    w: "j",
    x: "k",
    y: "l",
    z: "m",
  };

  for (val of str) {
    if (lookupTable[val]) {
      val = lookupTable[val];
    }
    rot13Output.push(val);
  }
  rot13Output = rot13Output.join("");
  return rot13Output;
}
