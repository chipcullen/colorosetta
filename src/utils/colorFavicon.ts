import { colorTypes } from './colorTypes';
import { translatedColor } from '../utils/translatedColor';

const colorFavicon = (incomingColor: string, incomingColorType: colorTypes) => {
    // largely lifted from https://stackoverflow.com/questions/6964144/dynamically-generated-favicon
    const img = new Image();
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    // @ts-ignore - not sure why TS thinks this could be null
    const ctx: CanvasRenderingContext2D = canvas.getContext('2d');
    const link: HTMLLinkElement = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.type = 'image/x-icon';
    link.rel = 'shortcut icon';
    link.href = canvas.toDataURL("image/x-icon");
    document.getElementsByTagName('head')[0].appendChild(link);
    const color = translatedColor(incomingColor, incomingColorType, colorTypes.hex6);
    img.src = '';
    ctx.drawImage(img, 0, 0);
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 32, 32);
    link.href = canvas.toDataURL("image/x-icon");
}

export { colorFavicon }
