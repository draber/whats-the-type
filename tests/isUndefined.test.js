import detector from "../whats-the-type.js";

test("isUndefined", () => {
    let value;
    expect(detector.getType(value)).toBe("undefined");
    expect(detector.isUndefined(value)).toBe(true);
    expect(detector.isArray(value)).toBe(false);
    expect(detector.isBigInt(value)).toBe(false);
    expect(detector.isBoolean(value)).toBe(false);
    expect(detector.isDate(value)).toBe(false);
    expect(detector.isError(value)).toBe(false);
    expect(detector.isFunction(value)).toBe(false);
    expect(detector.isGeneratorFunction(value)).toBe(false);
    expect(detector.isMap(value)).toBe(false);
    expect(detector.isNull(value)).toBe(false);
    expect(detector.isNumber(value)).toBe(false);
    expect(detector.isPlainObject(value)).toBe(false);
    expect(detector.isRegExp(value)).toBe(false);
    expect(detector.isSet(value)).toBe(false);
    expect(detector.isString(value)).toBe(false);
    expect(detector.isSymbol(value)).toBe(false);
});
