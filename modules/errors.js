function breaks() {
  return 3 + z;
}

try {
  breaks();
} catch (err) {
  console.error("Vaya. se rompió");
}
