import { useEffect } from "react"

import houseKo from '../asset/image/houseko.png';
import playerDown from '../asset/image/playerDown.png';
import { IKeys } from "./interface";
import { initCanvas ,initListeners } from "./utils";
import { Sprite } from "./model";

export const Map = () => {
    useEffect(() => {
        
        const { canvas, context } = initCanvas();

        const mapImage = new Image();
        mapImage.src = houseKo;

        const playerImage = new Image();
        playerImage.src = playerDown;

        interface ISprite {
            position: { x:number; y:number };
            velocity: number;
            image: HTMLImageElement;
        }

        // class Sprite {
        //     position: { x: number, y: number };
        //     velocity: number = 0;
        //     image: HTMLImageElement;
    
        //     constructor({position, velocity, image}: ISprite){
        //         this.position = position;
        //         this.image = image;
        //     }

        //     draw() {
        //         context?.drawImage(this.image, this.position.x, this.position.y);
        //     }
        // }

        if (!canvas || !context)
            return;

        const background = new Sprite({
            context: context,
            position: {
                x: 0,
                y: 0
            },
            velocity: 0,
            image: mapImage,
        });

        const keys: IKeys = {
            w: {
                pressed: false
            },
            a: {
                pressed: false
            },
            s: {
                pressed: false
            },
            d: {
                pressed: false
            },
        }
        
        
        initListeners(keys);

        const animate = () => {
            window.requestAnimationFrame(animate);

            // c.drawImage(mapImage, 0, 0);
            background.draw();

            context.drawImage(
                playerImage,
                // crop positioning
                0,
                0,
                // crop sizes
                playerImage.width / 4,
                playerImage.height,
                // position on map
                canvas.width / 2 - playerImage.width / 4 / 2,
                canvas.height / 2 - playerImage.height / 2,
                // sizes on map
                playerImage.width / 4,
                playerImage.height,
            );

                // tODO
                // https://www.youtube.com/watch?v=yP5DKzriqXA 2:00:00


                // console.log('lastKey: ', lastKey)

            if (keys.w.pressed) {
                background.position.y += 3
            }
            
            if (keys.a.pressed) {
                background.position.x += 3;
            }
            
            if (keys.s.pressed) {
                background.position.y -= 3;
            }

            if (keys.d.pressed) {
                background.position.x -= 3;
            }
        }

        animate();

        // window.addEventListener('keydown', (e) => {
        //     console.log('keydown', e.key);
        //     switch (e.key) {
        //         case 'w':
        //             keys.w.pressed = true;
        //             lastKey = 'w';
        //             break;
        //         case 'a':
        //             keys.a.pressed = true;
        //             lastKey = 'a';
        //             break;
        //         case 's':
        //             keys.s.pressed = true;
        //             lastKey = 's';
        //             break;
        //         case 'd':
        //             keys.d.pressed = true;
        //             lastKey = 'd';
        //             break;
        //     }
        // });

        // window.addEventListener('keyup', (e) => {
        //     console.log('keyup', e.key);
        //     switch (e.key) {
        //         case 'w':
        //             keys.w.pressed = false;
        //             break;
        //         case 'a':
        //             keys.a.pressed = false;
        //             break;
        //         case 's':
        //             keys.s.pressed = false;
        //             break;
        //         case 'd':
        //             keys.d.pressed = false;
        //             break;
        //     }
        // });
    }, []);

    return <div style={{backgroundColor: 'black'}}>
        <canvas></canvas>
        test here
    </div>
}