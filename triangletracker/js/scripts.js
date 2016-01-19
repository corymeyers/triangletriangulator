function triangleClass() {
  if (M1 === M2 === M3) {
    return "Equilateral";
  } else if ((M1 === M2) || (M1 === M3) || (M2 === M3)) {
    return "Isoceles";
  } else if (M1 !== M2 !== M3) {
    return "Scalene";
  }
};
