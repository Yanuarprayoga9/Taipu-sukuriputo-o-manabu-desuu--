const test = async () => {
  let halo;
  const wait = setTimeout(() => (halo = 20), 2000);
  await wait
  console.log(halo);
};
test()