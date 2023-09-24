import { useEffect } from "react"

import houseKo from '../asset/image/houseko.png';
import playerDown from '../asset/image/playerDown.png';

export const Map = () => {
    useEffect(() => {
        const canvas = document.querySelector('canvas');
        const c = canvas?.getContext('2d'); 

        if (!canvas || !c)
            return ;
        
        canvas.width = 1024;
        canvas.height = 576;

        c.fillStyle = 'white';
        c.fillRect(0, 0, canvas?.width, canvas?.height);

        const mapImage = new Image();
        mapImage.src = houseKo;

        const playerImage = new Image();
        playerImage.src = playerDown;

        mapImage.onload = () => {
            
        }

        window.addEventListener('keydown', (e) => {
            console.log();

            switch (e.key) {
                case 'w':
                    break;
                case 'a':
                    break;
                case 's':
                    break;
                case 'd':
                    break;
            }
        });

        const animate = () => {
            window.requestAnimationFrame(animate);

            c.drawImage(mapImage, 0, 0);

            c.drawImage(
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
        }

        animate();
    }, []);

    return <div style={{backgroundColor: 'black'}}>
        <canvas></canvas>
        test here
    </div>
}