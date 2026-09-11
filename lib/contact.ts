export const WHATSAPP_NUMBER = "50689401202";
export const WHATSAPP_DISPLAY = "+506 8940 1202";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
