function BSTree() {
    this.root = null;
}

function Entry(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
}

Entry.prototype.inOrder = function (callback) {
    this.left && this.left.inOrder(callback);
    callback(this.value);
    this.right && this.right.inOrder(callback);
};

Entry.prototype.minValue = function() {
    return this.left === null ? this : this.left.minValue();
};

Entry.prototype.find = function(value) {
    if (this === null) {
        return null;
    }

    if (this.value === value) {
        return this;
    }else if (this.value < value) {
        return this.right && this.right.find(value);
    } else {
        return this.left && this.left.find(value);
    }
};

Entry.prototype.remove = function(value, parent) {
    if (value < this.value) {
        return !!this.left && this.left.remove(value, this);
    } else if (value > this.value) {
        return !!this.right && this.right.remove(value, this);
    }else {
        if (this.left !== null && this.right !== null) {
            this.value = this.right.minValue();
            this.right.remove(this.value, this);
        } else if (parent.left === this) {
            parent.left = this.left !== null ? this.left : this.right;
        } else if (parent.right === this) {
            parent.right = this.left !== null ? this.left : this.right;
        }
        return true;
    }
};

Entry.prototype.insert = function(value) {
    if (this.value < value) {
        if (this.right === null) {
            this.right = new Entry(value);
            this.right.parent = this;
        }else {
            this.right.insert(value);
        }
    }else {
        if (this.left === null) {
            this.left = new Entry(value);
            this.left.parent = this.left;
        }else {
            this.left.insert(value);
        }
    }
};

BSTree.prototype.insert = function (value) {
    if (this.root === null) {
        this.root = new Entry(value);
    }else {
        this.root.insert(value);
    }
};

BSTree.prototype.find = function(value) {
    return this.root && this.root.find(value);
};

BSTree.prototype.remove = function(value) {
    if (this.root === null) {
        return false;
    }

    if (this.root.value === value) {
        const auxRoot = new Entry();
        auxRoot.left = this.root;
        const result = this.root.remove(value, auxRoot);
        this.root = auxRoot.left;
        return result;
    } else {
        return this.root.remove(value, null);
    }
};

BSTree.prototype.toString = function () {
    let string = '  ';
    this.root && this.root.inOrder(function (value) {
       string += value + ', ';
    });
    return `{${string.substring(0, string.length - 2).trim()}}`;
};

BSTree.prototype.toArray = function () {
    const array = [];
    this.root && this.root.inOrder(function (value) {
        array.push(value);
    });
    return array;
};

BSTree.prototype.empty = function () {
    this.root = null;
};