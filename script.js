document.addEventListener('DOMContentLoaded', function() {
  const documentationBlocks = document.querySelectorAll('.faq__item');

  function showDocumentationBlocks() {
    documentationBlocks.forEach(block => {
      if (isInViewport(block)) {
        block.classList.add('show');
      }
    });
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener('scroll', showDocumentationBlocks);
  showDocumentationBlocks(); // Initially show blocks in viewport
});
