import { ISprite } from "./interface";

/**
 * This is object/image that will be render to the given context canvas
 * with given position
 */
class Sprite {
    position: { x: number; y: number; };
    velocity: number = 0;
    image: HTMLImageElement;
    context: CanvasRenderingContext2D;

    constructor({context, position, velocity, image}: ISprite) {
        this.context = context;
        this.position = position;
        this.velocity = velocity;
        this.image = image;
    }

    draw() {
        this.context.drawImage(this.image, this.position.x, this.position.y);
    }
}

export {
    Sprite
}