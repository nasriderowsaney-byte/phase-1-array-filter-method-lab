// Code your solution here
// findMatching
function findMatching(drivers, name) {
  return drivers.filter(driver =>
    driver.toLowerCase() === name.toLowerCase()
  );
}

// fuzzyMatch
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver =>
    driver.toLowerCase().startsWith(letters.toLowerCase())
  );
}

// matchName
function matchName(drivers, name) {
  return drivers.filter(driver =>
    driver.name === name
  );
}
