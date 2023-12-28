document.addEventListener('DOMContentLoaded', function () {
  // Example usage
  const keyToCheck = "red";
  const result = hasKey(keyToCheck);
  document.getElementById('result').innerText = `Does the object have key "${keyToCheck}"? ${result}`;
});

function hasKey(key) {
  const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };
  return key in sampleObject;
}
