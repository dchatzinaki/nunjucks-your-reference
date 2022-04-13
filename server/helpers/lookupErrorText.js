const getErrorMessage = (key, params) => {
  const errors = {
    'error.userReference.string.max': 'Enter your reference as 50 characters or fewer',
    'error.userReference.string.pattern.base': 'Enter your reference as a combination of letters, numbers, hyphens, slashes and full stops',
  };

  return errors[key] || key;
};

module.exports = getErrorMessage