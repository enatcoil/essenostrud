try {
  const invalidUrl = 'http://example.com';
  const invalidPath = fileURLToPath(invalidUrl);
} catch (error) {
  console.error('Error:', error.message);
  // Output: Error: Invalid URL: http://example.com
}
