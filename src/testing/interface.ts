
interface ISprite {
    position: { x:number; y:number };
    velocity: number;
    image: HTMLImageElement;
    context: CanvasRenderingContext2D 
}

interface IKeys {
    w: { pressed: boolean; }
    a: { pressed: boolean; }
    s: { pressed: boolean; }
    d: { pressed: boolean; }
}


export type {
    IKeys,
    ISprite
}