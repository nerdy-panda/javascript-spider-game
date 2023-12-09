export default class {
    isNull(input) {
        return input == null;
    }
    isExactlyNull(input) {
        return input === null;
    }
    isNotNull(input) {
        return !this.isNull();
    }
    isExactlyNotNull(input) {
        return !this.isExactlyNull(input);
    }
}
//# sourceMappingURL=NerdUtility.js.map