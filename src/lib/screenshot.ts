/**
 * Genera una miniatura (screenshot) en vivo de una URL usando el servicio
 * gratuito mShots de WordPress.com. Útil para previsualizar sitios desplegados
 * sin tener que guardar capturas como assets.
 */
export function shot(url: string, width = 1200, height = 675): string {
  return `https://s0.wp.com/mshots/v1/${encodeURIComponent(url)}?w=${width}&h=${height}`;
}

export const DEFAULT_PROJECT_IMAGE = '/images/default-proyect.jpg';
