import '../../stencil.core';
import { EventEmitter } from '../../stencil.core';
export declare class ZProductCard {
    product: any;
    productDataParsed: any;
    productLiked: EventEmitter;
    productLikedHandler(): void;
    componentWillLoad(): void;
    componentDidLoad(): void;
    render(): JSX.Element;
}
