export const WHATSAPP_NUMBER = '573015959869';

export const waMessage = (msg: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
