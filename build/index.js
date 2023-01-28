'use strict';

var Case = function (props) {
    return props.children;
};
var Switch = function (_a) {
    var children = _a.children, defaultComponent = _a.defaultComponent, componentName = _a.componentName;
    if (children.length === 0) {
        return defaultComponent;
    }
    var result = children.find(function (child) {
        return child.props.value === componentName;
    });
    return result !== null && result !== void 0 ? result : defaultComponent;
};

exports.Case = Case;
exports.Switch = Switch;
//# sourceMappingURL=index.js.map
