export class ZProductCard {
    productLikedHandler() {
        this.productLiked.emit(this.product);
    }
    componentWillLoad() {
        if (typeof this.product === "string") {
            this.productDataParsed = JSON.parse(this.product);
            ;
        }
        else {
            this.productDataParsed = this.product;
        }
        console.log('Component is about to be rendered');
    }
    componentDidLoad() {
        console.log('Component has been rendered');
    }
    render() {
        console.log("Rendering component");
        console.log("Input data: ", this.product);
        return (h("div", { class: "z-product-card" },
            h("button", { class: "z-product-card-wishlist", onClick: (event) => { event.preventDefault(); this.productLikedHandler(); } },
                h("span", { class: "z-icon z-icon-wishlist z-icon-small z-icon-black z-product-card-wishlist_icon" })),
            h("div", { class: "z-product-image" },
                h("img", { src: this.productDataParsed.image, alt: "Zalando", class: "z-product-image_image" }),
                h("div", { class: "z-product-image_overlay" },
                    h("div", { class: "z-product-card-flags " },
                        h("div", { class: "z-product-card-flags_wrapper" },
                            h("div", { class: "z-flag z-flag-sale" }, "Selling out fast"),
                            h("div", { class: "z-flag z-flag-info" }, "Hot product"))))),
            h("div", { class: "z-product-card-details" },
                h("div", { class: "z-product-card-title " },
                    h("span", { class: "z-text z-product-card-title_brand z-text-block z-text-detail-text-bold z-text-black" }, this.productDataParsed.brand),
                    h("span", { class: "z-text z-product-card-title_name z-text-block z-text-detail-text-regular z-text-black" }, this.productDataParsed.name)),
                h("div", { class: "z-product-card-price" },
                    h("span", { class: "z-text z-product-card-price_price is-sale z-text-block z-text-detail-text-regular z-text-black" }, this.productDataParsed.price.old),
                    h("span", { class: "z-text z-product-card-price_sale-price z-text-block z-text-detail-text-regular z-text-black" }, this.productDataParsed.price.current)))));
    }
    static get is() { return "z-product-card"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "product": {
            "type": "Any",
            "attr": "product"
        }
    }; }
    static get events() { return [{
            "name": "productLiked",
            "method": "productLiked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:z-product-card:**/"; }
}
