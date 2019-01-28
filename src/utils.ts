export const getCurrentUTCDate = (): Date => {
  const currentUTCDateAsString: string = new Date().toISOString();

  return new Date(currentUTCDateAsString);
};

export const transformUnixTimestampIntoDate = (timestamp: number): Date => {
  return new Date(timestamp * 1000);
};

export const getOffsetDate = (date: Date, offset: number): Date => {
  const dateInMilliseconds: number = date.getTime();

  return new Date(dateInMilliseconds - offset);
};

export const prettifyPostText = (text: string): string => {
  return text.trim().replace(/&amp;#x200B;/g, '').replace(/\\n\\n\\n\\n/g, '\n\n');
};