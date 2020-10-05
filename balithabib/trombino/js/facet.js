class Facet {
    constructor(label) {
        this._label = label;
        this._values = [];
    }

    get label() {
        return this._label;
    }

    get values() {
        return this._values;
    }

    addValue(value) {
        this._values.push(value);
    }

    findIndex(prop) {
        return this._values.find(proposal => proposal._prop === prop);
    }
}

class Proposal {
    constructor(prop, importance, expresion) {
        this._ids = [];
        this._prop = prop;
        this._importance = importance;
        this._expresions = new Set();
        this._expresions.add(expresion);
    }

    get prop() {
        return this._prop;
    }

    get importance() {
        return this._importance;
    }

    addExpresion(expresion) {
        return this._expresions.add(expresion);
    }

    addId(id) {
        this._ids.push(id);
    }

    incrementedImportance(importance) {
        this._importance += importance;
    }
}
