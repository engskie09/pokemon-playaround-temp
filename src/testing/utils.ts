import { IKeys } from "./interface";

/**
 * Initialize map canvas
 */
const initCanvas = () => {
    const canvas = document.querySelector('canvas');
    const context = canvas?.getContext('2d');

    if (canvas) {
        canvas.width = 1024;
        canvas.height = 576;
    }
    
    return {
        canvas,
        context
    }
}

/**
 * Initialize keyboard movement controllers
 */
const initListeners = (keys: IKeys) => {
    window.addEventListener('keydown', (e) => {
        console.log('keydown', e.key);
        switch (e.key) {
            case 'w':
                keys.w.pressed = true;
                break;
            case 'a':
                keys.a.pressed = true;
                break;
            case 's':
                keys.s.pressed = true;
                break;
            case 'd':
                keys.d.pressed = true;
                break;
        }
    });

    window.addEventListener('keyup', (e) => {
        console.log('keyup', e.key);
        switch (e.key) {
            case 'w':
                keys.w.pressed = false;
                break;
            case 'a':
                keys.a.pressed = false;
                break;
            case 's':
                keys.s.pressed = false;
                break;
            case 'd':
                keys.d.pressed = false;
                break;
        }
    });
}

export {
    initCanvas,
    initListeners
}