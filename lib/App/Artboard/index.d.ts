/// <reference types="react" />
import * as Hydux from 'hydux';
import * as State from './State';
export declare type State = State.State;
export declare type Actions = State.Actions;
export declare const init: {
    state: () => {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    };
};
export declare const actions: {
    setRootRect: (rect: State.Rect) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    setCss: (css: string) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    setArtboard: (artboard: State.SVGFile) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    setScale: (scale: number) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    handleMouseover: (layer: State.RectLayer) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    handleMouseout: () => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    handleClick: (selected: State.RectLayer | null) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
};
export declare const view: (state: {
    artboard: State.SVGFile | null;
    hover: State.RectLayer | null;
    selected: State.RectLayer | null;
    containerId: string;
    rootRect: State.Rect;
    scale: number;
    css: string;
}, actions: {
    setRootRect: (rect: State.Rect) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    setCss: (css: string) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    setArtboard: (artboard: State.SVGFile) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    setScale: (scale: number) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    handleMouseover: (layer: State.RectLayer) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    handleMouseout: () => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
    handleClick: (selected: State.RectLayer | null) => (state: {
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, actions: any) => Hydux.ActionResult<{
        artboard: State.SVGFile | null;
        hover: State.RectLayer | null;
        selected: State.RectLayer | null;
        containerId: string;
        rootRect: State.Rect;
        scale: number;
        css: string;
    }, any>;
}) => JSX.Element;
