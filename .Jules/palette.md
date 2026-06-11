## 2026-06-11 - Improving Form Accessibility and Feedback
**Learning:** Standard React forms often lack proper label-input associations (htmlFor/id) and submission feedback, which hurts screen reader users and can lead to duplicate submissions.
**Action:** Always associate labels with inputs using `htmlFor` and `id`, and implement an `isSubmitting` state to disable the submit button and provide clear visual feedback ("Saving...") during async operations.

## 2026-06-11 - Enhancing Keyboard Navigation with :focus-visible
**Learning:** Using generic `:focus` styles can be distracting for mouse users, while removing focus outlines entirely breaks accessibility. `:focus-visible` provides a better balance.
**Action:** Use `:focus-visible` to provide clear, high-contrast focus indicators only for keyboard users, ensuring the app remains navigable without a mouse.
