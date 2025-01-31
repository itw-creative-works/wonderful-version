(function (root, factory) {
  // https://github.com/umdjs/umd/blob/master/templates/returnExports.js
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  var environment = (Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]') ? 'node' : 'browser';

  var SOURCE = 'library';
  var VERSION = '{version}';

  function WonderfulVersion(options) {
    var self = this;

    self.options = options || {};

    return self
  };

  // Clean
  WonderfulVersion.clean = function (version) {
    // Transform
    if (typeof version !== 'string') {
      version = String(version || '0.0.0');
    }

    // Clean
    version = version
      .replace(/[^0-9.]/g, '') // Remove non-numeric and non-dot characters
      .replace(/(\.0+)+$/, '') // Remove trailing zeros after the last dot
      .replace(/\b0+(\d)/g, '$1'); // Remove leading zeros from each segment

    // Ensure version has 3 parts
    var parts = version.split('.');
    while (parts.length < 3) {
      parts.push('0');
    }

    // Ensure each part is not an empty string
    parts = parts.map(part => part === '' ? '0' : part);

    return parts.join('.');
  }

  // Equals
  WonderfulVersion.equals = function (version1, version2) {
    // Clean
    var cleanVersion1 = WonderfulVersion.clean(version1);
    var cleanVersion2 = WonderfulVersion.clean(version2);

    // Equals
    return cleanVersion1 === cleanVersion2;
  }

  // Less Than
  WonderfulVersion.lessThan = function (version1, version2) {
    return compareVersions(version1, version2) < 0;
  }

  // Greater Than
  WonderfulVersion.greaterThan = function (version1, version2) {
    return compareVersions(version1, version2) > 0;
  }

  // Less Than or Equal
  WonderfulVersion.lessThanOrEqual = function (version1, version2) {
    return compareVersions(version1, version2) <= 0;
  }

  // Greater Than or Equal
  WonderfulVersion.greaterThanOrEqual = function (version1, version2) {
    return compareVersions(version1, version2) >= 0;
  }

  // Is
  WonderfulVersion.is = function (version1, comparator, version2) {
    switch (comparator) {
      case '==':
      case '===':
        return WonderfulVersion.equals(version1, version2);
      case '!=':
        return !WonderfulVersion.equals(version1, version2);
      case '>':
        return WonderfulVersion.greaterThan(version1, version2);
      case '>=':
        return WonderfulVersion.greaterThanOrEqual(version1, version2);
      case '<':
        return WonderfulVersion.lessThan(version1, version2);
      case '<=':
        return WonderfulVersion.lessThanOrEqual(version1, version2);
      default:
        throw new Error('Invalid comparator "' + comparator + '"');
    }
  }

  // Major
  WonderfulVersion.major = function (version) {
    return parseInt(WonderfulVersion.clean(version).split('.')[0]);
  }

  // Minor
  WonderfulVersion.minor = function (version) {
    return parseInt(WonderfulVersion.clean(version).split('.')[1]);
  }

  // Patch
  WonderfulVersion.patch = function (version) {
    return parseInt(WonderfulVersion.clean(version).split('.')[2]);
  }

  // Behind Level
  WonderfulVersion.levelDifference = function (version1, version2) {
    var v1 = WonderfulVersion.clean(version1).split('.').map(Number);
    var v2 = WonderfulVersion.clean(version2).split('.').map(Number);

    // Check which level is behind
    if (v1[0] !== v2[0]) {
      return 'major';
    };
    if (v1[1] !== v2[1]) {
      return 'minor'
    };
    if (v1[2] !== v2[2]) {
      return 'patch'
    };

    // Equals
    return 'equal';
  }

  // Helper function to compare versions
  function compareVersions(version1, version2) {
    // Clean
    var v1 = WonderfulVersion.clean(version1).split('.').map(Number);
    var v2 = WonderfulVersion.clean(version2).split('.').map(Number);

    // Compare
    for (var i = 0; i < Math.max(v1.length, v2.length); i++) {
      var num1 = v1[i] || 0;
      var num2 = v2[i] || 0;

      // Less than
      if (num1 < num2) {
        return -1
      };

      // Greater than
      if (num1 > num2) {
        return 1
      };
    }

    // Equals
    return 0;
  }


  // Register
  if (environment === 'browser') {
    try {
      window.WonderfulVersion = WonderfulVersion;
    } catch (e) {
    }
  }

  // Just return a value to define the module export.
  // This example returns an object, but the module
  // can return a function as the exported value.
  return WonderfulVersion; // Enable if using UMD

}));
