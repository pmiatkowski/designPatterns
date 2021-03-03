const GalleryImage = function(src, id) {
    this.children = [];

    this.element = document.createElement('img');
    this.element.src = src;
    this.element.id = id;
}

GalleryImage.prototype = {
    // Due to this being a leaf, it doesn't use these methods,
    // but must implement them to count as implementing the
    // Composite interface
    add: function() {},
    remove: function() {},
    getChild: function() {},
    hide: function() {
        this.element.style.display = 'none';
    },
    show: function() {
        this.element.style.display = null;
    },
    getElement: function() {
        return this.element;
    }
}