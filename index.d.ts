/**
 * @see https://github.com/shpontex/cropme
 */
declare module 'cropme-ts' {
    export type CropmeOptions = {
        container?: {
            width?: number | string,
            height?: number | string,
        },
        viewport?: {
            type?: string,
            width?: number | string,
            height?: number | string,
            border?: {
                enable?: boolean,
                width?: number,
                color?: string
            }
        },
        transformOrigin?: string,
        zoom?: {
            min?: number,
            max?: number,
            enable?: boolean,
            mouseWheel?: boolean,
            slider?: boolean
        },
        customClass?: string,
        rotation?: {
            slider?: boolean,
            enable?: boolean,
            position?: string
        }
    }
    export type Position = {
        x: number;
        y: number;
        scale: number;
        angle: number;
    }
    export default class Cropme {
        constructor(el: HTMLElement, options?: CropmeOptions);
        crop(options?: CropmeOptions): Promise<any>;
        reload(options?: CropmeOptions): void;

        resize(): void;
        position(): Position; 

        destroy(): void;
    }
}