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
