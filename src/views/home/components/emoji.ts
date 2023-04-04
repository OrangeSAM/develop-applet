/*
 * @Author: Lemon
 * @Date: 2022-09-23 11:26:41
 * @LastEditTime: 2023-04-03 15:17:30
 * @Description:
 */
// 定义emoji的内容，目前是有表情符号，后期可扩展
interface EmojiList {
  symbol: string[];
}

/**
 * 符号表情
 */
const symbol = [
  '😠',
  '😩',
  '😲',
  '😞',
  '😵',
  '😰',
  '😒',
  '😍',
  '😤',
  '😜',
  '😝',
  '😋',
  '😘',
  '😚',
  '😷',
  '😳',
  '😃',
  '😅',
  '😆',
  '😁',
  '😂',
  '😊',
  '😄',
  '😢',
  '😭',
  '😨',
  '😣',
  '😡',
  '😌',
  '😖',
  '😔',
  '😱',
  '😪',
  '😏',
  '😓',
  '😥',
  '😫',
  '😉',
  '✊',
  '✋',
  '👊',
  '👍',
  '👆',
  '👇',
  '👈',
  '👉',
  '👋',
  '👏',
  '👌',
  '👎',
];

export const emojiList: EmojiList = {
  symbol: symbol,
};
