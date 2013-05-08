var templates = [
  function() { return "you have " + getAbstractProperty(); },
  function() { return "you are " + getDescriptor(); },
  function() { return "this is " + getDescriptor(); },
  function() { return "9 out of 10 doctors say " + getTemplate(); },
  function() { return "people say " + getTemplate(); },
];

var abstractProperties = [
  function() { return [makeSingularForm(getDescriptor()), getTangibleSingularProperty()].join(" "); },
  function() { return [getDescriptor(), getTangibleMultipleProperty()].join(" "); },
];

var tangibleSingularProperties = [
  "heart",
  "soul",
  "demeanour",
  "voice",
  "radiance",
  "face",
  "way of thinking",
];

var tangibleMultipleProperties = [
  "eyes",
  "thoughts",
  "knees",
  "ears",
  "ideas",
  "skills",
];

var adjectives = [
  "beautiful",
  "nice",
  "pretty",
  "attractive",
  "radiant",
  "perfect",
  "useful",
  "incredible",
  "pleasing",
];

var adverbs = [
  "absolutely",
  "awfully",
  "completely",
  "decidedly",
  "deeply",
  "entirely",
  "extremely",
  "fairly",
  "highly",
  "incredibly",
  "intensely",
  "perfectly",
  "positively",
  "practically",
  "pretty",
  "purely",
  "quite",
  "radiantly",
  "rather",
  "really",
  "simply",
  "so",
  "somewhat",
  "terribly",
  "thoroughly",
  "totally",
  "utterly",
  "very",
  "virtually",
];

var makeCompliment = module.exports = function makeCompliment() {
  return getTemplate();
};

var makeSingularForm = module.exports.makeSingularForm = function makeSingularForm(text) {
  if (text.match(/^[aeiou]/i)) {
    return "an " + text;
  } else {
    return "a " + text;
  }
}

var getTemplate = module.exports.getTemplate = function getTemplate() {
  return templates[Math.floor(Math.random() * templates.length)]();
}

var getAbstractProperty = module.exports.getAbstractProperty = function getAbstractProperty() {
  return abstractProperties[Math.floor(Math.random() * abstractProperties.length)]();
}

var getTangibleSingularProperty = module.exports.getTangibleSingularProperty = function getTangibleSingularProperty() {
  return tangibleSingularProperties[Math.floor(Math.random() * tangibleSingularProperties.length)];
}

var getTangibleMultipleProperty = module.exports.getTangibleMultipleProperty = function getTangibleMultipleProperty() {
  return tangibleMultipleProperties[Math.floor(Math.random() * tangibleMultipleProperties.length)];
}

var getAdjective = module.exports.getAdjective = function getAdjective() {
  return adjectives[Math.floor(Math.random() * adjectives.length)];
}

var getAdverb = module.exports.getAdverb = function getAdverb() {
  return adverbs[Math.floor(Math.random() * adverbs.length)];
}

var getDescriptor = module.exports.getDescriptor = function getDescriptor() {
  return [getAdverb(), getAdjective()].join(" ");
}
