function areYouPlayingBanjo(name) {
  // Implement me
  let play = name.charAt(0) === "R" || name.charAt(0) ===  "r"
    ? name + " plays banjo"
    : name + " does not play banjo";
  return play;
}

let nama = "Rizky";

console.log(areYouPlayingBanjo("ringo"));