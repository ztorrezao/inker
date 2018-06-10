/// <reference types="react" />
import * as Hydux from 'hydux';
import * as State from './State';
export declare const init: {
    state: () => {
        artboard: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        };
    };
    cmd: () => Hydux.Sub<{
        artboard: {
            setRootRect: (rect: import("./Artboard/State").Rect) => (state: {
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, actions: any) => Hydux.ActionResult<{
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, any>;
            setCss: (css: string) => (state: {
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, actions: any) => Hydux.ActionResult<{
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, any>;
            setArtboard: (artboard: import("./Artboard/State").SVGFile) => (state: {
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, actions: any) => Hydux.ActionResult<{
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, any>;
            setScale: (scale: number) => (state: {
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, actions: any) => Hydux.ActionResult<{
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, any>;
            handleMouseover: (layer: import("./Artboard/State").RectLayer) => (state: {
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, actions: any) => Hydux.ActionResult<{
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, any>;
            handleMouseout: () => (state: {
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, actions: any) => Hydux.ActionResult<{
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, any>;
            handleClick: (selected: import("./Artboard/State").RectLayer | null) => (state: {
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, actions: any) => Hydux.ActionResult<{
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            }, any>;
        };
        update: () => (state: {
            artboard: {
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            };
        }, actions: any) => Hydux.ActionResult<{
            artboard: {
                artboard: import("./Artboard/State").SVGFile | null;
                hover: import("./Artboard/State").RectLayer | null;
                selected: import("./Artboard/State").RectLayer | null;
                containerId: string;
                rootRect: import("./Artboard/State").Rect;
                scale: number;
                css: string;
                ratio: number;
            };
        }, any>;
    }>[];
};
export declare const actions: {
    artboard: {
        setRootRect: (rect: import("./Artboard/State").Rect) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        setCss: (css: string) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        setArtboard: (artboard: import("./Artboard/State").SVGFile) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        setScale: (scale: number) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        handleMouseover: (layer: import("./Artboard/State").RectLayer) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        handleMouseout: () => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        handleClick: (selected: import("./Artboard/State").RectLayer | null) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
    };
    update: () => (state: {
        artboard: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        };
    }, actions: any) => Hydux.ActionResult<{
        artboard: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        };
    }, any>;
};
export declare type State = State.State;
export declare type Actions = State.Actions;
export declare const view: (state: {
    artboard: {
        artboard: import("./Artboard/State").SVGFile | null;
        hover: import("./Artboard/State").RectLayer | null;
        selected: import("./Artboard/State").RectLayer | null;
        containerId: string;
        rootRect: import("./Artboard/State").Rect;
        scale: number;
        css: string;
        ratio: number;
    };
}, actions: {
    artboard: {
        setRootRect: (rect: import("./Artboard/State").Rect) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        setCss: (css: string) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        setArtboard: (artboard: import("./Artboard/State").SVGFile) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        setScale: (scale: number) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        handleMouseover: (layer: import("./Artboard/State").RectLayer) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        handleMouseout: () => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
        handleClick: (selected: import("./Artboard/State").RectLayer | null) => (state: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, actions: any) => Hydux.ActionResult<{
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        }, any>;
    };
    update: () => (state: {
        artboard: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        };
    }, actions: any) => Hydux.ActionResult<{
        artboard: {
            artboard: import("./Artboard/State").SVGFile | null;
            hover: import("./Artboard/State").RectLayer | null;
            selected: import("./Artboard/State").RectLayer | null;
            containerId: string;
            rootRect: import("./Artboard/State").Rect;
            scale: number;
            css: string;
            ratio: number;
        };
    }, any>;
}) => JSX.Element;
