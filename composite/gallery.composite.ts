const GalleryComposite = function(heading: string, id: string) {
    this.children = new Set();

    this.container = document.createElement('div');
    this.container.id = id;
    this.container.innerHTML(`<h2>${heading}</h2>`);
}

GalleryComposite.prototype = {
    add: function(child) {
        (this.children as Set<Element>).add(child);
        this.element.appendChild(child);
    },
    remove: function(child) {
        (this.children as Set<Element>).delete(child);
        this.element.removeChild(child);

        return true;
    },
    getChild: function(i: number) {
        return Array.from(this.children)[i];
    },
    hide: function() {
        (Array.from(this.children) as Array<HTMLElement>).forEach(obj => {
            obj.style.display = 'none'
        });

        this.container.style.display = 'none';
    },
    show: function() {
        (Array.from(this.children) as Array<HTMLElement>).forEach(obj => {
            obj.style.display = null
        });

        this.container.style.display = null;
    },
    getElement: function() {
        return this.container;
    }
}