function toggleTopics(id) {
  // Hide all topic lists
  const allTopics = document.querySelectorAll('.topics');
  allTopics.forEach(t => t.classList.add('hidden'));

  // Show selected topic list
  const element = document.getElementById(id);
  if (element) element.classList.remove('hidden');
}

// Reset view on homepage load (show only subjects)
window.onload = () => {
  const allTopics = document.querySelectorAll('.topics');
  allTopics.forEach(t => t.classList.add('hidden'));
};

