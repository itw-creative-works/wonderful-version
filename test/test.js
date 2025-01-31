const package = require('../package.json');
const assert = require('assert');

beforeEach(() => {});

before(() => {});

after(() => {});

/*
 * ============
 *  Test Cases
 * ============
 */
describe(`${package.name}`, () => {
  const WonderfulVersion = require('../dist/index.js');

  // Test: Clean method
  describe('.clean()', () => {
    it('should remove non-numeric and trailing zeros from version string', () => {
      assert.strictEqual(WonderfulVersion.clean('v1.02.30'), '1.2.30');
      assert.strictEqual(WonderfulVersion.clean('version 3.4.5-alpha'), '3.4.5');
    });
    it('should force version to have 3 parts', () => {
      assert.strictEqual(WonderfulVersion.clean('2'), '2.0.0');
      assert.strictEqual(WonderfulVersion.clean('2.0'), '2.0.0');
      assert.strictEqual(WonderfulVersion.clean('2.0.0'), '2.0.0');
      assert.strictEqual(WonderfulVersion.clean('2.0.0.0'), '2.0.0');
    });
    it('should default to 0.0.0', () => {
      assert.strictEqual(WonderfulVersion.clean(''), '0.0.0');
      assert.strictEqual(WonderfulVersion.clean(undefined), '0.0.0');
    });
  });

  // Test: Equals method
  describe('.equals()', () => {
    it('should return true if versions are equal after cleaning', () => {
      assert.strictEqual(WonderfulVersion.equals('1.0.0', '1'), true);
      assert.strictEqual(WonderfulVersion.equals('2.1', '2.1.0'), true);
    });

    it('should return false if versions are different', () => {
      assert.strictEqual(WonderfulVersion.equals('1.2.3', '1.2.4'), false);
    });
  });

  // Test: Less Than method
  describe('.lessThan()', () => {
    it('should return true if first version is smaller', () => {
      assert.strictEqual(WonderfulVersion.lessThan('1.2.3', '1.2.4'), true);
      assert.strictEqual(WonderfulVersion.lessThan('0.9.9', '1.0.0'), true);
    });

    it('should return false otherwise', () => {
      assert.strictEqual(WonderfulVersion.lessThan('2.0.0', '1.9.9'), false);
    });
  });

  // Test: Greater Than method
  describe('.greaterThan()', () => {
    it('should return true if first version is greater', () => {
      assert.strictEqual(WonderfulVersion.greaterThan('1.2.4', '1.2.3'), true);
      assert.strictEqual(WonderfulVersion.greaterThan('2.0.0', '1.9.9'), true);
    });

    it('should return false otherwise', () => {
      assert.strictEqual(WonderfulVersion.greaterThan('1.0.0', '1.0.1'), false);
    });
  });

  // Test: Less Than or Equal method
  describe('.lessThanOrEqual()', () => {
    it('should return true if first version is smaller or equal', () => {
      assert.strictEqual(WonderfulVersion.lessThanOrEqual('1.2.3', '1.2.4'), true);
      assert.strictEqual(WonderfulVersion.lessThanOrEqual('1.2.3', '1.2.3'), true);
    });

    it('should return false otherwise', () => {
      assert.strictEqual(WonderfulVersion.lessThanOrEqual('1.2.4', '1.2.3'), false);
    });
  });

  // Test: Greater Than or Equal method
  describe('.greaterThanOrEqual()', () => {
    it('should return true if first version is greater or equal', () => {
      assert.strictEqual(WonderfulVersion.greaterThanOrEqual('1.2.4', '1.2.3'), true);
      assert.strictEqual(WonderfulVersion.greaterThanOrEqual('1.2.3', '1.2.3'), true);
    });

    it('should return false otherwise', () => {
      assert.strictEqual(WonderfulVersion.greaterThanOrEqual('1.2.3', '1.2.4'), false);
    });
  });

  // Test: Behind Level method
  describe('.levelDifference()', () => {
    it('should return "major" if major version is behind', () => {
      assert.strictEqual(WonderfulVersion.levelDifference('1.0.0', '2.0.0'), 'major');
    });

    it('should return "minor" if minor version is behind', () => {
      assert.strictEqual(WonderfulVersion.levelDifference('1.2.0', '1.3.0'), 'minor');
    });

    it('should return "patch" if patch version is behind', () => {
      assert.strictEqual(WonderfulVersion.levelDifference('1.2.3', '1.2.4'), 'patch');
    });

    it('should return "equal" if versions are the same', () => {
      assert.strictEqual(WonderfulVersion.levelDifference('1.2.3', '1.2.3'), 'equal');
    });
  });
});
