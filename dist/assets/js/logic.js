export function matchesRule(rule, answers = {}) {
  if (!rule) return true;
  return Object.entries(rule).every(([key, expected]) =>
    Array.isArray(expected) ? expected.includes(answers[key]) : answers[key] === expected
  );
}

export function buildChecklist(guide, answers) {
  if (!guide || !guide.questions.every((question) =>
    !matchesRule(question.when, answers) || question.options.some((option) => option.value === answers[question.id])
  )) {
    throw new Error('Complete the guided questions before generating a checklist.');
  }
  return guide.items.filter((item) => matchesRule(item.when, answers));
}

export function getTripAdvice(guide, answers) {
  return (guide.tripRules || []).find((rule) => matchesRule(rule.when, answers))?.trip || guide.trip;
}

export function checklistKey(guideId, answers) {
  // Only service-choice labels, never identity details, are stored.
  const stable = Object.entries(answers).sort(([a],[b]) => a.localeCompare(b));
  return `onetrip-checklist-${guideId}-${JSON.stringify(stable)}`;
}

export function secureServiceLink(id) {
  return `service.html?id=${encodeURIComponent(id)}`;
}
